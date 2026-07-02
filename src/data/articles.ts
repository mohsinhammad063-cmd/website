export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  id: string;
  slug: string;
  type?: string;
  title: string;
  category: string;
  game?: string;
  difficulty: string;
  ageRange: string;
  readTime: string;
  description: string;
  image: string;
  sections: ArticleSection[];
  tips: string[];
  safetyNote: string;
}

export const articles: Article[] = [
  // Tips
  {
    id: "minecraft-top-10",
    slug: "top-10-minecraft-tips-for-beginners",
    type: "tip",
    title: "Top 10 Minecraft Tips for Beginners",
    category: "Minecraft",
    game: "Minecraft",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "5 min read",
    description: "Learn the most important things to do on your first day in Minecraft, from getting wood to surviving the first night.",
    image: "/images/minecraft-style-blocks.svg",
    sections: [
       {
           heading: "Punch Trees",
           body: "The very first thing you need to do is punch a tree to get wood. Wood is the foundation of everything in Minecraft."
       },
       {
           heading: "Make a Crafting Table",
           body: "Use 4 wooden planks to make a crafting table. This allows you to build more complex items like tools and beds."
       }
    ],
    tips: [
      "Always carry food.",
      "Don't dig straight down.",
      "Build a bed quickly.",
      "Light up your base.",
      "Use stone tools.",
      "Listen for monsters."
    ],
    safetyNote: "Remember to take screen breaks every hour!"
  },
  {
    id: "build-better-minecraft",
    slug: "how-to-build-better-houses-in-minecraft",
    type: "tip",
    title: "How to Build Better Houses in Minecraft",
    category: "Minecraft",
    game: "Minecraft",
    difficulty: "Medium",
    ageRange: "8+",
    readTime: "7 min read",
    description: "Make your houses look amazing with these simple design tricks, using depth, texture, and good lighting.",
    image: "/images/minecraft-style-blocks.svg",
    sections: [
       {
           heading: "Add Depth",
           body: "Don't just build a flat wall. Bring the corners out one block to add depth to your building."
       }
    ],
    tips: [
      "Plan before building.",
      "Use different blocks.",
      "Add windows and lights.",
      "Make roofs better.",
      "Use paths and gardens.",
      "Practice in creative mode."
    ],
    safetyNote: "Take regular breaks to rest your eyes."
  },
  {
    id: "minecraft-survival",
    slug: "minecraft-survival-tips-for-new-players",
    type: "tip",
    title: "Minecraft Survival Tips for New Players",
    category: "Minecraft",
    game: "Minecraft",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "6 min read",
    description: "How to find food, avoid dying, and keep your items safe when playing survival mode.",
    image: "/images/minecraft-style-blocks.svg",
    sections: [
       {
           heading: "Find Food Early",
           body: "Killing animals or farming wheat is essential. You cannot heal if your hunger bar is empty."
       }
    ],
    tips: [
      "Cook your meat.",
      "Make a shield.",
      "Always carry water.",
      "Sleep through the night."
    ],
    safetyNote: "If the game is too scary, you can always play in Peaceful mode."
  },
  {
    id: "minecraft-creative",
    slug: "best-creative-mode-ideas-for-kids",
    type: "tip",
    title: "Best Creative Mode Ideas for Kids",
    category: "Minecraft",
    game: "Minecraft",
    difficulty: "Easy",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Fun and easy things to build when you have infinite blocks and can fly.",
    image: "/images/minecraft-style-blocks.svg",
    sections: [
       {
           heading: "Build a Rollercoaster",
           body: "Use rails and powered rails to make a fun ride around your world."
       }
    ],
    tips: [
      "Try pixel art.",
      "Build a giant treehouse.",
      "Make an underwater base."
    ],
    safetyNote: "Creative mode is a great way to relax."
  },
  {
    id: "roblox-obby",
    slug: "how-to-get-better-at-roblox-obby-games",
    type: "tip",
    title: "How to Get Better at Roblox Obby Games",
    category: "Roblox",
    game: "Roblox",
    difficulty: "Medium",
    ageRange: "8+",
    readTime: "5 min read",
    description: "Timing your jumps and turning the camera are key to beating difficult obstacle courses.",
    image: "/images/roblox-style-obstacle.svg",
    sections: [
       {
           heading: "Use Shift Lock",
           body: "If playing on PC, use shift lock to make your camera follow your mouse. It helps with precise jumping."
       }
    ],
    tips: [
      "Take your time.",
      "Watch the patterns.",
      "Adjust your camera."
    ],
    safetyNote: "Obbies can be frustrating. Take a break if you get mad."
  },
  {
    id: "roblox-safety",
    slug: "roblox-safety-tips-for-young-players",
    type: "tip",
    title: "Roblox Safety Tips for Young Players",
    category: "Safety",
    game: "Roblox",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "5 min read",
    description: "How to keep your account safe and what to do if someone is being mean in chat.",
    image: "/images/safe-gaming-shield.svg",
    sections: [
       {
           heading: "Never Share Passwords",
           body: "Not even with your best friend. Only your parents should know your password."
       }
    ],
    tips: [
      "Don't click free Robux links.",
      "Report bad players.",
      "Play with friends you know in real life."
    ],
    safetyNote: "Always tell a parent if someone online makes you uncomfortable."
  },
  {
    id: "roblox-choose-games",
    slug: "how-to-choose-good-roblox-games",
    type: "tip",
    title: "How to Choose Good Roblox Games",
    category: "Roblox",
    game: "Roblox",
    difficulty: "Easy",
    ageRange: "8+",
    readTime: "4 min read",
    description: "With millions of games, how do you find the fun, safe ones and avoid the scams?",
    image: "/images/roblox-style-obstacle.svg",
    sections: [
       {
           heading: "Check the Likes",
           body: "Games with a lot of likes compared to dislikes are usually good."
       }
    ],
    tips: [
      "Read the description.",
      "Avoid games promising free items."
    ],
    safetyNote: "Some games might be too scary. Check with parents."
  },
  {
    id: "avoid-scams",
    slug: "how-to-avoid-fake-rewards-and-scams",
    type: "tip",
    title: "How to Avoid Fake Rewards and Scams",
    category: "Safety",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Learn how to spot fake offers, keep your items safe in trades, and protect your account from hackers.",
    image: "/images/safe-gaming-shield.svg",
    sections: [
       {
           heading: "Free Currency Scams",
           body: "There is no such thing as a free Robux or V-Bucks generator. They are all scams designed to steal your account."
       }
    ],
    tips: [
      "Free coins scams.",
      "Fake Robux/V-Bucks offers.",
      "Password stealing.",
      "Fake trading.",
      "Suspicious links.",
      "Ask a parent before clicking.",
      "Never share login details."
    ],
    safetyNote: "Never share your password, not even with friends."
  },
  {
    id: "fortnite-tips",
    slug: "fortnite-beginner-tips-for-better-practice",
    type: "tip",
    title: "Fortnite Beginner Tips for Better Practice",
    category: "Action",
    game: "Fortnite",
    difficulty: "Medium",
    ageRange: "10+",
    readTime: "6 min read",
    description: "Stop dropping in crowded areas. Learn the basics of gathering materials and simple building first.",
    image: "/images/aim-training.svg",
    sections: [
       {
           heading: "Land Quietly",
           body: "Choose a spot far from the battle bus path to gather weapons safely before fighting."
       }
    ],
    tips: [
      "Gather materials constantly.",
      "Use headphones.",
      "Practice in Creative mode."
    ],
    safetyNote: "Competitive games can be stressful. Remember to breathe!"
  },
  // Guides
  {
    id: "improve-aim",
    slug: "how-to-improve-your-aim-in-games",
    type: "guide",
    title: "How to Improve Your Aim in Games",
    category: "Skills",
    difficulty: "Medium",
    ageRange: "10+",
    readTime: "6 min read",
    description: "Lower your sensitivity slightly. It might feel slow at first, but it makes tracking moving targets much easier and more consistent.",
    image: "/images/aim-training.svg",
    sections: [
       {
           heading: "Find the right sensitivity",
           body: "A lower sensitivity is generally better for aiming. It allows for more precise movements."
       },
       {
           heading: "Crosshair placement",
           body: "Always keep your crosshair at head height, even when you aren't shooting. This way you are ready when an enemy appears."
       }
    ],
    tips: [
      "Lower sensitivity.",
      "Practice crosshair placement.",
      "Warm up before playing.",
      "Focus on the target.",
      "Stay calm."
    ],
    safetyNote: "Don't get frustrated. Aim takes a long time to improve."
  },
  {
    id: "best-settings",
    slug: "best-settings-for-smooth-gameplay",
    type: "guide",
    title: "Best Settings for Smooth Gameplay",
    category: "Settings",
    difficulty: "Easy",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Turn down shadows and effects to make your game run faster and smoother.",
    image: "/images/controller-badge.svg",
    sections: [
       {
           heading: "Turn off V-Sync",
           body: "Sometimes V-sync can cause input delay. Try turning it off if your game feels laggy."
       }
    ],
    tips: [
      "Lower shadows.",
      "Update drivers.",
      "Close other apps."
    ],
    safetyNote: "If changing settings makes the screen go black, don't panic. Ask an adult for help."
  },
  {
    id: "racing-tips",
    slug: "simple-tips-to-win-more-racing-games",
    type: "guide",
    title: "Simple Tips to Win More Racing Games",
    category: "Racing Games",
    difficulty: "Medium",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Discover the best ways to corner, when to use boosts, and how to choose the right car for the track.",
    image: "/images/racing-track.svg",
    sections: [
       {
           heading: "Learn the track",
           body: "Knowing the track is half the battle. If you know a sharp turn is coming, you can prepare for it."
       }
    ],
    tips: [
      "Learn the track.",
      "Brake before turns.",
      "Avoid crashing.",
      "Practice cornering.",
      "Upgrade carefully.",
      "Stay calm near the finish."
    ],
    safetyNote: "Take breaks to stretch your hands and eyes."
  },
  {
    id: "difficult-levels",
    slug: "how-to-complete-difficult-levels",
    type: "guide",
    title: "How to Complete Difficult Levels",
    category: "Skills",
    difficulty: "Hard",
    ageRange: "8+",
    readTime: "5 min read",
    description: "If you're stuck, take a 5-minute break. Sometimes your brain just needs a rest to see the solution clearly when you return.",
    image: "/images/trophy-tips.svg",
    sections: [
       {
           heading: "Analyze the level",
           body: "Before you just rush in, look at what the obstacles are and where the safe spots are."
       },
       {
           heading: "Learn from dying",
           body: "Every time you fail, ask yourself why. Did you jump too early? Too late?"
       }
    ],
    tips: [
      "Take a break if stuck.",
      "Watch a video guide if really lost.",
      "Try a different strategy.",
      "Stay positive."
    ],
    safetyNote: "If you get angry, it's time to stop playing."
  },
  {
    id: "save-coins",
    slug: "how-to-save-coins-and-rewards",
    type: "guide",
    title: "How to Save Coins and Rewards",
    category: "Management",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Don't spend in-game money on the first item you see. Save up for items that give you permanent upgrades or special abilities.",
    image: "/images/coins-rewards.svg",
    sections: [
       {
           heading: "Set a goal",
           body: "Decide what expensive item you really want, and only buy that."
       },
       {
           heading: "Avoid cosmetics at first",
           body: "Skins are cool, but upgrades that help you win are better to buy first."
       }
    ],
    tips: [
      "Don't buy the first thing you see.",
      "Save for permanent upgrades.",
      "Complete daily quests for more coins.",
      "Ignore cosmetics until later."
    ],
    safetyNote: "Never use real money without asking a parent."
  },
  {
    id: "choose-character",
    slug: "how-to-choose-the-right-character",
    type: "guide",
    title: "How to Choose the Right Character",
    category: "Strategy",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Pick characters that match your playstyle. If you like to rush in, choose high-health characters. If you prefer to stay back, choose ranged characters.",
    image: "/images/beginner-map.svg",
    sections: [
       {
           heading: "Know your playstyle",
           body: "Do you like attacking? Defending? Healing? Pick a character that does what you enjoy."
       },
       {
           heading: "Try them all",
           body: "Don't just stick to the first character you try. You might find you like another one better."
       }
    ],
    tips: [
      "Match character to playstyle.",
      "Try all available characters.",
      "Learn character abilities in practice mode."
    ],
    safetyNote: "Have fun experimenting!"
  },
  {
    id: "practice-without-angry",
    slug: "how-to-practice-without-getting-angry",
    type: "guide",
    title: "How to Practice Without Getting Angry",
    category: "Mindset",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "5 min read",
    description: "Gaming should be fun. Learn how to manage your emotions and stay positive even when you are losing.",
    image: "/images/controller-badge.svg",
    sections: [
       {
           heading: "Recognize the signs",
           body: "Are you gripping the controller too tight? Is your breathing fast? You are getting angry."
       },
       {
           heading: "Step away",
           body: "The best cure for gamer rage is to put the controller down and walk into another room for a few minutes."
       }
    ],
    tips: [
      "Breathe deeply.",
      "Take breaks often.",
      "Drink water.",
      "Remember it is just a game.",
      "Play something relaxing instead."
    ],
    safetyNote: "If you feel like breaking something, turn off the game immediately."
  },
  {
    id: "safe-online-rules",
    slug: "safe-online-gaming-rules-for-kids",
    type: "guide",
    title: "Safe Online Gaming Rules for Kids",
    category: "Safety",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "5 min read",
    description: "Simple rules to remember every time you log on to play with others.",
    image: "/images/safe-gaming-shield.svg",
    sections: [
       {
           heading: "Keep info private",
           body: "Never share real names, addresses, or phone numbers."
       }
    ],
    tips: [
      "Use a nickname.",
      "Be kind.",
      "Report bullies."
    ],
    safetyNote: "Gaming is safer when parents know what you play."
  },
  {
    id: "best-games",
    slug: "best-games-for-kids-age-8-15",
    type: "guide",
    title: "Best Games for Kids Age 8–15",
    category: "Family Games",
    difficulty: "Easy",
    ageRange: "8+",
    readTime: "8 min read",
    description: "A list of fun, safe, and challenging games that are perfect for young teens and kids.",
    image: "/images/family-games.svg",
    sections: [
       {
           heading: "Minecraft",
           body: "The ultimate creative game. Great for all ages."
       }
    ],
    tips: [
      "Try puzzle games.",
      "Play co-op with family."
    ],
    safetyNote: "Always check age ratings before buying a game."
  },
  {
    id: "gaming-breaks",
    slug: "how-to-take-gaming-breaks",
    type: "guide",
    title: "How to Take Gaming Breaks",
    category: "Mindset",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "3 min read",
    description: "Why you need breaks and how to remember to take them.",
    image: "/images/controller-badge.svg",
    sections: [
       {
           heading: "The 20-20-20 Rule",
           body: "Every 20 minutes, look at something 20 feet away for 20 seconds."
       }
    ],
    tips: [
      "Set an alarm.",
      "Stretch your legs.",
      "Get a snack."
    ],
    safetyNote: "Your eyes need rest to stay healthy."
  },
  {
    id: "balance-gaming",
    slug: "how-to-balance-gaming-and-study",
    type: "guide",
    title: "How to Balance Gaming and Study",
    category: "Mindset",
    difficulty: "Medium",
    ageRange: "10+",
    readTime: "6 min read",
    description: "How to make sure you get good grades and still have time to game.",
    image: "/images/trophy-tips.svg",
    sections: [
       {
           heading: "Homework First",
           body: "Always finish homework before turning on the console. It makes gaming feel like a reward."
       }
    ],
    tips: [
      "Make a schedule.",
      "Use gaming as a reward.",
      "Don't game late at night."
    ],
    safetyNote: "Sleep is more important than gaming!"
  }
];
