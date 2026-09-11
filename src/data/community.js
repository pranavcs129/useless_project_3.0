// ============================================
// BUGLEARN — Community (BugBoard) Data
// ============================================

export const COMMUNITY_POSTS = [
  {
    id: 1,
    author: 'Ant #3124',
    species: 'Ant',
    emoji: '🐜',
    category: 'Celebration',
    title: 'Finally passed Antivirus! 🎉',
    body: 'After weeks of studying, I finally completed all 6 modules. The final practical was intense — performing a full antivirus threat scan of the colony from scratch. Prof. Antonia gave me an A-! The subterranean network is secure.',
    likes: 47,
    comments: [
      { author: 'Ant #8821', emoji: '🐜', body: 'Congratulations! The quarantine chamber module is tough.', likes: 12 },
      { author: 'Queen Buzz', emoji: '🐝', body: 'Well done! Hard work pays off. Or is it fluid mechanics? 🐝', likes: 8 },
    ],
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    author: 'WebMaster88',
    species: 'Spider',
    emoji: '🕷️',
    category: 'Question',
    title: 'Does anyone understand Module 3 — Web Design?',
    body: 'I keep failing the radial tension analysis. My physical webs look beautiful but Prof. Webster says they lack "architectural rigour." How do I improve tension distribution without losing the aesthetic?',
    likes: 23,
    comments: [
      { author: 'SilkArchitect', emoji: '🕷️', body: 'Try double-strand anchors on your radial threads. Changed everything for me.', likes: 15 },
      { author: 'Prof. Webster', emoji: '🕷️', body: 'Beauty without structure is decoration. Structure without beauty is scaffolding. You need both.', likes: 34 },
    ],
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    author: 'RoachRuler',
    species: 'Cockroach',
    emoji: '🪳',
    category: 'Study Tips',
    title: 'Tips for the Chemical Engineering final exam',
    body: 'Survived it on my first try. Key advice: the hazardous kitchen simulation has a safe chemical shadow behind the toaster where spray never settles. Also, DO NOT enter the bleach puddle near the dishwasher. Trust me.',
    likes: 89,
    comments: [
      { author: 'KitchenNinja', emoji: '🪳', body: 'The chemical shadow tip saved my life. Literally.', likes: 21 },
    ],
    timestamp: '1 day ago',
  },
  {
    id: 4,
    author: 'FlutterQueen',
    species: 'Butterfly',
    emoji: '🦋',
    category: 'General',
    title: 'The Software Development course changed my perspective on life',
    body: 'Dr. Chrysalis said something in Module 2 that I cannot stop thinking about: "The caterpillar is not deprecated code. The caterpillar is a legacy monolith that gets refactored into a cloud-native butterfly." I cried. With my proboscis.',
    likes: 156,
    comments: [
      { author: 'Dr. Chrysalis', emoji: '🦋', body: 'Your metamorphic sprint is ongoing. Never stop refactoring.', likes: 67 },
      { author: 'PetalDancer', emoji: '🦋', body: 'This course is genuinely life-changing.', likes: 23 },
    ],
    timestamp: '2 days ago',
  },
  {
    id: 5,
    author: 'NightHunter',
    species: 'Mosquito',
    emoji: '🦟',
    category: 'Question',
    title: 'Is the Cybersecurity intrusion testing actually that hard?',
    body: 'I am thinking about enrolling but Agent Mozzi has a reputation for being intense. Is the "Acoustic Doppler Silencing" module as difficult as everyone says? Pen-testing the bedroom firewall sounds terrifying.',
    likes: 12,
    comments: [
      { author: 'ShadowMozzi', emoji: '🦟', body: 'Yes. But worth it. You will never buzz the same way again.', likes: 8 },
      { author: 'Agent Mozzi', emoji: '🦟', body: 'If you are asking whether it is hard, you are already thinking too loudly.', likes: 45 },
    ],
    timestamp: '3 days ago',
  },
  {
    id: 6,
    author: 'LuckyNumber7',
    species: 'Ladybug',
    emoji: '🐞',
    category: 'Celebration',
    title: 'I got an A in Luck Engineering!',
    body: 'Was it skill? Was it luck? Dr. Lucky says we may never know. I choose to believe it was both.',
    likes: 34,
    comments: [
      { author: 'Dr. Lucky', emoji: '🐞', body: 'Your success is statistically significant but philosophically ambiguous. Congratulations.', likes: 28 },
    ],
    timestamp: '4 days ago',
  },
  {
    id: 7,
    author: 'ChefGourmet',
    species: 'Fly',
    emoji: '🪰',
    category: 'Study Tips',
    title: 'Aeronautical Engineering: The kitchen navigation section is brilliant',
    body: 'I thought Aeronautical Engineering would be overwhelming but the ceiling touchdown kinematics module is genuinely fascinating. Capt. Fly describes 90-degree vector snaps and inverted landings with the passion of a test pilot. 10/10.',
    likes: 19,
    comments: [
      { author: 'Capt. Fly', emoji: '🪰', body: 'Remember: pitch up, extend forelegs, invert 180 degrees, touch down. Airspace belongs to us.', likes: 22 },
    ],
    timestamp: '5 days ago',
  },
];

/**
 * Get posts filtered by category.
 * @param {string} category - 'all' or specific category
 * @returns {Array}
 */
export function getFilteredPosts(category = 'all') {
  if (category === 'all') return COMMUNITY_POSTS;
  return COMMUNITY_POSTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}
