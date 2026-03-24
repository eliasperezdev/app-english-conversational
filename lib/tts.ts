export function calcularDelay(text: string): number {
  const words = text.split(" ").length
  // Short pause proportional to text length, capped at 1.5s
  const base = Math.min(1500, words * 30)
  const jitter = Math.random() * 200 - 100 // ±100ms
  return Math.max(300, base + jitter)
}
