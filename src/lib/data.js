import {
  behanceDarkLogo,
  behanceLogo,
  blenderLogo,
  cssLogo,
  dribbbleDarkLogo,
  dribbbleLogo,
  figmaLogo,
  htmlLogo,
  illustratorLogo,
  instagramDarkLogo,
  instagramLogo,
  notionLogo,
  photoshopLogo,
  pinterestDarkLogo,
  pinterestLogo,
  s01,
  s02,
  s03,
  s04,
  sketchLogo,
  t01,
  t02,
  twitchDarkLogo,
  twitchLogo,
  w01,
  w02,
  w03,
  w04,
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
    icon: dribbbleLogo,
    darkIcon: dribbbleDarkLogo,
    url: "https://dribbble.com/",
  },
  {
    icon: behanceLogo,
    darkIcon: behanceDarkLogo,
    url: "https://www.behance.net/",
  },
  {
    icon: instagramLogo,
    darkIcon: instagramDarkLogo,
    url: "https://www.instagram.com/",
  },
  {
    icon: twitchLogo,
    darkIcon: twitchDarkLogo,
    url: "https://www.twitch.tv/",
  },
  {
    icon: pinterestLogo,
    darkIcon: pinterestDarkLogo,
    url: "https://www.pinterest.com/",
  },
];

export const WORKS = [
  {
    title: "Isometric House",
    image: w01,
    touls: ["Illustrations", "3D Render"],
    desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio.",
  },
  {
    title: "Dashboard Template",
    image: w02,
    touls: ["UI Design", "Figma"],
    desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  },
  {
    title: "Notification",
    image: w03,
    touls: ["Illustrations", "3D Render"],
    desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  },
  {
    title: "Smart Penguin",
    image: w04,
    touls: ["Illustrations", "AI Experiment"],
    desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  },
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
    title: "Frontend development",
    touls: ["UI/UX Design", "Design to Code"],
    description: "I work with HTML/CSS, Framer and WordPress.",
    image: s01,
  },
  {
    title: "Digital art and graphic design",
    touls: ["Illustrations", "AI Experiments"],
    description:
      "I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders for my clients and stocks.",
    image: s02,
  },
  {
    title: "SEO/Digital marketing solutions",
    touls: ["Social Media", "Analytics"],
    description:
      "Social media content plans, media monitoring, email and text messaging and search engine optimization.",
    image: s03,
  },
  {
    title: "Brand identity",
    touls: ["Logo Design", "Style Guides"],
    description:
      "I help my clients to develop a personality and brand voice, design the brand look and logo.",
    image: s04,
  },
];

export const EDUCATIONS = [
  {
    startDate: new Date(2020, 0),
    endDate: new Date(2024, 0),
    currentlyStudyHere: true,
    description:
      "Bachelor of Science in Computer Science with a focus on front-end development and digital content strategies.",
    title: "Bachelor of Science in Computer Science",
    source: "Technological University of the Philippines - Manila",
  },
  {
    startDate: new Date(2018, 0),
    endDate: new Date(2020, 0),
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
    title: "Sketch",
    image: sketchLogo,
  },
  {
    title: "Blender",
    image: blenderLogo,
  },
  {
    title: "HTML5",
    image: htmlLogo,
  },
  {
    title: "CSS3",
    image: cssLogo,
  },
  {
    title: "Notion",
    image: notionLogo,
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
    value: "hello@alexwalker.com"
  },
]