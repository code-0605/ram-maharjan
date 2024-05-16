import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ram Maharjan',
  title: "Hi, I'm Ram Maharjan",
  description:
    "Full Stack Developer & Senior Front End with a strong combination of technical skills, creativity and an eye for detail brought to every project. Several years of experience in web development, with a solid understanding of HTML, CSS, JavaScript, a variety of front-end frameworks such as React, Angular and Vue and strong experience of block-chain industry including metaverse game, NFT market place, DeFi and Dao.",
  resumeLink:
    'https://drive.google.com/file/d/1PgXJtwxwciUDUjjTMq-RNc0kZpztYHqP/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'code-0605',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://ram-maharjan.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/ram-maharjan-1669391/',
  github: 'https://github.com/code-0605',
  twitter: 'https://twitter.com/maharjan_r24397',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Node.js & Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Rust'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Ether.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Front End Development', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Back End',
    progressPercentage: '80',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Birkbeck, University of London',
    subHeader: `Bachelor's of Science in Computer Science`,
    duration: 'September 2014 - April 2017',
    desc: '',
    grade: 'Grade A',
    descBullets: [
      'Coursework included: Advanced Algorithms, Data Structures, Database Systems, Artificial Intelligence.',
      'Led student coding team for annual hackathon, achieving second place overall.',
      'Participated in AI & Machine Learning research project under Prof. Alex.'
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Front End Developer',
    company: 'iPlayMore',
    companyLogo: '/img/icons/common/iplaymore.jpg',
    date: 'Jun 2022 – Dec 2023',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using React, Node.js, Tailwind CSS, Chart.js and some other libraries.',
    descBullets: [
      "Worked on an Agile (Scrum) Development Team to develop and maintain the NFT market place",
      "Developed and Maintain Education Platform by using React 17 / Redux Saga / React Hook / Next.js / Accessibility",
      "Developed Back end of the Education Platform by using NodeJS / MongoDB",
      "Worked on Front End of Service Platform by using React 16+ / Redux / React Hook",
      "Worked on Back end of Service Platform by using AWS API Gateway, AWS lambda, AWS DynamoDB"
    ]
  },
  {
    role: 'CTO',
    company: 'Cropper Finance',
    companyLogo: '/img/icons/common/cropper.jpg',
    date: 'May 2020 – June 2022',
    desc: 'As CTO at Cropper Finance our change from a social token platform to a decentralized exchange and DAO community overlay. We provide token gated access to community DAOs and portfolio management, live price data and token swaps via integration with DEXs and aggregated yielding solutions.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Cropper Finance',
    companyLogo: '/img/icons/common/cropper.jpg',
    date: 'Jun 2019 - May 2020',
    desc: 'Worked as full-stack web developer to create a website in which I integrated the smart contract to process the game and show Real Time processing on Website, threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
    descBullets: [
      "Built the cross chain social token platform built from the ground up and managed the teams on both the flow and Ethereum blockchains. The platform employs innovative tokenomics and unique smart contracts to each blockchain with a deployed bonding curve acting as an automated market maker and stored liquidity pool",
      "Built the web pages using Typescript, Node.js, React, Redux, PostgreSQL",
      "Worked with app developers to implement a robust search functionality in React for an eCommerce site with 5K+ products, resulting in increased page views",
      "Optimized CSS, JS files, and redundant images, leading to a 30% reduction in assets loading time for a website",
      "Used React JS to create more responsive webpages, which can be compatible with all the browsers and compatible with the different devices",
      "Used AWS S3 APIs to upload images and videos to store",
      "Used JS & jQuery modules such as High Charts, Moment, DatePicker, TimePicker, Calendar",
      "30+ Database modeling and design. Involved in developing the web application",
    ]
  },
  {
    role: 'Front End Developer',
    company: 'Verisk',
    companyLogo: '/img/icons/common/verisk.png',
    date: 'Mar 2018 ~ Dec 2019',
    desc: 'Worked as a Front End Developer to build the landing pages and components with React.js and Deployed it on Azure based Docker container registry.',
    descBullets: [
      "Worked on ESports gaming platform using React / Redux / Class Components",
      "Worked on AWS live streaming channel with React for live streaming users's gaming screen",
      "Built Backend System(Dashboard) using Angular and NodeJs(assist) with cutting edge Written Web services",
      "Developed responsive UI using HTML5 / CSS3 and Bootstrap",
      "Developed cross-browser / multi-browser compatible web pages using HTML5, CSS3, and JavaScript"
    ]
  },
];

export const projects: ProjectType[] = [
  {
    name: 'iPlayMore',
    imgURL: "/img/iplaymore.png",
    desc: 'With 16 unique characters to choose from, our core gameplay loop revolves around a streamlined combat system as players drop into any of our 14 outdoor arenas ...',
    link: 'https://iplaymore.com',
  },
  {
    name: 'Cropper Finance',
    imgURL: "/img/cropper.png",
    desc: 'Decentralized Ecosystem that Empowers Projects & Maximizes Yield to move Defi forward on Solana. Swap, Yield Farming, Staking, IDO Launchpad & more.',
    link: 'https://cropper.finance'
  },
  {
    name: 'ThunderPOKT',
    imgURL: "/img/thunderpokt.png",
    desc: 'ThunderPOKT (tPOKT) is a state of the art system that gives instant liquidity to staked POKT.',
    link: 'https://thunderpokt.fi',
  },
  {
    name: 'Yakki',
    imgURL: "/img/yakki.png",
    desc: 'Yakki is an online platform to search, compare and book unique outdoor experiences with certified professionals.',
    link: 'https://yakki.net',
  },
  {
    name: 'Kiraverse',
    imgURL: "/img/kiraverse.png",
    desc: 'KIRAVΞRSΞ is an online multiplayer game created in Unreal Engine 5 for gamers across the globe to play, compete, and earn achievements to unlock or rent characters, skins, weapons, and more!',
    link: 'https://kiraverse.game',
  },
  {
    name: 'Sevendays',
    imgURL: "/img/sevendays.png",
    desc: 'WE STAGE INCOMPARABLE EVENTS. Imaginative, stylish and with a penchant for perfection, that is SevenDays credo. Because it is the details that make an event an unforgettable moment. ',
    link: 'https://sevendays.de',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Justin',
    feedback:
      'The results exceeded expectations and were timely delivered. While communication was impressive, there was slight initial confusion with project requirements. Clearer comprehension in the early stages could be useful for future work.',
  },
  {
    name: 'Luke Annison',
    feedback:
      "I'm pleased to share my positive experience. The project was completed on schedule with high quality. Your team's responsiveness was appreciated, although a bit more clarity on project updates could enhance the experience further.",
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ram Maharjan',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Ram Maharjan',
  image: '/img/web3.png',
  url: 'https://ram-maharjan.vercel.app/',
  keywords: [
    'Ram',
    'Ram Maharjan',
    '@Ram',
    'Maharjan',
    'Portfolio',
    'Ram Portfolio ',
    'Ram Maharjan Portfolio',
  ],
};
