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
    info: "Alex Walker",
  },
  {
    label: "Phone",
    info: "+1 212-708-9400",
  },
  {
    label: "Email",
    info: "hello@yourdomain.com",
  },
  {
    label: "Location",
    info: "Odesa, Ukraine",
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
    startDate: new Date(2015, 1),
    endDate: new Date(2016, 1),
    currentlyStudyHere: false,
    description:
      "Intensive drawing courses that present the fundamental principles of drawing.",
    title: "Drawing Concentration",
    source: "New York Academy of Art",
  },
  {
    startDate: new Date(2019, 1),
    endDate: new Date(2021, 1),
    currentlyHere: false,
    description:
      "Research, design, and prototype effective, visually-driven websites and apps.",
    title: "UI/UX Design Specialization",
    source: "California Institute of Arts",
  },
  {
    startDate: new Date(2022, 1),
    endDate: new Date(),
    currentlyStudyHere: true,
    description:
      "This cource is about how to complete the design process from beginning to end.",
    title: "UI/UX Designer",
    source: "Coursera",
  },
];

export const EXPERIENCES = [
  {
    startDate: new Date(2018),
    endDate: new Date(2019),
    currentlyStudyHere: false,
    description:
      "Intensive drawing courses that present the fundamental principles of drawing.",
    title: "Illustrator",
    source: "New York Academy of Art",
  },
  {
    startDate: new Date(2019),
    endDate: new Date(2021),
    currentlyHere: false,
    description:
      "Research, design, and prototype effective, visually-driven websites and apps.",
    title: "Graphic Designer",
    source: "California Institute of Arts",
  },
  {
    startDate: new Date(2021),
    endDate: new Date(),
    currentlyStudyHere: true,
    description:
      "This cource is about how to complete the design process from beginning to end.",
    title: "UI/UX Designer",
    source: "Coursera",
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
    value: "Odesa, Ukraine"
  },
  {
    label: "Phone",
    value: "+1 212-708-9400"
  },
  {
    label: "Email",
    value: "hello@alexwalker.com"
  },
]