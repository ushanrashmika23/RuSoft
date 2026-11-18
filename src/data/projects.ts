export interface ProjectItem {
  id: string;
  slug: string;
  num: string;
  label: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  year: string;
  desc: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  technologies: string[];
  img: string;
  gallery: string[];
  demoUrl?: string;
  githubUrl?: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj_1792517881886",
    slug: "master-ink-tattoo",
    num: "01",
    label: "Studio Showcase & CMS",
    title: "Master Ink Tattoo Portfolio",
    client: "Master Ink Tattoo Studio",
    industry: "Creative & Lifestyle",
    category: "Web & Mobile Applications",
    year: "2024",
    desc: "A modern, responsive website and custom administrative panel engineered for Master Ink Tattoo Studio to showcase artistry and streamline studio operations.",
    overview:
      "Designed and developed a modern, responsive website for Master Ink Tattoo Studio, showcasing tattoo artistry, studio services, and creative work through a visually engaging interface. Built an admin panel to manage website content and streamline studio operations, providing a centralized platform for maintaining the studio's online presence. The project combines creative design with practical functionality to deliver a professional digital experience for both customers and studio administrators.",
    challenge:
      "Master Ink Tattoo Studio needed an elevated digital presence that matched their bespoke artistic caliber. They required an image-first visual experience that loads instantaneously, alongside an intuitive content management interface so studio artists could independently curate portfolio pieces and update service catalogs without technical friction.",
    approach:
      "We engineered a lightweight, edge-first architecture utilizing Next.js and Cloudflare's serverless ecosystem. By pairing Cloudflare D1 with R2 object storage, we ensured ultra-low latency media delivery and instantaneous gallery transitions worldwide.",
    solution:
      "A bespoke full-stack web application built with Next.js and Tailwind CSS. The customer-facing application features high-definition gallery interactions and appointment routing. The integrated admin suite allows studio managers to upload high-resolution flash and custom tattoos directly to Cloudflare storage with automatic image optimization.",
    results: [
      "Sub-second global load times via edge caching and Cloudflare infrastructure",
      "100% independent content management through custom administrative dashboard",
      "Seamless responsive experience across all mobile, tablet, and desktop viewports",
      "Zero server maintenance overhead with serverless edge architecture",
      "Significant increase in direct booking inquiries within initial month of launch",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Cloudflare D1", "Cloudflare R2", "TypeScript", "Vercel"],
    img: "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1792518311492_RuSoft_Project_Showcase_Template.png",
    gallery: [
      "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1792518311492_RuSoft_Project_Showcase_Template.png",
    ],
    demoUrl: "https://master-ink-tau.vercel.app",
    githubUrl: "",
    testimonial: {
      quote:
        "The website captures our studio's artistic identity perfectly. The custom admin panel gives us complete freedom to update our portfolio without any technical hassle.",
      name: "Lead Artist & Studio Director",
      role: "Studio Director",
      company: "Master Ink Studio",
    },
    featured: true,
  },
  {
    id: "proj_1792857943806",
    slug: "leafy-iot",
    num: "02",
    label: "IoT & Smart Agriculture",
    title: "Leafy IoT: AI Agriculture Monitoring",
    client: "Leafy Agritech",
    industry: "AgriTech & IoT",
    category: "Product Engineering",
    year: "2024",
    desc: "A smart agriculture telemetry system collecting soil moisture, temperature, humidity, and light data through ESP32 sensors and a React Native mobile app.",
    overview:
      "Leafy IoT is a smart agriculture system designed to help farmers monitor critical environmental conditions using IoT technology. The system collects temperature, humidity, soil moisture, and light intensity data through sensors connected to an ESP32 microcontroller, helping farmers understand field conditions and make more informed decisions about crop care. By making sensor readings accessible through a mobile interface, Leafy IoT helps farmers monitor crops conveniently and make data-informed farm management decisions.",
    challenge:
      "Traditional farming relies heavily on manual, time-consuming soil testing and environmental observation. Farmers lacked accessible, real-time insights into localized micro-climates and soil moisture variance, leading to either over-irrigation or crop stress.",
    approach:
      "We engineered an end-to-end multi-layer architecture: embedded microcontrollers for field sensing, an asynchronous cloud ingestion engine with MongoDB, and an intuitive cross-platform mobile client built with React Native and Expo.",
    solution:
      "The ESP32 microcontroller gathers data from DHT11, soil moisture, and photoresistor sensors, transmitting structured telemetry over Wi-Fi via JSON REST requests. A Node.js & Express API processes and stores telemetry on AWS EC2 with MongoDB Mongoose. The React Native mobile app delivers live telemetry dashboards, threshold alerts, and crop health metrics directly to the farmer.",
    results: [
      "Continuous 24/7 environmental telemetry logging across temperature, humidity, light, and soil moisture",
      "Significant reduction in manual field inspection labor hours",
      "Real-time mobile alerting preventing soil over-saturation and moisture deficits",
      "Robust multi-tier architecture spanning ESP32, Node.js REST API, and React Native",
      "Full open-source codebase for device firmware, backend API, and mobile applications",
    ],
    technologies: [
      "ESP32",
      "Arduino C++",
      "DHT11",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "AWS EC2",
      "MongoDB",
      "REST API",
    ],
    img: "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1792858628224_cov001withd.png",
    gallery: [
      "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1792858628224_cov001withd.png",
      "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1792858631586_cov001.png",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/ushanrashmika23/Leafy-Farm-Monitoring-App",
    testimonial: {
      quote:
        "Leafy IoT bridges the gap between field hardware and farmer insight. Having live telemetry on our phones fundamentally transformed how we manage daily irrigation.",
      name: "Ushan Rashmika",
      role: "Lead Systems Engineer",
      company: "Leafy IoT Project",
    },
    featured: true,
  },
  {
    id: "proj_1793210397097",
    slug: "kiri-kopi-cafe",
    num: "05",
    label: "Digital Menu & Showcase",
    title: "Kiri Kopi Caffee",
    client: "Kiri Kopi Caffee",
    industry: "Hospitality & F&B",
    category: "Web & Mobile Applications",
    year: "2024",
    desc: "An interactive digital menu and café showcase empowering customers to explore artisan beverage offerings, food items, and live pricing seamlessly.",
    overview:
      "Developed a modern, responsive website for Kiri Kopi Caffee to showcase its menu, food and beverage offerings, and prices. Designed an attractive, user-friendly interface that allows customers to explore menu items and pricing easily. Optimized for desktop and mobile devices, the website provides a convenient digital menu experience while strengthening the café's online presence.",
    challenge:
      "Physical paper menus were expensive to update frequently as seasonal coffee blends and specials changed. Kiri Kopi needed an elegant digital menu accessible via QR codes in-house and web search, allowing patrons to explore dishes, tasting notes, and prices with zero friction.",
    approach:
      "We engineered an instantaneous mobile-first digital menu using Next.js and Firebase. We architected a clean menu classification system (coffees, teas, bakery, seasonal specials) with dynamic pricing synchronization and appetizing visual presentations.",
    solution:
      "A lightweight, ultra-responsive web application with Next.js, MySQL, and Firebase. Customers can browse categorized menus, search items, view dietary labels, and check current pricing directly from their mobile browsers with zero app installation required.",
    results: [
      "Instant QR-code accessible digital menu with zero download or installation requirements",
      "Real-time menu item and pricing updates with zero reprint costs",
      "High customer engagement on in-cafe mobile browsing",
      "Fast, smooth user experience optimized for cellular networks and mobile devices",
    ],
    technologies: ["Next.js", "React", "Node.js", "MySQL", "Firebase", "Tailwind CSS", "Vercel"],
    img: "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1793210495617_Portfolio_Imsg_Draft__3_.png",
    gallery: [
      "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1793210495617_Portfolio_Imsg_Draft__3_.png",
    ],
    demoUrl: "https://kiri-kopi-web.vercel.app",
    githubUrl: "",
    testimonial: {
      quote:
        "Updating our seasonal beverages and prices used to take days of reprinting. Now it's instantaneous, and our customers love browsing the digital menu on their phones.",
      name: "Kiri Kopi Management",
      role: "Founders",
      company: "Kiri Kopi Caffee",
    },
    featured: true,
  },
  // {
  //   id: "proj_1792859024518",
  //   slug: "btc-trend-prediction",
  //   num: "03",
  //   label: "Deep Learning & FinTech",
  //   title: "Bitcoin Trend Prediction",
  //   client: "Quantitative Research Lab",
  //   industry: "FinTech & AI",
  //   category: "AI & Automation",
  //   year: "2024",
  //   desc: "A research-oriented machine learning platform using Gated Recurrent Units (GRU) to forecast multi-horizon Bitcoin market movements from 15-minute OHLCV data.",
  //   overview:
  //     "A research-oriented machine learning project focused on predicting short-term Bitcoin market trends using historical cryptocurrency market data and technical indicators. The project explores the application of deep learning, particularly Gated Recurrent Units (GRU), to identify temporal patterns in 15-minute Bitcoin market data and predict potential market movements across multiple future time horizons.",
  //   challenge:
  //     "Cryptocurrency markets exhibit extreme non-linear volatility, noise, and non-stationary distributions. Traditional statistical forecasting models struggle to capture complex temporal dependencies across short 15-minute horizons without severe overfitting or gradient degradation.",
  //   approach:
  //     "We engineered an automated feature-enrichment pipeline incorporating 15-minute OHLCV data alongside technical indicators (EMA 20/50, RSI, MACD, MACD Signal, ATR). We then trained a sequential GRU-based recurrent neural network architecture designed for multi-horizon trend classification.",
  //   solution:
  //     "An end-to-end deep learning pipeline built with TensorFlow/Keras and Scikit-learn, coupled with a FastAPI backend and interactive React dashboard. The live dashboard visualizes 12-step forward trend classifications against actual market price dynamics, providing quantifiable probabilistic trend forecasting.",
  //   results: [
  //     "Multi-horizon trend forecasting across the next 12 consecutive 15-minute time steps",
  //     "Engineered rich multi-feature input space including EMA, RSI, MACD, and ATR volatility metrics",
  //     "GRU architecture achieving superior convergence stability compared to standard RNNs",
  //     "Interactive real-time visualization comparing model predictions with live market movements",
  //     "Modular FastAPI and React architecture for seamless inference delivery",
  //   ],
  //   technologies: [
  //     "Python",
  //     "TensorFlow/Keras",
  //     "FastAPI",
  //     "React",
  //     "Pandas",
  //     "NumPy",
  //     "Scikit-Learn",
  //     "GRU RNN",
  //     "Matplotlib",
  //   ],
  //   img: "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1793205927304_FireShot_Capture_012_-_BTCUSDT_15m___live_trend_dashboard_-__localhost_-simple_view.png",
  //   gallery: [
  //     "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1793205927304_FireShot_Capture_012_-_BTCUSDT_15m___live_trend_dashboard_-__localhost_-simple_view.png",
  //   ],
  //   demoUrl: "",
  //   githubUrl: "https://github.com/ushanrashmika23/btc-trend-prediction",
  //   testimonial: {
  //     quote:
  //       "Combining technical indicators with recurrent neural architectures provided remarkable clarity into short-term temporal dependencies in volatile crypto markets.",
  //     name: "Quantitative Research Lead",
  //     role: "Machine Learning Researcher",
  //     company: "Crypto Analytics Lab",
  //   },
  //   featured: true,
  // },
  {
    id: "proj_1793209249340",
    slug: "beyond-craft-tattoo",
    num: "04",
    label: "Modern Studio Experience",
    title: "Beyond Craft Tattoo",
    client: "Beyond Craft Studio",
    industry: "Creative & Lifestyle",
    category: "Web & Mobile Applications",
    year: "2024",
    desc: "A modern, responsive website featuring engaging tattoo artwork galleries, streamlined studio booking navigation, and mobile-optimized client experience.",
    overview:
      "Developed a modern, responsive website for Beyond Craft Tattoo to showcase tattoo artwork, services, and studio information. Designed an engaging gallery and intuitive navigation to create a seamless user experience across desktop and mobile devices. The website helps establish a professional online presence, highlight artistic work, and attract potential clients through a clean, visually appealing design.",
    challenge:
      "Beyond Craft needed to elevate its brand presence to stand out in a competitive urban creative market. Their existing client funnel relied almost exclusively on social channels without an authoritative, high-fidelity gallery where prospective clients could study resident artists' styles, portfolios, and studio hygiene standards.",
    approach:
      "We focused on an editorial, dark-canvas visual language that lets vibrant tattoo artwork take center stage. Built with Next.js and Tailwind CSS, the platform emphasizes smooth transitions, ultra-fast image loading, and intuitive navigation towards booking consultations.",
    solution:
      "A high-performance Next.js and MongoDB application featuring curated category galleries, artist profiles, studio service guides, and direct consultation contact points. Optimized across all viewports to ensure high client conversion on mobile devices.",
    results: [
      "Editorial-grade digital showcase highlighting custom artist portfolios and flash collections",
      "Sub-second page transitions powered by Next.js server-side rendering and asset pre-caching",
      "Streamlined booking and inquiry workflow driving direct customer acquisition",
      "Fully responsive design delivering flawless presentation across smartphones, tablets, and desktops",
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "Vercel"],
    img: "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1793209346442_Portfolio_Imsg_Draft.png",
    gallery: [
      "https://pub-fb1f006f5d2d4975b5db596b42f860e9.r2.dev/uploads/1793209346442_Portfolio_Imsg_Draft.png",
    ],
    demoUrl: "https://beyond-craft-alpha.vercel.app/",
    githubUrl: "",
    testimonial: {
      quote:
        "Our clients constantly compliment the website. It gives our studio a polished, international feel that reflects the precision of our tattoo work.",
      name: "Beyond Craft Team",
      role: "Studio Management",
      company: "Beyond Craft Tattoo",
    },
    featured: false,
  }
];

// Fallback legacy case studies for backward compatibility
export const legacyCaseStudies: Record<string, Omit<ProjectItem, "id">> = {
  "nexus-education": {
    slug: "nexus-education",
    num: "01",
    label: "Education Platform",
    title: "Nexus Education",
    client: "Nexus Learning Group",
    industry: "EdTech",
    category: "Product Engineering",
    year: "2024",
    desc: "A comprehensive learning management system serving 120,000 students across 14 countries.",
    overview: "A comprehensive learning management system serving 120,000 students across 14 countries — built from scratch in 14 months.",
    challenge: "Nexus came to us with an aging Moodle installation that was buckling under growth. 120,000 students, 14 country deployments, and 3 different regulatory environments meant off-the-shelf solutions couldn't work. The system needed to be rebuilt from the ground up.",
    approach: "We began with a six-week discovery phase embedded with the Nexus product and pedagogy teams. Rather than mapping features, we mapped learning journeys — understanding how students actually engage, where they drop off, and what educators need to see. Architecture was designed for regional data residency from day one.",
    solution: "A multi-tenant LMS built on React and Node.js, with a PostgreSQL cluster configuration for regional data isolation. The system includes a custom assessment engine, live class tooling integrated with their video provider, and a parent/guardian portal. API-first design allows third-party content providers to integrate directly.",
    results: [
      "120,000 active students at full production scale",
      "3× improvement in student retention vs. previous platform",
      "14 country deployments with full data residency compliance",
      "99.97% uptime across a 12-month period",
      "Deployment time reduced from 2 weeks to 4 hours per new country",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop&auto=format",
    ],
    testimonial: {
      quote: "RuSoft didn't just build the product — they understood our business at a level most agencies never reach. The result speaks for itself: 3× user retention within 90 days of launch.",
      name: "Adriana Müller", role: "CTO", company: "Nexus Learning Group",
    },
  },
  "stratify-life": {
    slug: "stratify-life",
    num: "02",
    label: "Life Management Platform",
    title: "Stratify",
    client: "Stratify Inc.",
    industry: "Productivity",
    category: "Mobile Applications",
    year: "2024",
    desc: "Cross-platform productivity application with AI scheduling and habit intelligence.",
    overview: "A cross-platform productivity application combining AI scheduling, habit tracking, and deep work sessions. 280,000 active users within 90 days of launch.",
    challenge: "The Stratify team had a bold vision for AI-native productivity but no technical team to execute. They needed a partner who could architect the AI layer, the mobile applications, and the backend simultaneously — and who could move at startup speed without sacrificing production quality.",
    approach: "We built a cross-functional team: mobile engineers for iOS and Android, a backend team for the event-driven data layer, and an AI team for the scheduling intelligence engine. Weekly milestone reviews with the founders kept scope tight and feedback loops short.",
    solution: "React Native apps for iOS and Android with a shared business logic layer. The AI scheduling engine uses a fine-tuned model for personal preference learning, integrated via a streaming API. The backend is event-driven using Kafka and Redis for real-time sync across devices.",
    results: [
      "280,000 active users within 90 days of App Store launch",
      "#4 Productivity on App Store (US) at launch",
      "Average session length 22 minutes — 3× category average",
      "AI scheduling accuracy rated 4.8/5 by users",
      "Sub-200ms sync latency across devices",
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "Kafka", "Redis", "PostgreSQL", "LLMs", "AWS"],
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b1?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870ca?w=800&h=500&fit=crop&auto=format",
    ],
    testimonial: {
      quote: "Working with RuSoft felt like having a senior engineering team inside our own organization. Their attention to architecture and long-term maintainability was exceptional.",
      name: "James Okafor", role: "VP Engineering", company: "Stratify Inc.",
    },
  },
  "meridian-finance": {
    slug: "meridian-finance",
    num: "03",
    label: "Financial Analytics",
    title: "Meridian Analytics",
    client: "Meridian Capital",
    industry: "FinTech",
    category: "Cloud Architecture",
    year: "2023",
    desc: "Real-time portfolio analytics processing 4 million financial events per second.",
    overview: "Real-time portfolio analytics and risk modeling platform processing 4 million financial events per second across global markets.",
    challenge: "Meridian's existing analytics infrastructure was batch-based, delivering insights 4 hours after market close. They needed real-time risk modeling across 12 global markets with sub-second latency — a significantly harder technical problem than their previous vendor had led them to believe.",
    approach: "We spent the first month purely on architecture. The problem required a stream-processing backbone capable of handling the full event volume with deterministic latency guarantees. We evaluated and benchmarked three different architectural patterns before committing.",
    solution: "A Java/Spring Boot event-processing system using Apache Kafka for the streaming backbone, with Flink for stateful stream computations. Risk models run in isolated compute units that can be updated without system downtime. A React dashboard delivers sub-second chart updates via WebSocket connections.",
    results: [
      "4 million financial events processed per second",
      "Sub-300ms end-to-end latency from event to dashboard",
      "12 global market feeds integrated simultaneously",
      "Zero unplanned downtime in 18 months of production",
      "Risk model update cycle reduced from 4 hours to 8 minutes",
    ],
    technologies: ["Java", "Spring Boot", "Apache Kafka", "Apache Flink", "PostgreSQL", "Redis", "Kubernetes", "React", "WebSockets"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=800&h=500&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop&auto=format",
    ],
    testimonial: {
      quote: "The performance benchmarks they delivered were beyond anything we had scoped. Processing 4M events per second on a system we can actually maintain — remarkable.",
      name: "Sarah Chen", role: "Head of Technology", company: "Meridian Capital",
    },
  },
};
