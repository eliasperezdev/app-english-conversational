# CLAUDE.md — English Practice App

## Qué es este proyecto

Web app para practicar inglés conversacional con IA. El usuario habla o escribe, un LLM responde como tutor, y la respuesta se lee en voz alta con cadencia humana.

Dos modos de uso:
- **Chat libre** (`/chat`): conversación abierta, sin restricciones de tema ni nivel
- **Chat estructurado** (`/practice/[level]/[topic]`): el usuario elige nivel (A1–C1) y tema (shopping, travel, etc.)

Hay un tercer módulo de guías (`/guides`) planificado para fase 2, pero **no es prioridad ahora**. No tocar hasta que esté indicado.

---

## Stack

- **Next.js 14** con App Router
- **Vercel AI SDK** (`ai` package) — `useChat` en cliente, streaming en server
- **shadcn/ui** — componentes base
- **Tailwind CSS** — estilos
- **Web Speech API** — STT (reconocimiento de voz) y TTS (text-to-speech), nativo del browser, sin APIs externas
- **TypeScript** en todo el proyecto

LLM a usar: definir en `.env.local` con `OPENAI_API_KEY` o equivalente. El modelo se configura en `/lib/llm.ts`.

---

## Estructura de carpetas

```
/app
  /chat
    page.tsx                  → chat libre
  /practice
    page.tsx                  → selector de nivel y tema
    /[level]
      /[topic]
        page.tsx              → chat estructurado
  /api
    /chat
      route.ts                → Route Handler único para ambos modos
/components
  chat-interface.tsx          → componente compartido de chat (libre y estructurado)
  message-bubble.tsx          → burbuja individual de mensaje
  voice-controls.tsx          → botón mic + estado de escucha
  tts-player.tsx              → lógica de TTS con delay humano
/lib
  prompts.ts                  → buildPrompt({ mode, level?, topic? })
  tts.ts                      → calcularDelay(text: string): number
  levels.ts                   → configuración A1 → C1
  topics.ts                   → configuración de temas por nivel
/content
  /guides                     → MDX estático (fase 2, no tocar ahora)
```

---

## API Route — `/api/chat`

Único endpoint para ambos modos. Recibe:

```ts
{
  messages: Message[],   // ventana de contexto del cliente (máx 20)
  mode: "free" | "practice",
  level?: string,        // solo en mode: "practice"
  topic?: string,        // solo en mode: "practice"
}
```

El system prompt se construye **server-side** con `buildPrompt()`. El cliente nunca lo ve ni lo construye.

Usa streaming con `streamText` de Vercel AI SDK.

---

## Contexto del chat

- Solo vive en memoria del cliente via `useChat`
- Ventana deslizante de **20 mensajes** como máximo
- El system prompt va **separado**, nunca ocupa lugar en la ventana de 20
- Al desmontar el componente o navegar, el historial desaparece — es intencional

Cómo recortar la ventana antes de enviar al API:

```ts
const contextMessages = messages.slice(-20)
```

---

## System prompts — `lib/prompts.ts`

### Chat libre
```ts
`You are a friendly English tutor and conversation partner.
Be natural, warm, and encouraging. Correct grammar mistakes
gently and naturally within your response, not as a separate note.
Keep responses conversational — 2 to 4 sentences max.`
```

### Chat estructurado
El prompt se construye combinando nivel + tema:

```ts
function buildPrompt({ level, topic }) {
  const levelConfig = levels[level]    // vocabulario, complejidad, instrucciones
  const topicConfig = topics[topic]    // vocabulario específico, situaciones
  return `${levelConfig.instructions}
Topic: ${topicConfig.description}
Vocabulary to use naturally: ${topicConfig.vocabulary.join(", ")}
${levelConfig.correctionStyle}`
}
```

Referencia de niveles:
- **A1/A2**: oraciones cortas, vocabulario muy básico, sin correcciones explícitas
- **B1/B2**: natural pero sin jerga, corregir suavemente dentro de la respuesta
- **C1/C2**: hablar como nativo, usar idioms, señalar frases poco naturales

---

## TTS con delay humano — `lib/tts.ts`

La IA "habla" después de un delay calculado según el largo del output, para simular cadencia humana:

```ts
export function calcularDelay(text: string): number {
  const words = text.split(" ").length
  const wordsPerMinute = 130
  const baseDelay = (words / wordsPerMinute) * 60 * 1000
  const jitter = Math.random() * 800 - 400  // ±400ms
  return Math.max(300, baseDelay + jitter)   // mínimo 300ms
}
```

Flujo completo en el cliente:

```
1. LLM responde en streaming → se muestra el texto mientras llega
2. Al completarse el stream → calcular delay con calcularDelay()
3. setTimeout con ese delay
4. Web Speech API lee el texto
```

El texto se muestra siempre, independientemente de si el usuario tiene audio activado.

---

## Web Speech API

### STT (reconocimiento de voz)
```ts
const recognition = new webkitSpeechRecognition()
recognition.lang = "en-US"
recognition.continuous = false
recognition.interimResults = false
```

### TTS (síntesis de voz)
```ts
const utterance = new SpeechSynthesisUtterance(text)
utterance.lang = "en-US"
utterance.rate = 0.95   // ligeramente más lento que default
window.speechSynthesis.speak(utterance)
```

Ambas APIs son browser-only. Usar con `typeof window !== "undefined"` o en componentes con `"use client"`.

---

## Configuración de niveles — `lib/levels.ts`

```ts
export const levels = {
  A1: {
    label: "Beginner",
    instructions: "Use very simple English. Short sentences. Maximum 2 sentences per response.",
    correctionStyle: "Do not correct grammar. Just model correct usage.",
  },
  B1: {
    label: "Intermediate",
    instructions: "Use natural English. Avoid complex vocabulary or idioms.",
    correctionStyle: "Subtly correct grammar by rephrasing naturally in your response.",
  },
  C1: {
    label: "Advanced",
    instructions: "Speak as a native. Use idioms naturally.",
    correctionStyle: "Point out unnatural phrasing when it occurs.",
  },
  // A2, B2, C2 siguiendo el mismo patrón
}
```

---

## Configuración de temas — `lib/topics.ts`

```ts
export const topics = {
  shopping: {
    label: "Shopping",
    description: "Buying clothes, asking for prices, comparing products in a store.",
    vocabulary: ["How much is this?", "Do you have this in a different size?", "I'll take it", "receipt", "discount"],
  },
  travel: {
    label: "Travel",
    description: "Airport, booking hotels, asking for directions.",
    vocabulary: ["boarding pass", "check-in", "departure gate", "book a room", "single/double room"],
  },
  // agregar temas sin tocar la lógica del chat
}
```

---

## Convenciones

- Componentes en PascalCase, archivos en kebab-case
- Props tipadas siempre con TypeScript interfaces
- Sin `any`
- El API route no tiene lógica de negocio — solo recibe, llama a `buildPrompt()`, llama al LLM, devuelve stream
- Toda la lógica de prompts vive en `/lib/prompts.ts`
- Toda la lógica de TTS/delay vive en `/lib/tts.ts`

---

## Variables de entorno

```
OPENAI_API_KEY=           # o el proveedor que se use
```

---

## Fase 2 — Guías (no tocar ahora)

Existirá `/guides` con contenido MDX estático generado con IA. Cada archivo tendrá frontmatter con `level`, `topic`, y `vocabulary[]`. No hay acoplamiento con el sistema de chat — son completamente independientes.
