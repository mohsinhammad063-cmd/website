export interface ArticleSection {
  heading: string;
  body: string;
}

export interface Article {
  id: string;
  slug: string;
  type: 'tip' | 'guide';
  title: string;
  category: string;
  game?: string;
  difficulty: 'Beginner' | 'Easy' | 'Medium' | 'Hard';
  ageRange: string;
  readTime: string;
  description: string;
  heroText?: string;
  sections: ArticleSection[];
  tips: string[];
  safetyNote?: string;
  relatedArticles?: string[];
}

export const articles: Article[] = [
  // Tips
  {
    id: "minecraft-beginners",
    slug: "top-10-minecraft-tips-for-beginners",
    type: "tip",
    title: "Top 10 Minecraft Tips for Beginners",
    category: "Minecraft",
    game: "Minecraft",
    difficulty: "Beginner",
    ageRange: "8–15",
    readTime: "5 min read",
    description: "Learn how to survive your first night, find food, and build a safe shelter in Minecraft.",
    sections: [
      {
        heading: "Start with a small safe house",
        body: "Before exploring too far, build a small house with a door, torches, and a bed. This helps you stay safe at night."
      },
      {
         heading: "Don't dig straight down",
         body: "Digging straight down is the number one way to fall into lava or a deep cave. Always dig in a staircase pattern."
      }
    ],
    tips: [
      "Collect wood first.",
      "Build a small shelter.",
      "Make basic tools.",
      "Use torches to stop dark areas.",
      "Keep food ready.",
      "Do not dig straight down.",
      "Learn crafting recipes.",
      "Use creative mode for practice.",
      "Keep important items safe.",
      "Take breaks."
    ],
    safetyNote: "Always take breaks and ask a parent before joining online servers."
  },
  {
    id: "roblox-obby",
    slug: "how-to-get-better-at-roblox-obby-games",
    type: "tip",
    title: "How to Get Better at Roblox Obby Games",
    category: "Roblox",
    game: "Roblox",
    difficulty: "Medium",
    ageRange: "8–15",
    readTime: "4 min read",
    description: "Master jumps, avoid common traps, and complete difficult obstacle courses with these simple tricks.",
    sections: [
       {
           heading: "Practice your jumps",
           body: "Jumping is the most important skill. Practice timing your jumps and landing exactly where you want to."
       },
       {
           heading: "Use camera angles",
           body: "Move your camera around to see better. Sometimes an impossible jump is easy if you look at it from above."
       }
    ],
    tips: [
      "Start with easy obbies.",
      "Practice jumping.",
      "Watch platform timing.",
      "Do not rush.",
      "Use camera angles.",
      "Stay calm after falling.",
      "Avoid fake reward scams.",
      "Ask parents before buying Robux."
    ],
    safetyNote: "Never share your password or trust free Robux scams."
  },
  {
    id: "best-settings",
    slug: "best-settings-for-smooth-gameplay",
    type: "tip",
    title: "Best Settings for Smooth Gameplay",
    category: "General",
    difficulty: "Easy",
    ageRange: "8+",
    readTime: "3 min read",
    description: "Adjust your graphics, sensitivity, and audio settings to make your games run perfectly and feel better.",
    sections: [
       {
           heading: "Lower Graphics for Speed",
           body: "If your game is lagging, the easiest fix is to lower your graphics settings. Turn off shadows and lower the resolution."
       }
    ],
    tips: [
      "Lower graphics if game lags.",
      "Close extra apps.",
      "Use stable internet.",
      "Adjust sensitivity.",
      "Keep device charged.",
      "Ask parents before installing boosters or tools."
    ],
    safetyNote: "Only download games and tools from official app stores."
  },
  {
    id: "practice-mindset",
    slug: "how-to-practice-without-getting-frustrated",
    type: "tip",
    title: "How to Practice Without Getting Frustrated",
    category: "Mindset",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "6 min read",
    description: "Learning new skills takes time. Discover ways to stay calm, have fun, and improve steadily.",
    sections: [
        {
            heading: "Take frequent breaks",
            body: "If you feel yourself getting angry, stop playing. A 5-minute break can completely reset your mood."
        }
    ],
    tips: [
      "Practice 10 minutes at a time.",
      "Try easier levels first.",
      "Learn from mistakes.",
      "Take breaks.",
      "Do not compare with pro players.",
      "Keep gaming fun."
    ],
    safetyNote: "Remember that games are supposed to be fun. If you aren't having fun, it's time to stop."
  },
  {
    id: "racing-tips",
    slug: "simple-tips-to-win-more-racing-games",
    type: "tip",
    title: "Simple Tips to Win More Racing Games",
    category: "Racing Games",
    difficulty: "Medium",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Discover the best ways to corner, when to use boosts, and how to choose the right car for the track.",
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
    id: "build-better-minecraft",
    slug: "how-to-build-better-in-minecraft",
    type: "tip",
    title: "How to Build Better in Minecraft",
    category: "Minecraft",
    game: "Minecraft",
    difficulty: "Medium",
    ageRange: "8+",
    readTime: "7 min read",
    description: "Make your houses look amazing with these simple design tricks, using depth, texture, and good lighting.",
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
    id: "online-safety",
    slug: "how-to-stay-safe-while-playing-online-games",
    type: "tip",
    title: "How to Stay Safe While Playing Online Games",
    category: "Safety",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "5 min read",
    description: "Important rules for young gamers to stay safe, keep accounts secure, and avoid bad experiences online.",
    sections: [
       {
           heading: "Protect your personal info",
           body: "Never tell anyone your real name, where you live, or what school you go to."
       }
    ],
    tips: [
      "Never share personal info.",
      "Do not share passwords.",
      "Avoid private chats with strangers.",
      "Tell parents about bad messages.",
      "Ask before downloading.",
      "Use strong passwords.",
      "Take screen breaks."
    ],
    safetyNote: "Always talk to a parent if someone makes you feel uncomfortable online."
  },
  {
    id: "avoid-scams",
    slug: "how-to-avoid-scams-in-online-games",
    type: "tip",
    title: "How to Avoid Scams in Online Games",
    category: "Safety",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Learn how to spot fake offers, keep your items safe in trades, and protect your account from hackers.",
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
  // Guides
  {
    id: "hidden-secrets",
    slug: "how-to-find-hidden-game-secrets",
    type: "guide",
    title: "How to Find Hidden Game Secrets",
    category: "Exploration",
    difficulty: "Medium",
    ageRange: "8+",
    readTime: "5 min read",
    description: "Look behind waterfalls, check suspicious walls, and explore every corner of the map. Developers love hiding special items!",
    sections: [
       {
           heading: "Check the edges",
           body: "Game developers often hide things on the very edge of the map, or just out of normal sight."
       },
       {
           heading: "Listen for audio cues",
           body: "Sometimes a hidden item will make a quiet humming or sparkling sound. Turn up your volume!"
       }
    ],
    tips: [
      "Check behind waterfalls.",
      "Look for odd textures on walls.",
      "Listen for strange sounds.",
      "Explore off the main path.",
      "Read in-game notes for clues."
    ],
    safetyNote: "Remember to take breaks while exploring."
  },
  {
    id: "improve-aim",
    slug: "how-to-improve-your-aim",
    type: "guide",
    title: "How to Improve Your Aim",
    category: "Skills",
    difficulty: "Medium",
    ageRange: "10+",
    readTime: "6 min read",
    description: "Lower your sensitivity slightly. It might feel slow at first, but it makes tracking moving targets much easier and more consistent.",
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
    id: "save-coins",
    slug: "how-to-save-coins-and-rewards",
    type: "guide",
    title: "How to Save Coins and Rewards",
    category: "Management",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Don't spend in-game money on the first item you see. Save up for items that give you permanent upgrades or special abilities.",
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
    id: "difficult-levels",
    slug: "how-to-complete-difficult-levels",
    type: "guide",
    title: "How to Complete Difficult Levels",
    category: "Skills",
    difficulty: "Hard",
    ageRange: "8+",
    readTime: "5 min read",
    description: "If you're stuck, take a 5-minute break. Sometimes your brain just needs a rest to see the solution clearly when you return.",
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
    id: "choose-character",
    slug: "how-to-choose-the-right-character",
    type: "guide",
    title: "How to Choose the Right Character",
    category: "Strategy",
    difficulty: "Beginner",
    ageRange: "8+",
    readTime: "4 min read",
    description: "Pick characters that match your playstyle. If you like to rush in, choose high-health characters. If you prefer to stay back, choose ranged characters.",
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
  }
];
