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
    weather: { temp: "28°C", condition: "Sunny", icon: "sun", humidity: "75%" },
    timezone: { name: "FJT", offset: "+12", nzDiff: "Same as NZ" },
    photo: "https://images.unsplash.com/photo-1589179899295-f2a3c5e90f47?w=400&h=250&fit=crop",
    highlights: [
      "Same timezone as NZ - easy for calls",
      "Beach & pool relaxation with friends",
      "Pre-trip client calls stacked on Mar 5",
      "Late night flight to Tokyo (11:55pm Mar 6)"
    ],
    activities: [
      { day: "Tue Mar 3", activity: "FJ 410: AKL 3:00pm → NAN 5:00pm. Transfer to accommodation", type: "travel" },
      { day: "Wed Mar 4", activity: "Work 8am-12pm, afternoon beach & pool", type: "work" },
      { day: "Thu Mar 5", activity: "CALLS 9am-1pm - Stack all pre-trip client calls", type: "calls" },
      { day: "Fri Mar 6", activity: "Full day free, late checkout. FJ 351: NAN 11:55pm → Tokyo", type: "travel" }
    ],
    workSpaces: [
      { name: "Room / Accommodation", details: "Same timezone - work from room" }
    ],
    workSchedule: { type: "mixed", days: ["Work 8am-12pm", "Calls 9am-1pm", "Off"] },
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
    weather: { temp: "12°C", condition: "Partly Cloudy", icon: "cloud-sun", humidity: "55%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop",
    highlights: [
      "FJ 351 arrives 6:15am Sat - adjust to timezone",
      "Shibuya, Harajuku, Meiji Shrine exploration",
      "DISNEYLAND Mar 10 - Book Premier Access NOW!",
      "Guy's afternoon: Akihabara, Robot Restaurant"
    ],
    activities: [
      { day: "Sat Mar 7", activity: "FJ 351 arrives NRT 6:15am. Train to accommodation, explore", type: "off" },
      { day: "Sun Mar 8", activity: "Explore Shibuya, Harajuku, Shinjuku. Evening: Golden Gai", type: "off" },
      { day: "Mon Mar 9", activity: "DEEP WORK 6am-12pm. PM: Guy's afternoon - Akihabara, bars", type: "deep" },
      { day: "Tue Mar 10", activity: "DISNEYLAND! Arrive early, Fantasy Springs, stay for fireworks", type: "off" },
      { day: "Wed Mar 11", activity: "Shinkansen to Kyoto (~2.5hrs). Settle in, wander Gion", type: "travel" }
    ],
    workSpaces: [
      { name: "Room / Accommodation", details: "Work from room - anytime access" }
    ],
    workSchedule: { type: "deep", days: ["Off", "Off", "Deep 6am-12pm", "Off", "Travel"] },
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
    weather: { temp: "14°C", condition: "Clear", icon: "sun", humidity: "50%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=250&fit=crop",
    highlights: [
      "Space Kante - 24hr coworking (book ahead)",
      "Osaka day trip included",
      "Fushimi Inari early (7am to beat crowds)",
      "Arashiyama bamboo grove + Sagano scenic train"
    ],
    activities: [
      { day: "Wed Mar 11", activity: "Arrive from Tokyo, settle in, evening Gion stroll", type: "travel" },
      { day: "Thu Mar 12", activity: "Work 6-10am at Space Kante. PM: Day trip to Osaka", type: "work" },
      { day: "Fri Mar 13", activity: "CALLS 6-9am + 2-5pm (3pm Japan = 7pm NZ). Evening: Pontocho", type: "calls" },
      { day: "Sat Mar 14", activity: "Fushimi Inari (7am!), Arashiyama bamboo, Nishiki Market", type: "off" },
      { day: "Sun Mar 15", activity: "Morning temples, travel to Hakone. FAMILY JOINS! 👨‍👩‍👧‍👦", type: "travel" }
    ],
    workSpaces: [
      { name: "Space Kante", details: "24/7 coworking - book 1 week ahead" }
    ],
    workSchedule: { type: "mixed", days: ["Travel", "Work 6-10am", "Calls 6-9a+2-5p", "Off", "Travel"] },
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
    weather: { temp: "11°C", condition: "Misty", icon: "cloud", humidity: "70%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?w=400&h=250&fit=crop",
    highlights: [
      "FAMILY JOINS HERE! 👨‍👩‍👧‍👦",
      "Hakone Ropeway over Owakudani valley",
      "Lake Ashi pirate ship cruise (kids love it)",
      "Private family onsen at ryokan"
    ],
    activities: [
      { day: "Sun Mar 15", activity: "Family arrives! Settle into ryokan, first family onsen", type: "travel" },
      { day: "Mon Mar 16", activity: "Work 6-10am. Ropeway, pirate ship, Open Air Museum", type: "work" },
      { day: "Tue Mar 17", activity: "Light work 6-8am. More exploring, private onsen, nap time", type: "light" },
      { day: "Wed Mar 18", activity: "Travel to Mt Fuji glamping. Afternoon settle in, Mt Fuji views", type: "travel" }
    ],
    workSpaces: [
      { name: "Ryokan WiFi", details: "Work from ryokan before kids wake (6-10am)" }
    ],
    workSchedule: { type: "light", days: ["Travel", "Work 6-10am", "Light 6-8am", "Travel"] },
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
    weather: { temp: "8°C", condition: "Clear", icon: "sun", humidity: "45%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=250&fit=crop",
    highlights: [
      "FUJISAN VALLEY coworking opens 5am!",
      "Mt Fuji sunrise while working",
      "Thomas Land at Fuji-Q Highland (Mar 21)",
      "Chureito Pagoda - bring carrier for toddler"
    ],
    activities: [
      { day: "Wed Mar 18", activity: "Arrive from Hakone. Settle into glamping, Mt Fuji views", type: "travel" },
      { day: "Thu Mar 19", activity: "DEEP WORK 5-11am at FUJISAN VALLEY (sunrise!). PM: Chureito Pagoda", type: "deep" },
      { day: "Fri Mar 20", activity: "Work 6-10am. Oshino Hakkai village, lake paddle boats", type: "work" },
      { day: "Sat Mar 21", activity: "Thomas Land at Fuji-Q Highland - perfect for toddlers!", type: "off" },
      { day: "Sun Mar 22", activity: "Early Mt Fuji photos, travel to Matsumoto through Alps", type: "travel" }
    ],
    workSpaces: [
      { name: "FUJISAN VALLEY", details: "Opens 5am! Book slot 1 week ahead. Mt Fuji views" }
    ],
    workSchedule: { type: "deep", days: ["Travel", "Deep 5-11am", "Work 6-10am", "Off", "Travel"] },
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
    weather: { temp: "10°C", condition: "Partly Cloudy", icon: "cloud-sun", humidity: "55%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=400&h=250&fit=crop",
    highlights: [
      "Matsumoto Castle - one of Japan's originals",
      "KNOWERS coworking (opens 12pm only)",
      "Daio Wasabi Farm - kids love water wheels",
      "Nawate-dori frog street for kids"
    ],
    activities: [
      { day: "Sun Mar 22", activity: "Arrive through Japanese Alps, explore castle town", type: "travel" },
      { day: "Mon Mar 23", activity: "DEEP WORK 6-10am + 1-4pm (KNOWERS). Midday: Castle visit", type: "deep" },
      { day: "Tue Mar 24", activity: "Work 6-10am. PM: Daio Wasabi Farm or Ukiyo-e Museum", type: "work" },
      { day: "Wed Mar 25", activity: "Light work 6-8am. Family day - parks, Nawate-dori frog street", type: "light" },
      { day: "Thu Mar 26", activity: "Travel to Gero Onsen. PM: Ryokan, foot baths, family onsen", type: "travel" }
    ],
    workSpaces: [
      { name: "Room (AM)", details: "Work from room 6-10am" },
      { name: "KNOWERS", details: "Opens 12pm-7pm only. Book for PM sessions" }
    ],
    workSchedule: { type: "deep", days: ["Travel", "Deep 6-10+1-4", "Work 6-10am", "Light 6-8am", "Travel"] },
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
    weather: { temp: "13°C", condition: "Warm", icon: "sun", humidity: "60%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1553653924-39b70295f8da?w=400&h=250&fit=crop",
    highlights: [
      "One of Japan's top 3 hot spring resorts",
      "Public foot baths - free & toddler-friendly",
      "LAST CALL DAY - Mar 27 afternoon",
      "Travel to Nagoya for F1 weekend"
    ],
    activities: [
      { day: "Thu Mar 26", activity: "Arrive from Matsumoto. Ryokan, foot baths, family onsen", type: "travel" },
      { day: "Fri Mar 27", activity: "Work 6-8am. Morning onsen. Travel to Nagoya. CALLS 2-5pm at WeWork", type: "calls" }
    ],
    workSpaces: [
      { name: "Ryokan WiFi", details: "Morning work 6-8am only" },
      { name: "WeWork JR Central", details: "50th floor views! PM calls from Nagoya" }
    ],
    workSchedule: { type: "calls", days: ["Travel", "Calls 6-8a+2-5p"] },
    color: "#795548",
    icon: "hotspring"
  },
  {
    id: 8,
    destination: "Nagoya & F1",
    location: "Nagoya / Suzuka, Japan",
    coordinates: [35.1815, 136.9066],
    dates: "Mar 27-30",
    nights: 3,
    phase: "family",
    travellingWith: "Family (3yo + 19mo)",
    weather: { temp: "15°C", condition: "Clear", icon: "sun", humidity: "50%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=250&fit=crop",
    highlights: [
      "F1 Japanese GP at Suzuka! 🏎️🏁",
      "Qualifying Mar 28, Race Mar 29",
      "LEGOLAND Japan alternative for family",
      "Book F1 tickets NOW via official site"
    ],
    activities: [
      { day: "Fri Mar 27", activity: "Arrive from Gero. CALLS 2-5pm at WeWork JR Central", type: "calls" },
      { day: "Sat Mar 28", activity: "F1 QUALIFYING DAY - Suzuka Circuit (~1hr from Nagoya)", type: "off" },
      { day: "Sun Mar 29", activity: "F1 RACE DAY! 🏁 (Family: LEGOLAND or Nagoya Aquarium)", type: "off" },
      { day: "Mon Mar 30", activity: "Light work 9am-12pm. PM: Shinkansen to Tokyo, final night", type: "light" }
    ],
    workSpaces: [
      { name: "WeWork JR Central Towers", details: "50th floor, 8:30am-6pm. Day pass available" }
    ],
    workSchedule: { type: "light", days: ["Calls 2-5pm", "Off F1", "Off F1", "Light 9am-12pm"] },
    color: "#f44336",
    icon: "racing"
  },
  {
    id: 9,
    destination: "Tokyo (Return)",
    location: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    dates: "Mar 30 - Apr 2",
    nights: 2,
    phase: "departure",
    travellingWith: "Family",
    weather: { temp: "14°C", condition: "Mild", icon: "cloud-sun", humidity: "55%" },
    timezone: { name: "JST", offset: "+9", nzDiff: "4hrs behind NZ" },
    photo: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&h=250&fit=crop",
    highlights: [
      "Final night - favourite dinner spot",
      "Last-minute shopping",
      "Ueno Park if weather's good",
      "Apr 1: FJ 350 NRT 4:30pm → Fiji, then FJ 411 → AKL"
    ],
    activities: [
      { day: "Mon Mar 30", activity: "Arrive from Nagoya. Final night, favourite spots revisit", type: "light" },
      { day: "Tue Mar 31", activity: "Work 6-10am. Day: Shopping, Ueno Park, family dinner", type: "work" },
      { day: "Wed Apr 1", activity: "FJ 350: NRT 4:30pm → NAN (arrives Thu 4:35am)", type: "travel" },
      { day: "Thu Apr 2", activity: "FJ 411: NAN 9:30am → AKL 1:40pm. Home! ✈️", type: "travel" }
    ],
    workSpaces: [
      { name: "Room / Accommodation", details: "Final work sessions from room" }
    ],
    workSchedule: { type: "light", days: ["Light 9am-12pm", "Work 6-10am", "Travel home"] },
    color: "#607d8b",
    icon: "plane"
  }
];

export const tripInfo = {
  title: "Fiji + Japan 2026",
  dates: "March 3 - April 2, 2026",
  totalDays: 31,
  destinations: 9,
  summary: "Remote Work Adventure",
  phases: {
    stopover: { label: "Fiji Stopover", color: "#00bcd4" },
    friends: { label: "With Friends", color: "#9c27b0" },
    family: { label: "Family Time", color: "#ff5722" },
    departure: { label: "Departure", color: "#607d8b" }
  },
  travelNotes: [
    "Japan is 4hrs behind NZ (2hrs behind Sydney)",
    "Best work: 6-10am Japan = 10am-2pm NZ",
    "Calls: 3pm Japan = 7pm NZ",
    "Shinkansen WiFi patchy - plan ahead"
  ],
  workSummary: {
    callDays: 3,
    deepWorkDays: 3,
    standardWorkDays: 5,
    lightWorkDays: 4,
    daysOff: 8,
    travelDays: 7
  },
  bookNow: [
    { item: "Tokyo Disneyland tickets (Mar 10)", when: "NOW", notes: "Book Premier Access for Fantasy Springs" },
    { item: "F1 Japanese GP tickets (Mar 28-29)", when: "NOW", notes: "Suzuka Circuit - check official F1 site" },
    { item: "JR Pass (14 or 21 day)", when: "NOW", notes: "Must buy before arriving in Japan" },
    { item: "Shinkansen seats (Mar 11, 28-30)", when: "2 weeks", notes: "Reserve specific trains, esp F1 weekend" },
    { item: "Pocket WiFi / eSIM", when: "2 weeks", notes: "Japan Wireless, Sakura Mobile, or Ubigi" },
    { item: "Space Kante Kyoto (Mar 12-13)", when: "1 week", notes: "24hr coworking - book online" },
    { item: "FUJISAN VALLEY (Mar 19)", when: "1 week", notes: "Opens 5am - reserve slot" }
  ],
  timeZones: [
    { japan: "6am", nz: "10am", sydney: "8am", best: "Async, Slack" },
    { japan: "9am", nz: "1pm", sydney: "11am", best: "Late AM calls" },
    { japan: "2pm", nz: "6pm", sydney: "4pm", best: "Flexible calls" },
    { japan: "3pm", nz: "7pm", sydney: "5pm", best: "Evening NZ" }
  ]
};

export const routeConnections = [
  { from: 1, to: 2, transport: "FJ 351", duration: "~9 hours", icon: "plane", notes: "NAN 11:55pm → NRT 6:15am" },
  { from: 2, to: 3, transport: "Shinkansen", duration: "~2.5 hours", icon: "train-bullet", notes: "Tokyo → Kyoto" },
  { from: 3, to: 4, transport: "Train", duration: "~3 hours", icon: "train", notes: "Kyoto → Hakone" },
  { from: 4, to: 5, transport: "Bus/Train", duration: "~2 hours", icon: "bus", notes: "Hakone → Kawaguchiko" },
  { from: 5, to: 6, transport: "Train", duration: "~3 hours", icon: "train", notes: "Scenic route through Alps" },
  { from: 6, to: 7, transport: "Train", duration: "~2 hours", icon: "train", notes: "Matsumoto → Gero" },
  { from: 7, to: 8, transport: "Train", duration: "~2 hours", icon: "train", notes: "Gero → Nagoya" },
  { from: 8, to: 9, transport: "Shinkansen", duration: "~1h 40m", icon: "train-bullet", notes: "Nagoya → Tokyo" }
];

export const workTypes = {
  calls: { label: "Call Days", color: "#f44336", icon: "📞" },
  deep: { label: "Deep Work", color: "#9c27b0", icon: "🎯" },
  work: { label: "Standard Work", color: "#2196f3", icon: "💻" },
  light: { label: "Light Work", color: "#4caf50", icon: "📝" },
  off: { label: "Day Off", color: "#ff9800", icon: "🌴" },
  travel: { label: "Travel Day", color: "#607d8b", icon: "🚄" }
};
