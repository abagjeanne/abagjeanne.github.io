import {
  cssLogo,
  figmaLogo,
  htmlLogo,
  illustratorLogo,
  instagramDarkLogo,
  instagramLogo,
  notionLogo,
  photoshopLogo,
  pinterestDarkLogo,
  pinterestLogo,
  t01,
  t02,
  w01,
  w02,
  w03,
  w04,
  wpLogo,
  tailwindLogo,
} from "@/assets/images";
import { Grid2X2, House, Mail, Newspaper, UserRound } from "lucide-react";

export const NAV_LINKS = [
  {
    label: "Home",
    icon: House,
    href: "#home",
  },
  {
    label: "Portfolio",
    icon: Grid2X2,
    href: "#portfolio",
  },
  {
    label: "About Me",
    icon: UserRound,
    href: "#about",
  },
  {
    label: "Resume",
    icon: Newspaper,
    href: "#resume",
  },
  {
    label: "contact",
    icon: Mail,
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: instagramLogo,
    darkIcon: instagramDarkLogo,
    url: "https://www.instagram.com/",
  },
  {
    icon: pinterestLogo,
    darkIcon: pinterestDarkLogo,
    url: "https://www.pinterest.com/",
  },
];

export const WORKS = [
  {
    title: "TEAMBA Learning Management System",
    image: w01,
    touls: ["PHP", "MySQL", "JS", "Full-Stack Dev"],
    desc: "The system is a web application providing sex education for pre-teens (9-11 years old) in Barangay Maybunga. It offers a secure, intuitive platform with interactive content, fostering active learning. ",
  },
  {
    title: "Personal Portfolio Project",
    image: w02,
    touls: ["UI Design", "Figma"],
    desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  },
  // {
  //   title: "Nearest Bus Stop Finder",
  //   image: w03,
  //   touls: ["Illustrations", "3D Render"],
  //   desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  // },
  // {
  //   title: "Smart Penguin",
  //   image: w04,
  //   touls: ["Illustrations", "AI Experiment"],
  //   desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  // },
];

export const ACHIEVEMENTS = [
  {
    title: "Happy clients",
    number: "40+",
  },
  {
    title: "Years of experience",
    number: "2+",
  },
  {
    title: "Projects done",
    number: "50+",
  },
];

export const INFORMATIONS = [
  {
    label: "Name",
    info: "Jeanne Mari Abag",
  },
  {
    label: "Phone",
    info: "+63 966 481 0660",
  },
  {
    label: "Email",
    info: "abagjeanne@gmail.com",
  },
  {
    label: "Location",
    info: "Manila, Philippines",
  },
];

export const SERVICES = [
  {
    title: "Frontend Development & Web Design",
    touls: ["UI/UX", "Responsive Design"],
    description: "I specialize in creating user-friendly interfaces using HTML/CSS, JavaScript, ReactJS, Tailwind CSS, Bootstrap, and WordPress to enhance web accessibility and user experience.",
    // image: s01,
  },
  {
    title: "Graphic Design & Digital Art",
    touls: ["Photoshop", "Illustrator", "Figma"],
    description: "I create compelling visual content using Adobe Photoshop, Illustrator, Fresco, Blender, and Figma, delivering high-quality illustrations, graphics, and 3D renders.",
    // image: s02,
  },
  {
    title: "Digital Marketing & Social Media",
    touls: ["Strategy", "Analytics"],
    description: "I develop and implement social media strategies, create engaging content, monitor analytics, and optimize digital marketing campaigns to boost engagement and brand visibility.",
    // image: s03,
  },
  {
    title: "Brand Identity & Visual Branding",
    touls: ["Logo Design", "Style Guides"],
    description: "I help clients create a distinct brand identity by designing logos, developing style guides, and establishing a consistent brand voice and visual presence.",
    // image: s04,
  },
];

export const EDUCATIONS = [
  {
    startDate: new Date(2020, 7),
    endDate: new Date(2024, 8),
    currentlyStudyHere: false,
    description:
      "Bachelor of Science in Computer Science with a focus on front-end development and digital content strategies.",
    title: "Bachelor of Science in Computer Science",
    source: "Technological University of the Philippines - Manila",
  },
  {
    startDate: new Date(2018, 5),
    endDate: new Date(2020, 6),
    currentlyHere: false,
    description:
      "Concentrated on Science, Technology, and Mathematics.",
    title: "Science, Technology and Mathematics",
    source: "La Salle College Antipolo",
  },
];

export const EXPERIENCES = [
  {
    startDate: new Date(2024, 5),
    endDate: new Date(),
    currentlyStudyHere: true,
    description:
      "Maintaining IT infrastructure for 80+ employees, leading front-end development, and providing technical support.",
    title: "IT Specialist",
    source: "Philippine Dragon Media Network",
  },
  {
    startDate: new Date(2024, 2),
    endDate: new Date(2024, 4),
    currentlyHere: false,
    description:
      "Assisted with IT operations, technical support, and telecom logistics.",
    title: "IT Specialist - Intern",
    source: "Philippine Dragon Media Network",
  },
  {
    startDate: new Date(2023, 9),
    endDate: new Date(2024, 7),
    currentlyHere: false,
    description:
      "Created engaging content and managed social media updates for improved online presence.",
    title: "Social Media Management Committee - Assistant Head",
    source: "TUP-Companion",
  },
  {
    startDate: new Date(2022, 11),
    endDate: new Date(2023, 6),
    currentlyHere: false,
    description:
      "Developed content strategies to boost engagement and brand awareness.",
    title: "Promotions and Social Media Lead",
    source: "UX Society TUP-Manila",
  },
  {
    startDate: new Date(2018, 7),
    endDate: new Date(2020, 10),
    currentlyHere: false,
    description:
      "Managed billing and collections, created employee IDs, and improved client communication.",
    title: "Account Officer",
    source: "SevenSeas Trucking",
  },
  {
    startDate: new Date(2018, 3),
    endDate: new Date(2018, 6),
    currentlyHere: false,
    description:
      "Responsible for inputting, updating, and managing data in a computer system or database.",
    title: "Data Encoder",
    source: "RKJEER Services Inc.",
  },
];


export const TOOLS = [
  {
    title: "Photoshop",
    image: photoshopLogo, 
  },
  {
    title: "Figma",
    image: figmaLogo, 
  },
  {
    title: "Illustrator",
    image: illustratorLogo, 
  },
  {
    title: "HTML5",
    image: htmlLogo, 
  },
  {
    title: "CSS3",
    image: cssLogo, 
  },
  // {
  //   title: "JavaScript",
  //   image: jsLogo, 
  // },
  // {
  //   title: "Bootstrap",
  //   image: bootstrapLogo, 
  // },
  // {
  //   title: "ReactJS",
  //   image: reactLogo, 
  // },
  {
    title: "Tailwind CSS",
    image: tailwindLogo, 
  },
  {
    title: "WordPress",
    image: wpLogo, 
  },
];


export const TESTIMONIALS = [
  {
    name: "Alex Thompson",
    avatar: t01,
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.",
    jobTitle: "Brand Manager",
    company: "Instant Design",
  },
  {
    name: "Jenny Parker",
    avatar: t02,
    feedback:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.",
    jobTitle: "Brand Manager",
    company: "Instant Design",
  },
];

export const CONTACT_INFO = [
  {
    label: "Location",
    value: "Manila, Philippines"
  },
  {
    label: "Phone",
    value: "+63 966 481 0660"
  },
  {
    label: "Email",
    value: "abagjeanne@gmail.com"
  },
]