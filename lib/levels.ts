export interface LevelConfig {
  label: string
  instructions: string
  correctionStyle: string
}

export const levels: Record<string, LevelConfig> = {
  A1: {
    label: "Beginner",
    instructions:
      "Use very simple English. Short sentences. Maximum 2 sentences per response. Basic vocabulary only.",
    correctionStyle: "Do not correct grammar. Just model correct usage naturally.",
  },
  A2: {
    label: "Elementary",
    instructions:
      "Use simple English. Short to medium sentences. Maximum 3 sentences per response.",
    correctionStyle: "Do not correct grammar explicitly. Model correct usage in your reply.",
  },
  B1: {
    label: "Intermediate",
    instructions: "Use natural English. Avoid complex vocabulary or idioms. Up to 4 sentences.",
    correctionStyle: "Subtly correct grammar by rephrasing naturally in your response.",
  },
  B2: {
    label: "Upper Intermediate",
    instructions:
      "Use natural, varied English. You may introduce common idioms. Up to 4 sentences.",
    correctionStyle:
      "Gently note grammar mistakes once, then continue the conversation naturally.",
  },
  C1: {
    label: "Advanced",
    instructions: "Speak as a native speaker. Use idioms and nuanced vocabulary naturally.",
    correctionStyle: "Point out unnatural phrasing when it occurs, explaining why it sounds off.",
  },
  C2: {
    label: "Proficient",
    instructions:
      "Speak as an educated native speaker. Engage with complex ideas, nuance, and style.",
    correctionStyle:
      "Comment on style and register, not just grammar. Push the user toward native-level expression.",
  },
}
