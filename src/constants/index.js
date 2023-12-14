import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  gStudy,
  Next,
  gChat,
  elstore,
  gamerpro,
  datafinance,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    icon: web,
  },
  {
    title: "React Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next",
    icon: Next,
  }
];

const experiences = [
  {
    title: "React.js",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js",
      "React Routing, State Hooks, useEffects, Data Fetching, Authentication, Private Route.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next js",
    icon: Next,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications using Next.js",
      "Next Routing, Hooks, useEffects, Data Fetching, Next-Auth, Private Route.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mongodb",
    icon: mongodb,
    iconBg: "#383E56",
    points: [
        "Store Data files with React Node js in MongoDB",
        "Managing Data",
        "Handling Clusters",
        "Connect with nodejs backend"
    ],
  },
  {
    title: "Backend",
    icon: nodejs,
    iconBg: "#E6DEDD",
    points: [
        "Creating Api Create Read Update Delete",
        "Connect with Database",
        "Creating Server Hosting Link"
    ],
  },

  {
    title: "Git",
    icon: git,
    iconBg: "#E6DEDD",
    points: [
        "Store Files in Git from project",
        "Git Version Control",
        "Creating Branches",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Brand-Shop",
    description: "Electronics Store Where Users Can add new products, update products and delete products, login system with firebase.",
    tags: [
      {
        name: "daisyUI",
        color: "pink-text-gradient"
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient"
      },
      {
        name: "Firebase",
        color: "green-text-gradient"
      },
      {
        name: "NodeJS",
        color: "orange-text-gradient"
      },
      {
        name: "MongoDB",
        color: "green-text-gradient"
      }
    ],
    image: elstore,
    source_code_link: "https://ecomercestore-8b8da.web.app/",
  },
  {
    name: "Online-Group-Study",
    description: "Post and Rating Platform for assignment where user can post their assignment and delete their assignment.Other user can give number to the assignment. Login system with firebase.",
    tags: [
      {
        name: "daisyUI",
        color: "pink-text-gradient"
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient"
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient"
      },
      {
        name: "Firebase",
        color: "green-text-gradient"
      },
      {
        name: "NodeJS",
        color: "orange-text-gradient"
      },
      {
        name: "MongoDB",
        color: "green-text-gradient"
      }
    ],
    image: gStudy,
    source_code_link: "https://onliupstudy.web.app/",
  },
  {
    name: "Thread-Talk",
    description: "Post and Rating Platform for assignment where user can post and delete their post.Other user can give vote to the post. Login system with firebase. There is admin User who has controls for this website. Only Admin can post announcement. User can search posts by tags.",
    tags: [
      {
        name: "daisyUI",
        color: "pink-text-gradient"
      },
      {
        name: "Framer-Motion",
        color: "green-text-gradient"
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient"
      },
      {
        name: "Firebase",
        color: "green-text-gradient"
      },
      {
        name: "NodeJS",
        color: "orange-text-gradient"
      },
      {
        name: "MongoDB",
        color: "green-text-gradient"
      }
    ],
    image: gChat,
    source_code_link: "https://threadchat-f5e07.web.app/",
  },
  {
    name: "Data-Finance",
    description: "Simple Data-Finance React website Frontend",
    tags: [
      {
        name: "Framer-Motion",
        color: "orange-text-gradient"
      },
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Javascript",
        color: "green-pink-gradient"
      }
    ],
    image: datafinance,
    source_code_link: "https://francism4402-b28587.netlify.app/",
  },
  {
    name: "GameEvent",
    description: "Simple Game Event website With Login Firebase.",
    tags: [
      {
        name: "daisyUI",
        color: "pink-text-gradient"
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient"
      },
      {
        name: "Firebase",
        color: "green-text-gradient"
      },
      {
        name: "AOS",
        color: "orange-text-gradient"
      }
    ],
    image: gamerpro,
    source_code_link: "https://gameevent-19abd.web.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
