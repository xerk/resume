import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ahmed Mamdouh",
  role: "Senior Software Engineer",
  initials: "AM",
  url: "https://xerk.io",
  location: "6th Of October, Egypt",
  locationLink: "https://www.google.com/maps/place/october-gardens",
  description: 
    "Senior Full Stack Engineer with 8+ years of experience. Expert in TypeScript, Next.js, Nuxt.JS, Laravel, and Node.js. Building scalable web applications and mentoring teams.",
  summary: 
    "I am a Software Engineer with extensive experience in both front-end and back-end development. I've developed numerous websites, web apps, and integrated various payment systems. My expertise spans PHP, Laravel, NestJS, Node.js, React, and Next.js. I've created multiple eCommerce platforms, Learning Management Systems (LMS), School Management Systems (SMS), and SaaS applications. I have a strong track record of developing payment systems and building APIs from scratch.",
  avatarUrl: "/profile.png",
  resumeUrl: "https://ggl.link/xerk-cv",
  skills: [
    "PHP",
    "Laravel",
    "FailmentPHP",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Nuxt.js",
    "Vue.js",
    "Node.js",
    "NestJS",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "TailwindCSS",
    "Docker",
    "AWS",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "gm.xerk@gmail.com",
    tel: "+20 1111981716",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/xerk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/xerk-linkedin",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/xerk-x",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:gm.xerk@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Netsync",
      href: "https://netsync.io",
      badges: [],
      location: "Remote, US",
      title: "Senior Software Engineer",
      logoUrl: "/experiences/netsync.png",
      start: "February 2023",
      end: "Present",
      description:
        "Led a high-performing team of full-stack engineers skilled in Laravel and Angular. Managed Jira tasks and handled CI/CD pipelines. Managed end-to-end software development lifecycle. Developed go2alto.com platform for device management IPTV using Laravel, MongoDB, Socket.io, and Node.js.",
    },
    {
      company: "SweepSouth",
      href: "https://sweepsouth.com",
      badges: [],
      location: "Remote, South Africa",
      title: "Senior Software Engineer",
      logoUrl: "/experiences/sweepsouth.png",
      start: "April 2022",
      end: "February 2023",
      description:
        "Developed and launched applications using Laravel for backend and Angular.js for frontend with MongoDB. Drove server-side development with Node.js, ensuring system scalability. Implemented Vue.js and ElectronJS for modern interfaces. Orchestrated containerization using Kubernetes and Docker. Managed AWS deployments.",
    },
    {
      company: "Technocloud",
      href: "https://technocloud.com",
      badges: [],
      location: "Office, Egypt",
      title: "Senior Team Lead",
      logoUrl: "/experiences/technocloud.png",
      start: "August 2020",
      end: "April 2022",
      description:
        "Led development of multiple applications including Zerocash App, Rojetah, and Dealmart App using Laravel and Vue.js. Introduced Agile methodologies to teams of 7+ employees. Managed product backlogs and sprint planning. Handled deployments using Laravel Forge.",
    },
    {
      company: "Itrinity",
      href: "https://itrinity.com",
      badges: [],
      location: "Remote, Slovakia",
      title: "Senior Software Engineer",
      logoUrl: "/experiences/itrinity.png",
      start: "October 2019",
      end: "August 2020",
      description:
        "Led development with Node.js, NestJS, and GraphQL for UptimeRobot. Created robust backend systems and APIs. Implemented PHP development using CakePHP and Laravel. Managed AWS deployments and utilized Notion for project management.",
    },
    {
      company: "Schoolver",
      href: "https://schoolver.com",
      badges: [],
      location: "Office, Egypt",
      title: "Software Engineer",
      logoUrl: "/experiences/schoolver.png",
      start: "March 2017",
      end: "October 2019",
      description:
        "Developed and launched School Management System (SMS) and Learning Management System (LMS) using Laravel and Vue.js. Implemented CI/CD pipelines and agile methodologies. Built comprehensive solutions for educational institutions.",
    },
  ],
  education: [
    {
      school: "Akhbar El Youm Academy",
      href: "https://akhbaracademy.edu.eg",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/akhbar.png",
      start: "2014",
      end: "2018",
      description:
        "I graduated from Akhbar El Youm Academy with a Bachelor's Degree in Computer Science. I learned the basics of computer science and programming.",
    },
  ],
  projects: [
    {
      title: "Atlo",
      href: "https://go2alto.com",
      dates: "2023 - Present",
      active: true,
      description:
        "Device management IPTV platform built with Laravel, MongoDB, Socket.io, Node.js, and RESTful API.",
      technologies: [
        "Laravel",
        "MongoDB",
        "Socket.io",
        "Node.js",
        "REST API",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://go2alto.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/alto.png",
      video: ""
    },
    {
      title: "Laranj",
      href: "https://laranj.com",
      dates: "2022 - 2023",
      active: true,
      description:
        "POS system for restaurants and merchants, built with Laravel, Vue.js, MySQL, and GraphQL.",
      technologies: [
        "Laravel",
        "Vue.js",
        "MySQL",
        "GraphQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://laranjapp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/laranj.png",
      video: ""
    },
    {
      title: "Agd Ejar",
      href: "https://agd.sa",
      dates: "",
      active: true,
      description:
        "SaaS for rental contracts, management properties, integrated with government services in Saudi Arabia, Vue.js, MySQL, and Laravel.",
      technologies: [
        "Laravel",
        "NuxtJS",
        "MySQL",
        "Netbird (Private VPN)",
        "CI/CD",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://agd.sa",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/agd.png",
      video: ""
    },
    {
      title: "SweepSouth",
      href: "https://sweepsouth.com",
      dates: "2022 - 2023",
      active: true,
      description:
        "SweepSouth is home services platform, built with Lumen, Angular, MongoDB, and Docker.",
      technologies: [
        "Lumen",
        "Angular",
        "MongoDB",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://sweepsouth.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/sweepsouth.png",
      video: ""
    },
    {
      title: "UptimeRobot",
      href: "https://uptimerobot.com",
      dates: "2019 - 2020",
      active: true,
      description:
        "UptimeRobot is uptime monitoring service, built with PHP, Node.js, and MySQL.",
      technologies: [
        "PHP",
        "Laravel",
        "Node.js",
        "MySQL",
        "Microservices",
        "RabbitMQ",
        "Redis",
        "Docker",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://uptimerobot.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/uptimerobot.png",
      video: ""
    },
    {
      title: "Trjim",
      href: "https://trjim.com",
      dates: "2017 - 2019",
      active: true,
      description:
        "Trjim is translation services you are looking for in one place, built with Laravel, Vue.js, and MySQL.",
      technologies: [
        "Laravel",
        "Vue.js",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://trjim.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/trjim.png",
      video: ""
    },
    {
      title: "Sinbad",
      href: "https://sinbadnow.com",
      dates: "2017 - 2019",
      active: true,
      description:
        "SaaS for managing and delivering products to customers, built with Laravel, Vue.js, and MySQL.",
      technologies: [
        "Laravel",
        "Vue.js",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://sinbadnow.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/sinbad.png",
      video: ""
    },
    {
      title: "Teamup AI",
      href: "https://teamupai.io",
      dates: "",
      active: false,
      description:
        "Transforming Businesses with Intelligent AI-Driven Workflow Automation and Management, built with Node.js, Vue.js, and Custom AI Models.",
      technologies: [
        "Node.js",
        "Vue.js",
        "AI Models",
      ],
      links: [
        {
          type: "Website",
          href: "https://teamupai.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/teamupai.png",
      video: ""
    },
    {
      title: "Grub AI",
      href: "https://thegrub.ai",
      dates: "",
      active: false,
      description:
        "AI-powered restaurant recommendation system and food delivery service, built with Supabase, Next.js, and TailwindCSS.",
      technologies: [
        "Supabase",
        "Next.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://thegrub.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/grubai.png",
      video: ""
    }
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 14th - 16th, 2018",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
    // {
    //   title: "FirstNet Public Safety Hackathon",
    //   dates: "March 23rd - 24th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //   icon: "public",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //   links: [],
    // },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH Waterloo",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
