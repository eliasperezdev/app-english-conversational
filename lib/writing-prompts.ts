export interface WritingPrompt {
  id: string
  level: string
  topic: string
  title: string
  instruction: string
  wordRange: [number, number]
  format: 'email' | 'message' | 'opinion' | 'description' | 'story'
  tips: string[]
}

export const writingPrompts: WritingPrompt[] = [
  // ─── A1 ─────────────────────────────────────────────────────────────────────

  // greetings
  {
    id: 'a1-greetings-1',
    level: 'A1',
    topic: 'greetings',
    title: 'Introduce yourself',
    instruction: 'Write a short message to a new classmate. Tell them your name, your age, and one thing you like.',
    wordRange: [25, 40],
    format: 'message',
    tips: ['Start with "Hello, my name is…"', 'Use simple sentences like "I am… years old."', 'End with "Nice to meet you!"'],
  },
  {
    id: 'a1-greetings-2',
    level: 'A1',
    topic: 'greetings',
    title: 'Say goodbye',
    instruction: 'Write a short goodbye note to a friend who is moving to another city. Say goodbye and one nice thing about them.',
    wordRange: [20, 35],
    format: 'message',
    tips: ['Use "Good luck!" or "I will miss you."', 'Keep it short and friendly.'],
  },

  // numbers
  {
    id: 'a1-numbers-1',
    level: 'A1',
    topic: 'numbers',
    title: 'About me — numbers',
    instruction: 'Write a short text about yourself using numbers. Include your age, how many people are in your family, and your phone number.',
    wordRange: [25, 40],
    format: 'description',
    tips: ['Write numbers as words (e.g. "twenty-five").', 'Use "I am", "I have", "My number is".'],
  },
  {
    id: 'a1-numbers-2',
    level: 'A1',
    topic: 'numbers',
    title: 'Shopping list',
    instruction: 'Write a shopping list message to a friend. List five things to buy and say how many of each thing you need.',
    wordRange: [25, 40],
    format: 'message',
    tips: ['Use "I need", "Please buy", "three apples".', 'Keep each item on a new sentence or use a list.'],
  },

  // family
  {
    id: 'a1-family-1',
    level: 'A1',
    topic: 'family',
    title: 'My family',
    instruction: 'Write about your family. How many people are in your family? Who are they? Write two or three sentences.',
    wordRange: [25, 45],
    format: 'description',
    tips: ['Use "I have a brother/sister/mother/father".', 'Say their names or ages if you want.'],
  },
  {
    id: 'a1-family-2',
    level: 'A1',
    topic: 'family',
    title: 'My favourite family member',
    instruction: 'Write two or three sentences about your favourite family member. Who are they and why do you like them?',
    wordRange: [25, 45],
    format: 'description',
    tips: ['Start with "My favourite is my…"', 'Use "because" to give a reason.'],
  },

  // colors_shapes
  {
    id: 'a1-colors_shapes-1',
    level: 'A1',
    topic: 'colors_shapes',
    title: 'Describe your room',
    instruction: 'Write a short description of your room. What colour are the walls? What shapes or objects do you see?',
    wordRange: [25, 45],
    format: 'description',
    tips: ['Use "The walls are…", "I have a…"', 'Name at least two colours.'],
  },
  {
    id: 'a1-colors_shapes-2',
    level: 'A1',
    topic: 'colors_shapes',
    title: 'My favourite colour',
    instruction: 'Write about your favourite colour. What is it? Where do you see it? Write two or three sentences.',
    wordRange: [20, 35],
    format: 'description',
    tips: ['Start with "My favourite colour is…"', 'Say why you like it or where you see it.'],
  },

  // food_basic
  {
    id: 'a1-food_basic-1',
    level: 'A1',
    topic: 'food_basic',
    title: 'My favourite food',
    instruction: 'Write about your favourite food or drink. What is it? Do you eat it every day? Write two or three sentences.',
    wordRange: [25, 40],
    format: 'description',
    tips: ['Use "I love", "I like", "I eat … every day".', 'Say if it is for breakfast, lunch or dinner.'],
  },
  {
    id: 'a1-food_basic-2',
    level: 'A1',
    topic: 'food_basic',
    title: 'Foods I like and dislike',
    instruction: 'Write a short text. Name two foods you like and one food you do not like.',
    wordRange: [25, 40],
    format: 'description',
    tips: ['Use "I like…", "I love…", "I don\'t like…"', 'Add a short reason if possible.'],
  },

  // daily_routine
  {
    id: 'a1-daily_routine-1',
    level: 'A1',
    topic: 'daily_routine',
    title: 'My morning',
    instruction: 'Write about what you do every morning. Use three or four actions and say what time you do them.',
    wordRange: [30, 45],
    format: 'description',
    tips: ['Use "I wake up at…", "Then I…", "After that I…"', 'Use times like "at 7 o\'clock".'],
  },
  {
    id: 'a1-daily_routine-2',
    level: 'A1',
    topic: 'daily_routine',
    title: 'My evening',
    instruction: 'Write about what you do every evening. Use three or four actions in order.',
    wordRange: [30, 45],
    format: 'description',
    tips: ['Use "In the evening I…", "Then I…", "I go to bed at…"'],
  },

  // ─── A2 ─────────────────────────────────────────────────────────────────────

  // shopping
  {
    id: 'a2-shopping-1',
    level: 'A2',
    topic: 'shopping',
    title: 'Recommend a shop',
    instruction: 'A friend asks where to buy clothes in your city. Write a short message recommending a shop and explaining why you like it.',
    wordRange: [50, 80],
    format: 'message',
    tips: ['Say the name and location of the shop.', 'Mention price, quality, or style.', 'End with an invitation to go together.'],
  },
  {
    id: 'a2-shopping-2',
    level: 'A2',
    topic: 'shopping',
    title: 'Return a product',
    instruction: 'You bought a shirt online but it is the wrong size. Write a short message to the shop asking to return it and get the correct size.',
    wordRange: [50, 75],
    format: 'email',
    tips: ['Say what the problem is clearly.', 'Be polite. Use "I would like to…"', 'Include your order details (you can invent them).'],
  },

  // weather
  {
    id: 'a2-weather-1',
    level: 'A2',
    topic: 'weather',
    title: 'Today\'s weather',
    instruction: 'Describe the weather where you live today. How does the weather make you feel? What activities can you do?',
    wordRange: [50, 75],
    format: 'description',
    tips: ['Use "It is sunny/cloudy/rainy…"', 'Say how the weather affects your plans.'],
  },
  {
    id: 'a2-weather-2',
    level: 'A2',
    topic: 'weather',
    title: 'My favourite season',
    instruction: 'Write about your favourite season. Why do you like it? What do you usually do in that season?',
    wordRange: [55, 80],
    format: 'description',
    tips: ['Name the season first.', 'Give two or three reasons why you like it.', 'Use "usually", "often", "every year".'],
  },

  // hobbies
  {
    id: 'a2-hobbies-1',
    level: 'A2',
    topic: 'hobbies',
    title: 'My hobbies',
    instruction: 'Write about two or three hobbies you have. When do you do them? Why do you enjoy them?',
    wordRange: [55, 80],
    format: 'description',
    tips: ['Use "In my free time I…"', 'Give a reason using "because".', 'Use "on weekends" or "every day".'],
  },
  {
    id: 'a2-hobbies-2',
    level: 'A2',
    topic: 'hobbies',
    title: 'Recommend a hobby',
    instruction: 'Write a short message to a friend recommending a new hobby for them to try. Say what the hobby is and why they should try it.',
    wordRange: [50, 75],
    format: 'message',
    tips: ['Start with the hobby name.', 'Give two reasons why it is good.', 'Offer to try it together.'],
  },

  // transportation
  {
    id: 'a2-transportation-1',
    level: 'A2',
    topic: 'transportation',
    title: 'My commute',
    instruction: 'Describe how you get to school or work. What transport do you use? How long does it take? Do you like it?',
    wordRange: [55, 80],
    format: 'description',
    tips: ['Say what transport you use.', 'Use "It takes… minutes".', 'Say if you like or dislike it and why.'],
  },
  {
    id: 'a2-transportation-2',
    level: 'A2',
    topic: 'transportation',
    title: 'Directions to my home',
    instruction: 'A friend is visiting you for the first time. Write a short message with directions from the nearest bus stop or metro station to your home.',
    wordRange: [55, 80],
    format: 'message',
    tips: ['Use "Turn left/right at…"', 'Mention landmarks like "next to the supermarket".', 'Say how many minutes it takes to walk.'],
  },

  // school
  {
    id: 'a2-school-1',
    level: 'A2',
    topic: 'school',
    title: 'My favourite subject',
    instruction: 'Write about your favourite school subject. What do you study? Why do you like it? Is it easy or difficult?',
    wordRange: [55, 80],
    format: 'description',
    tips: ['Name the subject and describe it briefly.', 'Use "I like it because…"', 'Say if it is easy or difficult for you.'],
  },
  {
    id: 'a2-school-2',
    level: 'A2',
    topic: 'school',
    title: 'Note to teacher',
    instruction: 'Write a short note to your English teacher explaining why you could not do your homework last night. Be polite and offer to hand it in tomorrow.',
    wordRange: [50, 70],
    format: 'email',
    tips: ['Be polite. Use "I am sorry…"', 'Give a reason.', 'Use "I will hand it in…"'],
  },

  // friends
  {
    id: 'a2-friends-1',
    level: 'A2',
    topic: 'friends',
    title: 'Invite a friend',
    instruction: 'Write a message to a friend inviting them to do something this weekend. Say what you want to do, where, and at what time.',
    wordRange: [50, 75],
    format: 'message',
    tips: ['Use "Do you want to…?", "Let\'s…"', 'Include a specific day, time, and place.', 'End with "Let me know!"'],
  },
  {
    id: 'a2-friends-2',
    level: 'A2',
    topic: 'friends',
    title: 'My best friend',
    instruction: 'Write about your best friend. How do you know them? What do you like about them? What do you do together?',
    wordRange: [55, 80],
    format: 'description',
    tips: ['Say how long you have been friends.', 'Describe their personality.', 'Mention a fun activity you do together.'],
  },

  // ─── B1 ─────────────────────────────────────────────────────────────────────

  // travel
  {
    id: 'b1-travel-1',
    level: 'B1',
    topic: 'travel',
    title: 'Hotel review',
    instruction: 'You stayed at a hotel and had a mixed experience. Write a review describing what was good and what could be improved.',
    wordRange: [80, 110],
    format: 'opinion',
    tips: ['Start with the hotel name and location.', 'Mention at least one positive and one negative.', 'End with a recommendation or score.'],
  },
  {
    id: 'b1-travel-2',
    level: 'B1',
    topic: 'travel',
    title: 'Travel recommendation',
    instruction: 'Recommend a travel destination to a friend who has never visited it. Describe the place, what to do there, and the best time to go.',
    wordRange: [85, 115],
    format: 'message',
    tips: ['Name the destination and say where it is.', 'Suggest two or three activities.', 'Mention the best season to visit.'],
  },

  // restaurant
  {
    id: 'b1-restaurant-1',
    level: 'B1',
    topic: 'restaurant',
    title: 'Restaurant review',
    instruction: 'Write a review of a restaurant you visited recently. Describe the food, the atmosphere, and the service. Would you go back?',
    wordRange: [80, 115],
    format: 'opinion',
    tips: ['Name the restaurant and type of food.', 'Comment on food, service, and atmosphere separately.', 'End with a clear recommendation.'],
  },
  {
    id: 'b1-restaurant-2',
    level: 'B1',
    topic: 'restaurant',
    title: 'Complaint email',
    instruction: 'Write a polite email to a restaurant manager complaining about a disappointing experience. Explain what went wrong and ask for a resolution.',
    wordRange: [85, 115],
    format: 'email',
    tips: ['Be polite but clear about the problem.', 'Give specific details (date, what happened).', 'State clearly what you would like them to do.'],
  },

  // work
  {
    id: 'b1-work-1',
    level: 'B1',
    topic: 'work',
    title: 'Follow-up email',
    instruction: 'Write a professional email to a colleague following up on a meeting you had last week. Summarise the key points agreed and ask about next steps.',
    wordRange: [80, 110],
    format: 'email',
    tips: ['Use a clear subject line.', 'Reference the meeting briefly.', 'Use professional phrases like "As discussed…", "Please let me know…"'],
  },
  {
    id: 'b1-work-2',
    level: 'B1',
    topic: 'work',
    title: 'Describe your job',
    instruction: 'Write a short description of your job (real or imaginary) for a company profile. Explain your role, main responsibilities, and something you enjoy about it.',
    wordRange: [80, 110],
    format: 'description',
    tips: ['State your job title first.', 'Use "I am responsible for…", "My main tasks include…"', 'Add a personal touch at the end.'],
  },

  // health
  {
    id: 'b1-health-1',
    level: 'B1',
    topic: 'health',
    title: 'Healthy habits',
    instruction: 'Write a short text about three healthy habits you have or would like to develop. Explain why each one is important.',
    wordRange: [80, 110],
    format: 'opinion',
    tips: ['Name each habit clearly.', 'Use "because" or "so that" to explain why.', 'Be specific — avoid very generic advice.'],
  },
  {
    id: 'b1-health-2',
    level: 'B1',
    topic: 'health',
    title: 'Doctor\'s appointment message',
    instruction: 'Write a message to your doctor\'s receptionist describing your symptoms and asking to book an urgent appointment.',
    wordRange: [70, 100],
    format: 'message',
    tips: ['Describe your symptoms clearly.', 'Say how long you have had them.', 'Use "I would like to make an appointment…"'],
  },

  // movies_tv
  {
    id: 'b1-movies_tv-1',
    level: 'B1',
    topic: 'movies_tv',
    title: 'Movie review',
    instruction: 'Write a short review of a film you watched recently. Describe the plot briefly, what you liked, and whether you recommend it.',
    wordRange: [80, 115],
    format: 'opinion',
    tips: ['Do not give away the ending.', 'Mention the genre and main character.', 'Give a clear recommendation at the end.'],
  },
  {
    id: 'b1-movies_tv-2',
    level: 'B1',
    topic: 'movies_tv',
    title: 'Recommend a series',
    instruction: 'Recommend a TV series to a friend. Describe what it is about, why it is worth watching, and what type of person would enjoy it.',
    wordRange: [80, 110],
    format: 'message',
    tips: ['Name the series and its genre.', 'Describe the plot in 2–3 sentences without spoilers.', 'Say who it is ideal for.'],
  },

  // sports
  {
    id: 'b1-sports-1',
    level: 'B1',
    topic: 'sports',
    title: 'My favourite sport',
    instruction: 'Write about the sport you enjoy most. Describe the sport, how you play it, and why you love it.',
    wordRange: [80, 110],
    format: 'description',
    tips: ['Explain the basics of the sport briefly.', 'Use personal experience: "I started playing when…"', 'Say what benefits it gives you.'],
  },
  {
    id: 'b1-sports-2',
    level: 'B1',
    topic: 'sports',
    title: 'An exciting match',
    instruction: 'Write a short description of an exciting match you watched or played in. What happened? How did it end? How did you feel?',
    wordRange: [80, 110],
    format: 'story',
    tips: ['Set the scene first (sport, teams, when).', 'Use past tenses to tell the story.', 'Describe your emotions at the end.'],
  },

  // technology
  {
    id: 'b1-technology-1',
    level: 'B1',
    topic: 'technology',
    title: 'App review',
    instruction: 'Write a review of an app you use regularly. Describe what it does, what you like about it, and any disadvantages.',
    wordRange: [80, 110],
    format: 'opinion',
    tips: ['Name the app and its purpose.', 'Give at least two pros and one con.', 'Say who would benefit most from it.'],
  },
  {
    id: 'b1-technology-2',
    level: 'B1',
    topic: 'technology',
    title: 'Social media habits',
    instruction: 'Write about your social media habits. Which platforms do you use? How much time do you spend on them? Do you think it is too much?',
    wordRange: [80, 110],
    format: 'opinion',
    tips: ['Name the specific platforms.', 'Give a rough time estimate.', 'Share your honest opinion about screen time.'],
  },

  // renting_home
  {
    id: 'b1-renting_home-1',
    level: 'B1',
    topic: 'renting_home',
    title: 'My ideal home',
    instruction: 'Describe your ideal home. What type of property is it? Where is it located? What features does it have?',
    wordRange: [80, 110],
    format: 'description',
    tips: ['Start with the type (apartment, house, etc.) and location.', 'Describe at least three features.', 'Explain why these features matter to you.'],
  },
  {
    id: 'b1-renting_home-2',
    level: 'B1',
    topic: 'renting_home',
    title: 'Message to landlord',
    instruction: 'You are renting a flat and the heating is broken. Write a polite message to your landlord explaining the problem and asking when it can be fixed.',
    wordRange: [75, 100],
    format: 'message',
    tips: ['Describe the problem clearly.', 'Say how long it has been an issue.', 'Ask for a specific action or timeline.'],
  },

  // ─── B2 ─────────────────────────────────────────────────────────────────────

  // environment
  {
    id: 'b2-environment-1',
    level: 'B2',
    topic: 'environment',
    title: 'Recycling matters',
    instruction: 'Write a short opinion piece on why recycling is important. Include at least one counterargument and respond to it.',
    wordRange: [120, 160],
    format: 'opinion',
    tips: ['State your position clearly in the first sentence.', 'Use "However, some argue that…" to introduce a counterargument.', 'End with a strong concluding sentence.'],
  },
  {
    id: 'b2-environment-2',
    level: 'B2',
    topic: 'environment',
    title: 'A local environmental issue',
    instruction: 'Describe an environmental problem you have noticed in your city or region. Explain its causes, effects, and suggest one practical solution.',
    wordRange: [120, 155],
    format: 'description',
    tips: ['Be specific about the problem and where it occurs.', 'Use cause-and-effect language: "This leads to…", "As a result…"', 'Make your solution realistic and specific.'],
  },

  // news_media
  {
    id: 'b2-news_media-1',
    level: 'B2',
    topic: 'news_media',
    title: 'Reliable news sources',
    instruction: 'Write a short opinion piece on how people can identify reliable news sources. What should they look for? What should they be suspicious of?',
    wordRange: [120, 160],
    format: 'opinion',
    tips: ['Give two or three concrete criteria for reliability.', 'Mention specific red flags (clickbait, anonymous sources, etc.).', 'Use an authoritative but accessible tone.'],
  },
  {
    id: 'b2-news_media-2',
    level: 'B2',
    topic: 'news_media',
    title: 'Media bias',
    instruction: 'Write a short analysis of how media bias can affect public opinion. Give an example (real or hypothetical) and explain the implications.',
    wordRange: [120, 155],
    format: 'opinion',
    tips: ['Define media bias briefly at the start.', 'Use a concrete example to illustrate your point.', 'Discuss the wider implications for democracy or society.'],
  },

  // relationships
  {
    id: 'b2-relationships-1',
    level: 'B2',
    topic: 'relationships',
    title: 'Maintaining a long-distance friendship',
    instruction: 'Write a piece of advice for someone who has a close friend moving to another country. How can they maintain their friendship despite the distance?',
    wordRange: [120, 155],
    format: 'opinion',
    tips: ['Offer specific, practical advice.', 'Acknowledge that it is difficult before offering solutions.', 'Use "It is important to…", "One useful strategy is…"'],
  },
  {
    id: 'b2-relationships-2',
    level: 'B2',
    topic: 'relationships',
    title: 'A meaningful relationship',
    instruction: 'Write about a relationship that has been important in your life — with a friend, mentor, or family member. What made it meaningful and what did you learn from it?',
    wordRange: [120, 160],
    format: 'description',
    tips: ['Describe the person and your relationship briefly.', 'Focus on a specific memory or lesson.', 'Reflect on how this relationship shaped you.'],
  },

  // education_career
  {
    id: 'b2-education_career-1',
    level: 'B2',
    topic: 'education_career',
    title: 'Career goals',
    instruction: 'Write a short statement about your career goals for the next five years. What do you want to achieve? What steps will you take to get there?',
    wordRange: [120, 155],
    format: 'description',
    tips: ['Be specific about the role or field.', 'Mention the skills or qualifications you need to develop.', 'Show ambition but also realism.'],
  },
  {
    id: 'b2-education_career-2',
    level: 'B2',
    topic: 'education_career',
    title: 'University vs. vocational training',
    instruction: 'Write a short opinion piece comparing university education and vocational training. Which do you think is more valuable and why?',
    wordRange: [120, 160],
    format: 'opinion',
    tips: ['Present both sides fairly before giving your view.', 'Use linking words: "On the other hand…", "In contrast…"', 'Support your opinion with at least one example.'],
  },

  // culture_arts
  {
    id: 'b2-culture_arts-1',
    level: 'B2',
    topic: 'culture_arts',
    title: 'Review a cultural event',
    instruction: 'Write a review of a cultural event you attended (concert, exhibition, theatre show, etc.). Describe what happened and give your personal evaluation.',
    wordRange: [120, 155],
    format: 'opinion',
    tips: ['Name the event, location, and date.', 'Describe the experience vividly.', 'Evaluate it clearly and recommend or not.'],
  },
  {
    id: 'b2-culture_arts-2',
    level: 'B2',
    topic: 'culture_arts',
    title: 'Describe an artwork',
    instruction: 'Choose a painting, sculpture, or piece of music you know well and write a description of it. Explain what it depicts, its mood, and why you find it interesting.',
    wordRange: [120, 155],
    format: 'description',
    tips: ['Name the work and artist.', 'Describe what you see or hear in detail.', 'Share your personal interpretation or feeling.'],
  },

  // travel_culture
  {
    id: 'b2-travel_culture-1',
    level: 'B2',
    topic: 'travel_culture',
    title: 'Culture shock experience',
    instruction: 'Write about a time when you experienced or witnessed culture shock. What happened? How did you feel? What did you learn?',
    wordRange: [120, 155],
    format: 'story',
    tips: ['Set the context (where and when).', 'Describe a specific moment that surprised you.', 'Reflect on what you learned from the experience.'],
  },
  {
    id: 'b2-travel_culture-2',
    level: 'B2',
    topic: 'travel_culture',
    title: 'Living abroad',
    instruction: 'Imagine you have the opportunity to live in a foreign country for one year. Which country would you choose and why? What challenges do you anticipate?',
    wordRange: [120, 160],
    format: 'opinion',
    tips: ['Name the country and give specific reasons for your choice.', 'Mention both the benefits and potential challenges.', 'Show cultural awareness in your reasoning.'],
  },

  // mental_health
  {
    id: 'b2-mental_health-1',
    level: 'B2',
    topic: 'mental_health',
    title: 'Managing stress',
    instruction: 'Write a short advice article on managing stress. Suggest two or three practical strategies and explain why they work.',
    wordRange: [120, 155],
    format: 'opinion',
    tips: ['Use an empathetic, supportive tone.', 'Give specific strategies, not vague advice.', 'End with an encouraging message.'],
  },
  {
    id: 'b2-mental_health-2',
    level: 'B2',
    topic: 'mental_health',
    title: 'The importance of mental health',
    instruction: 'Write a short opinion piece arguing that mental health should be treated with the same seriousness as physical health. Use specific examples to support your argument.',
    wordRange: [120, 160],
    format: 'opinion',
    tips: ['Open with a compelling statement.', 'Use one or two concrete examples.', 'Address a common misconception if possible.'],
  },

  // finance_personal
  {
    id: 'b2-finance_personal-1',
    level: 'B2',
    topic: 'finance_personal',
    title: 'Saving advice',
    instruction: 'Write a short guide giving practical advice on how to start saving money. Target it at someone who earns a modest income and has never saved before.',
    wordRange: [120, 155],
    format: 'opinion',
    tips: ['Keep the advice realistic and accessible.', 'Use numbered steps or clear structure.', 'Avoid jargon — explain any financial terms you use.'],
  },
  {
    id: 'b2-finance_personal-2',
    level: 'B2',
    topic: 'finance_personal',
    title: 'Budgeting for a goal',
    instruction: 'Describe a financial goal (a holiday, a laptop, a course) and outline a simple plan for saving towards it over six months.',
    wordRange: [120, 155],
    format: 'description',
    tips: ['State the goal and its cost.', 'Break it down into monthly savings.', 'Mention one or two sacrifices or changes you would make.'],
  },

  // ─── C1 ─────────────────────────────────────────────────────────────────────

  // politics
  {
    id: 'c1-politics-1',
    level: 'C1',
    topic: 'politics',
    title: 'Electoral reform',
    instruction: 'Write a short opinion piece arguing for or against electoral reform in your country. Develop your argument with evidence or examples and acknowledge the opposing view.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Take a clear, defensible position.', 'Use formal register throughout.', 'Engage with the counterargument substantively, not just dismiss it.'],
  },
  {
    id: 'c1-politics-2',
    level: 'C1',
    topic: 'politics',
    title: 'Policy analysis',
    instruction: 'Analyse a recent or well-known government policy. Discuss its aims, its strengths, and its main criticisms. Conclude with your own assessment.',
    wordRange: [155, 200],
    format: 'opinion',
    tips: ['Name the policy clearly and provide context.', 'Use hedging language where appropriate ("arguably", "it could be claimed that…").', 'Your conclusion should follow logically from your analysis.'],
  },

  // economics
  {
    id: 'c1-economics-1',
    level: 'C1',
    topic: 'economics',
    title: 'Arguing for or against globalisation',
    instruction: 'Write a short argumentative piece either in favour of or against economic globalisation. Use concrete examples and engage with the strongest counterargument.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Define your stance in the opening sentence.', 'Use data or well-known examples to support your claims.', 'Demonstrate awareness of the nuance in this debate.'],
  },
  {
    id: 'c1-economics-2',
    level: 'C1',
    topic: 'economics',
    title: 'Explaining inequality',
    instruction: 'Write a short explanatory piece on why economic inequality has grown in many countries over recent decades. Identify at least two structural causes.',
    wordRange: [150, 195],
    format: 'description',
    tips: ['Structure your argument logically (causes → effects).', 'Distinguish between correlation and causation where relevant.', 'Maintain an analytical rather than emotional tone.'],
  },

  // philosophy
  {
    id: 'c1-philosophy-1',
    level: 'C1',
    topic: 'philosophy',
    title: 'Free will',
    instruction: 'Write a short philosophical piece discussing whether you believe humans have genuine free will. Present your argument, consider objections, and give a nuanced conclusion.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Define "free will" briefly in your own terms.', 'Use logical structure: thesis → argument → objection → response.', 'Avoid vague generalisations — be precise.'],
  },
  {
    id: 'c1-philosophy-2',
    level: 'C1',
    topic: 'philosophy',
    title: 'A moral dilemma',
    instruction: 'Describe a real or hypothetical moral dilemma (such as the trolley problem or a real-world ethical conflict) and explain how you would reason through it.',
    wordRange: [155, 200],
    format: 'opinion',
    tips: ['Present the dilemma clearly before analysing it.', 'Apply a recognised ethical framework if possible (e.g., consequentialism, deontology).', 'Acknowledge uncertainty where it genuinely exists.'],
  },

  // literature
  {
    id: 'c1-literature-1',
    level: 'C1',
    topic: 'literature',
    title: 'Literary analysis',
    instruction: 'Write a short literary analysis of a book or story you know well. Focus on one significant theme and explain how the author develops it through character, plot, or imagery.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Name the text and author in the opening.', 'Quote or closely paraphrase a specific moment to support your analysis.', 'Avoid plot summary — focus on interpretation.'],
  },
  {
    id: 'c1-literature-2',
    level: 'C1',
    topic: 'literature',
    title: 'Comparing two works',
    instruction: 'Compare two books, films, or stories you know well. Focus on a shared theme or technique and argue which treatment you find more effective and why.',
    wordRange: [155, 200],
    format: 'opinion',
    tips: ['Structure your comparison clearly (e.g., point-by-point or work-by-work).', 'Focus on quality of argument, not just personal taste.', 'Use precise literary vocabulary where appropriate.'],
  },

  // science_tech
  {
    id: 'c1-science_tech-1',
    level: 'C1',
    topic: 'science_tech',
    title: 'The impact of artificial intelligence',
    instruction: 'Write a short essay arguing for or against the claim that artificial intelligence will ultimately benefit humanity more than it harms it. Use specific examples.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Take a nuanced position — absolute claims are rarely convincing.', 'Use concrete examples: healthcare, automation, surveillance, etc.', 'Acknowledge uncertainty about long-term outcomes.'],
  },
  {
    id: 'c1-science_tech-2',
    level: 'C1',
    topic: 'science_tech',
    title: 'Scientific breakthrough',
    instruction: 'Write about a scientific or technological breakthrough you find significant. Explain what it is, why it matters, and what ethical considerations it raises.',
    wordRange: [150, 200],
    format: 'description',
    tips: ['Explain the breakthrough accessibly for a non-specialist reader.', 'Connect it to broader societal implications.', 'Raise at least one substantive ethical question.'],
  },

  // social_issues
  {
    id: 'c1-social_issues-1',
    level: 'C1',
    topic: 'social_issues',
    title: 'Systemic inequality',
    instruction: 'Write a short argumentative piece on whether systemic inequality can be effectively addressed through policy alone, or whether cultural change is also necessary.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Define what you mean by "systemic inequality" early on.', 'Consider both policy-based and cultural approaches.', 'Avoid oversimplification — acknowledge complexity.'],
  },
  {
    id: 'c1-social_issues-2',
    level: 'C1',
    topic: 'social_issues',
    title: 'Social mobility',
    instruction: 'Write a short essay examining what barriers prevent social mobility and whether these barriers can realistically be removed.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Identify two or three specific barriers.', 'Use evidence or examples (countries, studies, policies).', 'Your conclusion should reflect on the systemic nature of the problem.'],
  },

  // psychology
  {
    id: 'c1-psychology-1',
    level: 'C1',
    topic: 'psychology',
    title: 'Cognitive bias in everyday decisions',
    instruction: 'Write a short explanatory essay on how a cognitive bias of your choice affects everyday decision-making. Give concrete examples of how it manifests and its consequences.',
    wordRange: [150, 200],
    format: 'description',
    tips: ['Name and define the bias clearly at the start.', 'Use everyday, relatable examples to illustrate it.', 'Discuss why humans have developed this bias (evolutionary or social reasons).'],
  },
  {
    id: 'c1-psychology-2',
    level: 'C1',
    topic: 'psychology',
    title: 'Emotional intelligence at work',
    instruction: 'Write a short piece arguing for the importance of emotional intelligence in professional settings. Use examples to support your case and address possible scepticism.',
    wordRange: [150, 200],
    format: 'opinion',
    tips: ['Define emotional intelligence concisely.', 'Contrast it with traditional measures of competence (e.g. IQ, qualifications).', 'Use specific workplace scenarios to make your argument concrete.'],
  },

  // ─── C2 ─────────────────────────────────────────────────────────────────────

  // debate_rhetoric
  {
    id: 'c2-debate_rhetoric-1',
    level: 'C2',
    topic: 'debate_rhetoric',
    title: 'A formal argument',
    instruction: 'Write a tightly structured formal argument for or against the following: "Democracies should ban political advertising on social media." Use clear logical steps, pre-empt objections, and conclude decisively.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Avoid fallacies — your argument should be logically watertight.', 'Explicitly pre-empt the strongest counterargument.', 'Use formal connectors and hedging with precision.'],
  },
  {
    id: 'c2-debate_rhetoric-2',
    level: 'C2',
    topic: 'debate_rhetoric',
    title: 'Analyse a rhetorical technique',
    instruction: 'Choose a well-known speech, essay, or advertisement and analyse two rhetorical devices used in it. Explain how they function and evaluate their effectiveness.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Identify the devices precisely (e.g. anaphora, chiasmus, ethos, pathos).', 'Quote or closely paraphrase the source.', 'Evaluate effectiveness — not just describe what the technique is.'],
  },

  // academic_discourse
  {
    id: 'c2-academic_discourse-1',
    level: 'C2',
    topic: 'academic_discourse',
    title: 'Abstract-style summary',
    instruction: 'Write an academic abstract (summary) for a hypothetical research paper on a topic of your choice. Follow the convention: background, gap, method, findings, implications.',
    wordRange: [200, 250],
    format: 'description',
    tips: ['Use passive constructions and nominalisations where appropriate.', 'Be precise and impersonal — avoid "I think".', 'Each section of the abstract should be one to two sentences.'],
  },
  {
    id: 'c2-academic_discourse-2',
    level: 'C2',
    topic: 'academic_discourse',
    title: 'Critique a methodology',
    instruction: 'Write a critical evaluation of a research methodology (e.g. surveys, case studies, experimental methods). Discuss its strengths, limitations, and when it is most appropriate.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Use academic vocabulary: "reliability", "validity", "generalisability".', 'Be balanced — no methodology is entirely good or bad.', 'Use hedging language appropriately ("it could be argued that…").'],
  },

  // idioms_culture
  {
    id: 'c2-idioms_culture-1',
    level: 'C2',
    topic: 'idioms_culture',
    title: 'Idiomatic writing',
    instruction: 'Write a short piece (a story, anecdote, or opinion) that naturally incorporates at least five English idioms. The idioms should feel organic, not forced.',
    wordRange: [200, 250],
    format: 'story',
    tips: ['Choose idioms appropriate to the register of your piece.', 'Do not use idioms as decoration — weave them into meaning.', 'Bold the idioms at the end so the evaluator can identify them.'],
  },
  {
    id: 'c2-idioms_culture-2',
    level: 'C2',
    topic: 'idioms_culture',
    title: 'Register shift',
    instruction: 'Write the same piece of information twice: once in very formal academic English and once in casual conversational English. The content must be identical; only the register should change.',
    wordRange: [200, 250],
    format: 'description',
    tips: ['Make the contrast in register as pronounced as possible.', 'Formal version: nominalisations, passive voice, complex syntax.', 'Informal version: contractions, colloquialisms, shorter sentences.'],
  },

  // hypotheticals
  {
    id: 'c2-hypotheticals-1',
    level: 'C2',
    topic: 'hypotheticals',
    title: 'A counterfactual analysis',
    instruction: 'Write a counterfactual analysis: "What if [a key historical event] had not happened?" Choose the event carefully and reason rigorously through the most plausible alternative history.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Choose a specific, well-defined historical event.', 'Reason from causes to consequences systematically.', 'Avoid wild speculation — ground your counterfactual in evidence.'],
  },
  {
    id: 'c2-hypotheticals-2',
    level: 'C2',
    topic: 'hypotheticals',
    title: 'Speculation about the future',
    instruction: 'Write a speculative essay on what one major aspect of society (work, education, healthcare, etc.) will look like in fifty years. Reason from current trends and distinguish what is probable from what is merely possible.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Root your speculation in observable present trends.', 'Use modal verbs precisely: "will", "may", "might", "could".', 'Distinguish optimistic vs. pessimistic scenarios while stating your own view.'],
  },

  // global_issues
  {
    id: 'c2-global_issues-1',
    level: 'C2',
    topic: 'global_issues',
    title: 'Multilateralism under pressure',
    instruction: 'Write a short essay on whether multilateral institutions (such as the UN, WTO, or WHO) are still effective in addressing global challenges. Argue a clear position with evidence.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Define multilateralism and name specific institutions.', 'Give concrete examples of both successes and failures.', 'Address the tension between national sovereignty and global cooperation.'],
  },
  {
    id: 'c2-global_issues-2',
    level: 'C2',
    topic: 'global_issues',
    title: 'Soft power and influence',
    instruction: 'Write an analytical essay on how a specific country uses soft power to extend its global influence. Assess the effectiveness and limits of this approach.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Define soft power (Nye\'s concept) briefly.', 'Focus on one country and its specific tools (cultural exports, aid, diplomacy).', 'Evaluate critically — does it actually achieve influence?'],
  },

  // ethics_tech
  {
    id: 'c2-ethics_tech-1',
    level: 'C2',
    topic: 'ethics_tech',
    title: 'Algorithmic bias',
    instruction: 'Write an essay examining the causes and consequences of algorithmic bias. Argue who bears responsibility — developers, corporations, or regulators — and what should be done.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Define algorithmic bias with a concrete example.', 'Analyse the structural causes, not just individual bad actors.', 'Your policy recommendation should be specific and justified.'],
  },
  {
    id: 'c2-ethics_tech-2',
    level: 'C2',
    topic: 'ethics_tech',
    title: 'Digital sovereignty',
    instruction: 'Write a critical essay on digital sovereignty: the right of states to control data flows and digital infrastructure within their borders. Weigh the security and economic arguments against concerns about censorship and fragmentation of the internet.',
    wordRange: [200, 250],
    format: 'opinion',
    tips: ['Engage with both the security rationale and the civil liberties concerns.', 'Reference real-world examples (e.g. GDPR, the Great Firewall, data localisation laws).', 'Reach a nuanced conclusion — resist a simplistic for/against framing.'],
  },
]

export function getPromptsForTopic(level: string, topic: string): WritingPrompt[] {
  return writingPrompts.filter(
    p => p.level === level.toUpperCase() && p.topic === topic
  )
}
