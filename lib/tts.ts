export function calcularDelay(text: string): number {
  const words = text.split(" ").length
  const wordsPerMinute = 130
  const baseDelay = (words / wordsPerMinute) * 60 * 1000
  const jitter = Math.random() * 800 - 400 // ±400ms
  return Math.max(300, baseDelay + jitter)  // mínimo 300ms
}
