export interface TopicConfig {
  label: string
  description: string
  vocabulary: string[]
}

export const topics: Record<string, TopicConfig> = {
  // ── A1 ────────────────────────────────────────────────────────────────────
  greetings: {
    label: "Greetings",
    description: "Saying hello, goodbye, and introducing yourself.",
    vocabulary: [
      "Hello", "Good morning", "Good night", "Nice to meet you",
      "What's your name?", "My name is", "How are you?", "I'm fine",
    ],
  },
  numbers: {
    label: "Numbers & Age",
    description: "Counting, telling your age, and basic numbers.",
    vocabulary: [
      "How old are you?", "I am … years old", "phone number",
      "one two three", "How many?", "a lot", "a little", "zero",
    ],
  },
  family: {
    label: "Family",
    description: "Talking about your family members.",
    vocabulary: [
      "mother", "father", "brother", "sister", "son", "daughter",
      "Do you have siblings?", "I have two brothers", "grandparents",
    ],
  },
  colors_shapes: {
    label: "Colors & Shapes",
    description: "Describing things using colors and basic shapes.",
    vocabulary: [
      "red", "blue", "green", "yellow", "What color is it?",
      "It's a circle", "square", "big", "small", "my favorite color is",
    ],
  },
  food_basic: {
    label: "Food & Drinks",
    description: "Talking about food you like and don't like.",
    vocabulary: [
      "I like", "I don't like", "Do you like…?", "hungry", "thirsty",
      "breakfast", "lunch", "dinner", "water", "coffee", "delicious",
    ],
  },
  daily_routine: {
    label: "Daily Routine",
    description: "Describing your everyday activities.",
    vocabulary: [
      "wake up", "go to school", "eat breakfast", "go to bed",
      "What time is it?", "in the morning", "at night", "every day",
    ],
  },

  // ── A2 ────────────────────────────────────────────────────────────────────
  shopping: {
    label: "Shopping",
    description: "Buying clothes, asking for prices, comparing products in a store.",
    vocabulary: [
      "How much is this?", "Do you have this in a different size?", "I'll take it",
      "receipt", "discount", "fitting room", "on sale", "Can I try this on?",
    ],
  },
  weather: {
    label: "Weather",
    description: "Talking about the weather and climate.",
    vocabulary: [
      "It's raining", "sunny", "cloudy", "cold", "hot",
      "What's the weather like?", "temperature", "forecast", "umbrella",
    ],
  },
  hobbies: {
    label: "Hobbies",
    description: "Sharing what you do in your free time.",
    vocabulary: [
      "What do you do for fun?", "I enjoy", "I love", "I hate", "play guitar",
      "read books", "go hiking", "watch movies", "spend time", "on weekends",
    ],
  },
  transportation: {
    label: "Transportation",
    description: "Getting around by bus, train, and other transport.",
    vocabulary: [
      "How do I get to…?", "Take the bus", "train station", "taxi",
      "turn left", "turn right", "How far is it?", "on foot", "ticket",
    ],
  },
  school: {
    label: "School",
    description: "Talking about classes, teachers, and student life.",
    vocabulary: [
      "subject", "homework", "exam", "teacher", "classroom",
      "I study", "difficult", "easy", "grade", "library",
    ],
  },
  friends: {
    label: "Friends & Plans",
    description: "Making plans and talking about your friends.",
    vocabulary: [
      "Do you want to…?", "Let's meet at", "What are you doing this weekend?",
      "best friend", "fun", "party", "see you later", "cancel plans",
    ],
  },

  // ── B1 ────────────────────────────────────────────────────────────────────
  travel: {
    label: "Travel",
    description: "Airport, booking hotels, and asking for directions.",
    vocabulary: [
      "boarding pass", "check-in", "departure gate", "book a room",
      "single/double room", "round trip", "baggage claim", "visa",
    ],
  },
  restaurant: {
    label: "Restaurant",
    description: "Ordering food, making reservations, asking about the menu.",
    vocabulary: [
      "I'd like to order", "Could I have the bill?", "table for two",
      "daily special", "allergy", "appetizer", "take away", "medium-rare",
    ],
  },
  work: {
    label: "Work",
    description: "Office conversations, meetings, and professional situations.",
    vocabulary: [
      "deadline", "follow up", "let's schedule a meeting",
      "I'll get back to you", "as per our discussion", "workload", "feedback",
    ],
  },
  health: {
    label: "Health",
    description: "Doctor visits, describing symptoms, asking about medicine.",
    vocabulary: [
      "I have a headache", "prescription", "symptoms", "make an appointment",
      "side effects", "pharmacy", "feel under the weather", "recovery",
    ],
  },
  movies_tv: {
    label: "Movies & TV",
    description: "Discussing films, series, genres, and recommendations.",
    vocabulary: [
      "genre", "plot", "main character", "I highly recommend", "sequel",
      "documentary", "based on a true story", "What did you think of…?",
    ],
  },
  sports: {
    label: "Sports",
    description: "Talking about sports, teams, and staying active.",
    vocabulary: [
      "team", "match", "score", "win", "lose", "training",
      "I play soccer", "cheer for", "championship", "athlete",
    ],
  },
  technology: {
    label: "Technology",
    description: "Smartphones, social media, apps, and digital life.",
    vocabulary: [
      "app", "update", "social media", "search engine", "download",
      "password", "screen time", "notification", "Wi-Fi", "device",
    ],
  },
  renting_home: {
    label: "Renting & Home",
    description: "Finding a place to live, describing your home.",
    vocabulary: [
      "rent", "landlord", "lease", "utilities", "furnished",
      "neighbourhood", "move in", "deposit", "square meters", "cozy",
    ],
  },

  // ── B2 ────────────────────────────────────────────────────────────────────
  environment: {
    label: "Environment",
    description: "Climate change, recycling, and sustainability.",
    vocabulary: [
      "carbon footprint", "renewable energy", "sustainability", "recycle",
      "greenhouse gas", "climate change", "fossil fuels", "biodiversity",
    ],
  },
  news_media: {
    label: "News & Media",
    description: "Discussing current events, journalism, and media bias.",
    vocabulary: [
      "headline", "breaking news", "reliable source", "bias", "editorial",
      "fact-check", "misinformation", "public opinion", "coverage",
    ],
  },
  relationships: {
    label: "Relationships",
    description: "Friendships, romantic relationships, and family dynamics.",
    vocabulary: [
      "trust", "commitment", "long-distance", "conflict resolution",
      "boundaries", "supportive", "miscommunication", "emotionally available",
    ],
  },
  education_career: {
    label: "Education & Career",
    description: "University life, career choices, and professional development.",
    vocabulary: [
      "degree", "tuition fees", "internship", "gap year", "career path",
      "soft skills", "networking", "job market", "mentor", "promotion",
    ],
  },
  culture_arts: {
    label: "Culture & Arts",
    description: "Art, music, traditions, and cultural experiences.",
    vocabulary: [
      "exhibition", "contemporary art", "genre", "cultural heritage",
      "performing arts", "critique", "interpret", "masterpiece", "influence",
    ],
  },
  travel_culture: {
    label: "Travel & Culture Shock",
    description: "Deep travel experiences, culture differences, and adaptation.",
    vocabulary: [
      "culture shock", "local customs", "immersion", "off the beaten path",
      "homestay", "language barrier", "adapt", "perspective", "expat",
    ],
  },
  mental_health: {
    label: "Mental Health",
    description: "Stress, well-being, emotions, and seeking support.",
    vocabulary: [
      "anxiety", "burnout", "mindfulness", "therapy", "coping mechanism",
      "resilience", "emotional support", "self-care", "overwhelmed",
    ],
  },
  finance_personal: {
    label: "Personal Finance",
    description: "Budgeting, saving, investing, and financial planning.",
    vocabulary: [
      "budget", "savings account", "interest rate", "invest", "debt",
      "mortgage", "financial goals", "expense", "net worth", "diversify",
    ],
  },

  // ── C1 ────────────────────────────────────────────────────────────────────
  politics: {
    label: "Politics",
    description: "Political systems, elections, and policy debates.",
    vocabulary: [
      "democracy", "legislation", "electoral system", "lobbying",
      "policy reform", "civil liberties", "bipartisan", "geopolitics",
    ],
  },
  economics: {
    label: "Economics",
    description: "Markets, financial systems, and economic trends.",
    vocabulary: [
      "inflation", "GDP", "supply and demand", "fiscal policy",
      "market crash", "economic disparity", "globalization", "trade deficit",
    ],
  },
  philosophy: {
    label: "Philosophy",
    description: "Ethics, consciousness, meaning of life, and moral dilemmas.",
    vocabulary: [
      "existentialism", "moral dilemma", "free will", "ethics",
      "subjective reality", "consciousness", "paradox", "philosophical framework",
    ],
  },
  literature: {
    label: "Literature",
    description: "Books, authors, themes, and literary analysis.",
    vocabulary: [
      "narrative", "symbolism", "unreliable narrator", "motif",
      "stream of consciousness", "allegory", "postmodern", "literary canon",
    ],
  },
  science_tech: {
    label: "Science & Innovation",
    description: "Scientific discoveries, research, and emerging technology.",
    vocabulary: [
      "hypothesis", "peer review", "breakthrough", "artificial intelligence",
      "quantum computing", "ethical implications", "data privacy", "algorithm",
    ],
  },
  social_issues: {
    label: "Social Issues",
    description: "Inequality, diversity, justice, and societal challenges.",
    vocabulary: [
      "systemic inequality", "social mobility", "privilege", "advocacy",
      "discrimination", "inclusion", "intersectionality", "grassroots movement",
    ],
  },
  psychology: {
    label: "Psychology",
    description: "Human behavior, cognitive biases, and psychological concepts.",
    vocabulary: [
      "cognitive bias", "confirmation bias", "attachment theory", "intrinsic motivation",
      "behavioral pattern", "subconscious", "emotional intelligence", "perception",
    ],
  },

  // ── C2 ────────────────────────────────────────────────────────────────────
  debate_rhetoric: {
    label: "Debate & Rhetoric",
    description: "Argumentation, persuasion techniques, and critical discourse.",
    vocabulary: [
      "logical fallacy", "rhetorical device", "straw man", "ad hominem",
      "devil's advocate", "rebuttal", "burden of proof", "nuanced argument",
    ],
  },
  academic_discourse: {
    label: "Academic Discourse",
    description: "Research, academic writing, scholarly arguments.",
    vocabulary: [
      "empirical evidence", "peer-reviewed", "epistemology", "methodology",
      "citation", "theoretical framework", "dissertation", "academic rigour",
    ],
  },
  idioms_culture: {
    label: "Idioms & Register",
    description: "Idiomatic expressions, slang, and shifting between registers.",
    vocabulary: [
      "bite the bullet", "read between the lines", "on the fence",
      "colloquial", "formal register", "hedging language", "tone shift",
    ],
  },
  hypotheticals: {
    label: "Hypotheticals",
    description: "Counterfactuals, speculation, and abstract reasoning.",
    vocabulary: [
      "If X had happened…", "counterfactual", "speculative", "What if…",
      "in theory", "plausible", "implausible", "extrapolate",
    ],
  },
  global_issues: {
    label: "Global Issues",
    description: "Geopolitics, international relations, and global challenges.",
    vocabulary: [
      "multilateralism", "sovereignty", "diplomatic relations", "sanctions",
      "humanitarian crisis", "non-state actors", "soft power", "global governance",
    ],
  },
  ethics_tech: {
    label: "Ethics of Technology",
    description: "AI ethics, digital rights, and the future of humanity.",
    vocabulary: [
      "algorithmic bias", "surveillance capitalism", "digital sovereignty",
      "techno-utopianism", "autonomous systems", "consent", "transparency",
    ],
  },
}

// Topics available per level (keys into `topics`)
export const topicsByLevel: Record<string, string[]> = {
  A1: ["greetings", "numbers", "family", "colors_shapes", "food_basic", "daily_routine"],
  A2: ["shopping", "weather", "hobbies", "transportation", "school", "friends"],
  B1: ["travel", "restaurant", "work", "health", "movies_tv", "sports", "technology", "renting_home"],
  B2: ["environment", "news_media", "relationships", "education_career", "culture_arts", "travel_culture", "mental_health", "finance_personal"],
  C1: ["politics", "economics", "philosophy", "literature", "science_tech", "social_issues", "psychology"],
  C2: ["debate_rhetoric", "academic_discourse", "idioms_culture", "hypotheticals", "global_issues", "ethics_tech"],
}
