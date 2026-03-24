export interface TopicConfig {
  label: string
  description: string
  vocabulary: string[]
}

export const topics: Record<string, TopicConfig> = {
  shopping: {
    label: "Shopping",
    description: "Buying clothes, asking for prices, comparing products in a store.",
    vocabulary: [
      "How much is this?",
      "Do you have this in a different size?",
      "I'll take it",
      "receipt",
      "discount",
      "fitting room",
      "on sale",
    ],
  },
  travel: {
    label: "Travel",
    description: "Airport, booking hotels, asking for directions.",
    vocabulary: [
      "boarding pass",
      "check-in",
      "departure gate",
      "book a room",
      "single/double room",
      "round trip",
      "baggage claim",
    ],
  },
  restaurant: {
    label: "Restaurant",
    description: "Ordering food, making reservations, asking about the menu.",
    vocabulary: [
      "I'd like to order",
      "Could I have the bill?",
      "table for two",
      "daily special",
      "allergy",
      "appetizer",
      "take away",
    ],
  },
  work: {
    label: "Work",
    description: "Office conversations, meetings, emails, and professional situations.",
    vocabulary: [
      "deadline",
      "follow up",
      "let's schedule a meeting",
      "I'll get back to you",
      "as per our discussion",
      "workload",
      "feedback",
    ],
  },
  health: {
    label: "Health",
    description: "Doctor visits, describing symptoms, asking about medicine.",
    vocabulary: [
      "I have a headache",
      "prescription",
      "symptoms",
      "make an appointment",
      "side effects",
      "pharmacy",
      "feel under the weather",
    ],
  },
}
