import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  
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
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: creator,
  },
  {
    title: "UI/UX Design",
    icon: mobile,
  },
  {
    title: "Programming (C++)",
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
  //{
  //  name: "TypeScript",
  //  icon: typescript,
  //},
  {
    name: "React JS",
    icon: reactjs,
  },
  //{
  //  name: "Redux Toolkit",
  //  icon: redux,
  //},
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  //{
  //  name: "MongoDB",
  //  icon: mongodb,
  //},
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
      name: "gitHub",
      icon: github,
  },
  {
      name: "figma",
      icon: figma,
  },
  //{
  //  name: "docker",
  //  icon: docker,
  //},
];

const experiences = [
  {
    title: "Bachelor of Technolgy",
    school_name: "University Institute of Technology, RGPV (Bhopal)",
    course: "Information Technology",
    //location:"Bhopal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2020 - Present",
    points: ["Course : Information Technolgy"],
  },
  {
    title: "Higher Secondary (XII)",
    school_name: "Scholars Public Higher Secondary School (Niwari)",
    icon: tesla,
    course: "Science",
    iconBg: "#383E56",
    date: "May 2019 - April 2020",
    points: ["Course : Information Technolgy"],
  },
  {
    title: "High School (X)",
    school_name: "Rani Lakshmi Bai Public Academy High School (Niwari)",
    icon: tesla,
    course: "Science",
    iconBg: "#383E56",
    date: "April 2017 - April 2018",
    points: ["Course : Information Technolgy"],
  },
  //{
  //    title: "Web Developer",
  //    company_name: "Shopify",
  //    icon: shopify,
  //    iconBg: "#383E56",
  //    date: "Jan 2022 - Jan 2023",
  //    points: [
  //        "Developing and maintaining web applications using React.js and other related technologies.",
  //        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //        "Implementing responsive design and ensuring cross-browser compatibility.",
  //        "Participating in code reviews and providing constructive feedback to other developers.",
  //    ],
  //},
  //{
  //    title: "Full stack Developer",
  //    company_name: "Meta",
  //    icon: meta,
  //    iconBg: "#E6DEDD",
  //    date: "Jan 2023 - Present",
  //    points: [
  //        "Developing and maintaining web applications using React.js and other related technologies.",
  //        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //        "Implementing responsive design and ensuring cross-browser compatibility.",
  //        "Participating in code reviews and providing constructive feedback to other developers.",
  //    ],
  //},
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
    name: "Web Portfolio",
    description:
    "A dynamic portfolio featuring projects, education, and contact details with animated elements.",
    tags: [
      //HTML, CSS, JavaScript, ReactJs, NodeJs, ThreeJs, ViteJs, Tailwind CSS and Git/GitHub
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
      // {
      //   name: "ViteJS",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Tailwind CSS",
      //   color: "green-text-gradient",
      // },
      
    ],
    image: "https://raw.githubusercontent.com/AmanSagar0607/Portfolio/main/src/assets/portfolio.png",
    source_code_link: "https://github.com/AmanSagar0607/Portfolio",
  },
  {
    name: "Loruki Cloud Hosting",
    description:
    "Loruki: Your top choice for advanced cloud hosting, delivering seamless and reliable services with a user-friendly interface.",
    tags: [
      //HTML, CSS, JavaScript, ReactJs, NodeJs, ThreeJs, ViteJs, Tailwind CSS and Git/GitHub
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub",
        color: "green-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
      // {
      //   name: "ViteJS",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Tailwind CSS",
      //   color: "green-text-gradient",
      // },
    ],
    image: "https://raw.githubusercontent.com/AmanSagar0607/Portfolio/main/src/assets/portfolio.png",
    source_code_link: "https://amansagar0607.github.io/Loruki-Cloud-Hosting/",
  },
  {
    name: "CN Clone Page",
    description:
    "Cartoon Network Hub: A web page platform for CN home page with grid-packed cartoon schedule for animated cartoons.",
    tags: [
      //HTML, CSS, JavaScript, ReactJs, NodeJs, ThreeJs, ViteJs, Tailwind CSS and Git/GitHub
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "Github",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "green-text-gradient",
      },
      // {
      //   name: "ThreeJS",
      //   color: "pink-text-gradient",
      // },
      // {
      //   name: "ViteJS",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "Tailwind CSS",
      //   color: "green-text-gradient",
      // },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AmanSagar0607/Portfolio/main/src/assets/portfolio.png",
    source_code_link: "https://amansagar0607.github.io/CN-clone/",
  },
  {
    name: "Aryan Photography",
    description:
    "A Photography Platform: Showcasing portfolios with stunning photo shoots and captivating wild images.",
    tags: [
      //HTML, CSS, JavaScript, ReactJs, NodeJs, ThreeJs, ViteJs, Tailwind CSS and Git/GitHub
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub",
        color: "green-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AmanSagar0607/Portfolio/main/src/assets/portfolio.png",
    source_code_link: "https://amansagar0607.github.io/ARYAN-PHOTOGRAPHY/",
  },
  {
    name: "SB UI Kit Pro",
    description:
    "SB UI Kit Pro: Unleashing advanced features and hosting capabilities, showcasing graphic illustration, and modern designs.",
    tags: [
      //HTML, CSS, JavaScript, ReactJs, NodeJs, ThreeJs, ViteJs, Tailwind CSS and Git/GitHub
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub",
        color: "green-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/AmanSagar0607/Portfolio/main/src/assets/portfolio.png",
    source_code_link: "https://amansagar0607.github.io/SB-UI-Kit-Pro/",
  },
  {
    name: "Musify",
    description:
      "Streamlined web music player platform for seamless playback, featuring a user-friendly interface and convenient track navigation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://amansagar0607.github.io/Musicify/",
  },
  // {
  //   name: "CloverStore",
  //   description:
  //     "An E-commerce platform for shopping, product, treding, clothes , attire with a variety of products",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javaScript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://amansagar0607.github.io/Clovestore/",
  // },
  {
    name: "TRIPME",
    description:
    "TripMe: Elevate your travel experience with effortless booking and discover top-notch hotels, all in one streamlined platform.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "gitHub",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://amansagar0607.github.io/TRIPME/",
  },
  {
    name: "Js Form Validation",
    description:
      "Efficiently validate registration form inputs to ensure accurate user information in a concise and user-friendly manner.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "Github",
        color: "green-text-gradient",
      },
      {
        name: "Adobe Xd",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://amansagar0607.github.io/FormValidataion/",
  },
  {
    name: "Gamify",
    description:
      "Created a user-friendly gaming website that enables seamless browsing and discovery of various gaming products.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "green-text-gradient",
      },
      {
        name: "Git",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://amansagar0607.github.io/Gamify",
  },
];

export { services, technologies, experiences, testimonials, projects };
