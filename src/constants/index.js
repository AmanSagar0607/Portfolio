import {
    mobile,
    backend,
    creator,
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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "ReactJs Developer",
        icon: mobile,
    },
    {
        title: "UI/UX Design",
        icon: backend,
    },
    {
        title: "NextJs Developer",
        icon: creator,
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
    // {
    //     name: "git",
    //     icon: git,
    // },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
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
        points: [
            "Course : Information Technolgy",
        ],
    },
    {
        title: "Higher Secondary Education",
        school_name: "Scholars Public Higher Secondary School (Niwari)",
        icon: tesla,
        course: "Science",
        iconBg: "#383E56",
        date: "July 2019 - March 2020",
        points: [
            "Course : Information Technolgy",
        ],
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
        ],
        image: carrent,
        source_code_link: "https://amansagar0607.github.io/Musicify/",
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
        ],
        image: jobit,
        source_code_link: "https://amansagar0607.github.io/FormValidataion/",
    },
    {
        name: "Trip Guide",
        description:
            "Created a user-friendly gaming website that enables seamless browsing and discovery of various gaming products..",
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
        ],
        image: tripguide,
        source_code_link: "https://amansagar0607.github.io/Gamify",
    },
];

export { services, technologies, experiences, testimonials, projects };
