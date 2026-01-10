export const itineraryData = [
  {
    id: 1,
    destination: "Fiji",
    location: "Nadi, Fiji",
    coordinates: [-17.7765, 177.4356],
    dates: "Mar 3-6",
    nights: 3,
    phase: "stopover",
    travellingWith: "Friends",
    highlights: [
      "Stopover destination before Japan",
      "Reliable internet in Nadi and resort areas (10-20 Mbps)",
      "MyDesk Fiji & Workplace Fiji coworking options",
      "Denarau Island resorts with business centers"
    ],
    activities: [
      { day: "Wed Mar 4", activity: "Morning work block (8am-12pm), afternoon explore" },
      { day: "Thu Mar 5", activity: "Morning work block (8am-12pm), afternoon/evening free" },
      { day: "Fri Mar 6", activity: "Free day, late night flight (11:55pm)" }
    ],
    workSpaces: [
      { name: "MyDesk Fiji", details: "Coworking space with meeting rooms" },
      { name: "Workplace Fiji", details: "Modern coworking with high-speed internet" }
    ],
    color: "#00bcd4",
    icon: "palm"
  },
  {
    id: 2,
    destination: "Tokyo",
    location: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    dates: "Mar 7-11",
    nights: 4,
    phase: "friends",
    travellingWith: "Friends",
    highlights: [
      "Arrive 6:55am on Sat Mar 7",
      "Disneyland day (March is busier due to spring break)",
      "Guy's Day - Akihabara, Robot Restaurant, Golden Gai",
      "Multiple coworking options available"
    ],
    activities: [
      { day: "Sat Mar 7", activity: "Arrive 6:55am - Rest, explore local area, recover" },
      { day: "Sun Mar 8", activity: "Full exploration - Shibuya, Harajuku, Shinjuku" },
      { day: "Mon Mar 9", activity: "DISNEYLAND (arrive 1-2 hours before opening)" },
      { day: "Tue Mar 10", activity: "Morning work (Basis Point), afternoon Guy's Day" },
      { day: "Wed Mar 11", activity: "Light work AM, travel to Kyoto (Shinkansen ~2h15m)" }
    ],
    workSpaces: [
      { name: "Basis Point", details: "¥600/hour, ¥2,400/day - Multiple locations" },
      { name: "Share Lounge Shibuya", details: "¥1,650/hour - Views over Shibuya Crossing" },
      { name: "Cafe Salvador", details: "¥600/hour, ¥1,800/day - 100+ seats" },
      { name: "Blink Smart Workspace", details: "¥1,200/half-day - English-friendly, 24/7" }
    ],
    color: "#e91e63",
    icon: "tower"
  },
  {
    id: 3,
    destination: "Kyoto",
    location: "Kyoto, Japan",
    coordinates: [35.0116, 135.7681],
    dates: "Mar 11-15",
    nights: 4,
    phase: "friends",
    travellingWith: "Friends",
    highlights: [
      "Osaka day trip included",
      "Fushimi Inari Shrine (less crowded late PM)",
      "Arashiyama Bamboo Grove",
      "Kinkaku-ji (Golden Pavilion)"
    ],
    activities: [
      { day: "Wed Mar 11", activity: "Arrive from Tokyo, settle in, evening stroll in Gion" },
      { day: "Thu Mar 12", activity: "OSAKA DAY TRIP - Work 6am-9am, then Dotonbori, Osaka Castle" },
      { day: "Fri Mar 13", activity: "Work day (GROVING BASE), afternoon Fushimi Inari" },
      { day: "Sat Mar 14", activity: "Full day - Arashiyama Bamboo Grove, Kinkaku-ji" },
      { day: "Sun Mar 15", activity: "Morning Kiyomizu-dera, then travel to Hakone" }
    ],
    workSpaces: [
      { name: "Co-nnect Kyoto", details: "¥1,000/day - Great value, library-like atmosphere" },
      { name: "Space Kante", details: "24/7 access, cafe vibe" },
      { name: "GROVING BASE", details: "Near Kyoto Station, phone booths for calls" }
    ],
    color: "#9c27b0",
    icon: "temple"
  },
  {
    id: 4,
    destination: "Hakone",
    location: "Hakone, Japan",
    coordinates: [35.2326, 139.1069],
    dates: "Mar 15-18",
    nights: 3,
    phase: "family",
    travellingWith: "Family (3yo + 19mo)",
    highlights: [
      "FAMILY JOINS HERE!",
      "Limited coworking - work from ryokan",
      "Hakone Ropeway over volcanic valley",
      "Lake Ashi pirate ship cruise",
      "Private onsen rooms available"
    ],
    activities: [
      { day: "Activities", activity: "Hakone Ropeway - Kids love the cable cars" },
      { day: "Activities", activity: "Lake Ashi pirate ship cruise - Mt Fuji views" },
      { day: "Activities", activity: "Hakone Open Air Museum - Outdoor sculptures" },
      { day: "Activities", activity: "Private onsen rooms - Family-friendly bathing" }
    ],
    workSpaces: [
      { name: "Hakone Honbako", details: "Book hotel - quiet, comfortable" },
      { name: "Timuny Cafe", details: "River views, limited power outlets" },
      { name: "Ryokan WiFi", details: "Work early morning before family activities" }
    ],
    color: "#ff5722",
    icon: "hotspring"
  },
  {
    id: 5,
    destination: "Mt. Fuji Glamping",
    location: "Lake Kawaguchiko, Japan",
    coordinates: [35.5036, 138.7656],
    dates: "Mar 18-22",
    nights: 4,
    phase: "family",
    travellingWith: "Family (3yo + 19mo)",
    highlights: [
      "Glamping with Mt Fuji views",
      "Chureito Pagoda (395 steps - carrier recommended)",
      "Fuji-Q Highland with Thomas Land",
      "Traditional village Oshino Hakkai"
    ],
    activities: [
      { day: "Activities", activity: "Chureito Pagoda - Iconic Mt Fuji viewpoint" },
      { day: "Activities", activity: "Lake Kawaguchiko - Paddle boats, cycling" },
      { day: "Activities", activity: "Fuji-Q Highland - Thomas Land for toddlers!" },
      { day: "Activities", activity: "Oshino Hakkai - Crystal clear ponds village" }
    ],
    workSpaces: [
      { name: "FUJISAN VALLEY", details: "Open 5am-midnight, drop-in available" },
      { name: ".work Plus", details: "Connected to Mt Fuji Station" },
      { name: "NAKAMURA House", details: "150-year-old house with Mt Fuji views!" }
    ],
    color: "#2196f3",
    icon: "mountain"
  },
  {
    id: 6,
    destination: "Matsumoto",
    location: "Matsumoto, Japan",
    coordinates: [36.2381, 137.9720],
    dates: "Mar 22-26",
    nights: 4,
    phase: "family",
    travellingWith: "Family (3yo + 19mo)",
    highlights: [
      "Japanese Alps region",
      "Historic Matsumoto Castle",
      "Nakamachi Street exploration",
      "Daio Wasabi Farm (kids love the water wheels)"
    ],
    activities: [
      { day: "Sun Mar 22", activity: "Arrive, settle in, explore Nakamachi Street" },
      { day: "Mon Mar 23", activity: "WORK DAY - Morning at KNOWERS, afternoon Castle" },
      { day: "Tue Mar 24", activity: "WORK DAY - Morning work, afternoon Wasabi Farm" },
      { day: "Wed Mar 25", activity: "WORK DAY - Morning work, afternoon family time" },
      { day: "Thu Mar 26", activity: "Light work, travel to Gero Onsen" }
    ],
    workSpaces: [
      { name: "KNOWERS MATSUMOTO", details: "First coworking in Matsumoto, great for networking" },
      { name: "SWEET WORK", details: "Historical bakery setting, unique atmosphere" }
    ],
    color: "#4caf50",
    icon: "castle"
  },
  {
    id: 7,
    destination: "Gero Onsen",
    location: "Gero, Japan",
    coordinates: [35.8028, 137.2443],
    dates: "Mar 26-27",
    nights: 1,
    phase: "family",
    travellingWith: "Family (3yo + 19mo)",
    highlights: [
      "One of Japan's top 3 hot spring resorts",
      "Silky smooth water - excellent for skin",
      "NO coworking - relaxation stop!",
      "Private family baths available"
    ],
    activities: [
      { day: "Activities", activity: "Public foot baths throughout town (free, toddler-friendly)" },
      { day: "Activities", activity: "Gassho-zukuri folk village - Traditional houses" },
      { day: "Activities", activity: "Private family ryokan baths" }
    ],
    workSpaces: [
      { name: "Ryokan WiFi only", details: "Plan minimal work - this is a relaxation stop!" }
    ],
    color: "#795548",
    icon: "hotspring"
  },
  {
    id: 8,
    destination: "Nagoya & F1",
    location: "Nagoya, Japan",
    coordinates: [35.1815, 136.9066],
    dates: "Mar 27-30",
    nights: 3,
    phase: "family",
    travellingWith: "Family (3yo + 19mo)",
    highlights: [
      "F1 Japanese Grand Prix at Suzuka!",
      "LEGOLAND Japan - Perfect for 3yo",
      "Nagoya Port Aquarium",
      "Suzuka Circuit ~1hr from Nagoya"
    ],
    activities: [
      { day: "Fri Mar 27", activity: "Arrive from Gero, light work if needed" },
      { day: "Sat Mar 28", activity: "F1 QUALIFYING DAY - Suzuka Circuit" },
      { day: "Sun Mar 29", activity: "F1 RACE DAY!" },
      { day: "Mon Mar 30", activity: "Morning in Nagoya, afternoon train to Tokyo" }
    ],
    workSpaces: [
      { name: "WeWork JR Central Towers", details: "Direct station access, day pass available" },
      { name: "Spaces JP-Tower Nagoya", details: "Designer workspace, networking events" },
      { name: "Regus Sakae", details: "City views, reliable chain" }
    ],
    color: "#f44336",
    icon: "racing"
  },
  {
    id: 9,
    destination: "Tokyo (Return)",
    location: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    dates: "Mar 30 - Apr 1",
    nights: 1,
    phase: "departure",
    travellingWith: "Family",
    highlights: [
      "Final night before departure",
      "Last-minute shopping",
      "Departure preparation",
      "Light work if needed"
    ],
    activities: [
      { day: "Mon Mar 30", activity: "Arrive from Nagoya" },
      { day: "Tue Mar 31", activity: "Last-minute shopping, pack up" },
      { day: "Wed Apr 1", activity: "Departure to NZ" }
    ],
    workSpaces: [],
    color: "#607d8b",
    icon: "plane"
  }
];

export const tripInfo = {
  title: "Fiji + Japan Adventure",
  dates: "March 3 - April 1, 2026",
  totalDays: 30,
  destinations: 9,
  summary: "Remote Work Itinerary",
  phases: {
    stopover: { label: "Fiji Stopover", color: "#00bcd4" },
    friends: { label: "With Friends", color: "#9c27b0" },
    family: { label: "Family Time", color: "#ff5722" },
    departure: { label: "Departure", color: "#607d8b" }
  },
  travelNotes: [
    "Japan is 4 hours behind NZ (during daylight saving)",
    "Fiji is same as NZ during daylight saving",
    "Best work hours for NZ clients: 6am-10am Japan time",
    "Shinkansen trains have WiFi and fold-out tables"
  ],
  workSummary: {
    totalWorkDays: 14,
    lightWorkDays: 6,
    fullDaysOff: 10
  }
};

export const routeConnections = [
  { from: 1, to: 2, transport: "Flight", duration: "~9 hours" },
  { from: 2, to: 3, transport: "Shinkansen", duration: "~2h 15m" },
  { from: 3, to: 4, transport: "Train", duration: "~3 hours" },
  { from: 4, to: 5, transport: "Bus/Train", duration: "~2 hours" },
  { from: 5, to: 6, transport: "Train", duration: "~3 hours" },
  { from: 6, to: 7, transport: "Train", duration: "~2 hours" },
  { from: 7, to: 8, transport: "Train", duration: "~2 hours" },
  { from: 8, to: 9, transport: "Shinkansen", duration: "~1h 40m" }
];
