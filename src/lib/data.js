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
  pythonLogo,
  jsLogo,
  t01,
  t02,
  c01,
  c02,
  w01,
  w02,
  w03,
  w04,
  w05,
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
  // {
  //   icon: instagramLogo,
  //   darkIcon: instagramDarkLogo,
  //   url: "https://www.instagram.com/",
  // },
  // {
  //   icon: pinterestLogo,
  //   darkIcon: pinterestDarkLogo,
  //   url: "https://www.pinterest.com/",
  // },
];

export const WORKS = [
  {
    title: "TEAMBA Learning Management System",
    image: w01,
    touls: ["PHP", "MySQL", "JS", "Full-Stack Dev"],
    description: "A web application providing comprehensive sex education for pre-teens (9-11 years old) in Barangay Maybunga. It features a secure and user-friendly platform with interactive content designed to foster active learning.",
    link: "",
  },
  {
    title: "Personal Portfolio Project",
    image: w02,
    touls: ["UI Design", "Figma"], // Added touls
    description: "A school project consisting of a Figma prototype for a personal portfolio. The design emphasizes clean UI/UX, showcasing project layouts and personal branding.",
    link: "https://www.figma.com/proto/AkL7Yi1cGnVjXC9mLkbi5T/ABAG_FinalProject_Portfolio?node-id=0-1&t=rZUWpnivJvVBJp8u-1", // Optional: Add a link if needed
  },
  {
    title: "Nearest Bus Stop Finder",
    image: w03,
    touls: ["Flutter", "Dart", "Mobile Application"],
    description: "A mobile app developed using Flutter and Dart, designed to help users locate the nearest bus stops in real-time, offering a seamless navigation experience.",
    link: "https://github.com/romanolester/BGC-Bus-Tracker", // Optional: Add a link if needed
  },
  {
    title: "Meeting Room Booking System",
    image: w04,
    touls: ["Vue.js", "CSS", "JavaScript"],
    description: "A responsive web application for booking meeting rooms, built with Vue.js. It allows users to reserve rooms, check availability, and manage bookings efficiently.",
    link: "https://gdsbooking.netlify.app/dashboard",
  },
  {
    title: "Fil-Chi Job Fair 2024 Website",
    image: w05,
    touls: ["HTML", "CSS", "JavaScript"],
    description: "A collaborative effort to connect job seekers and employers at the Fil-Chi Job Fair 2024.",
    link: "https://www.filchi-jobfair.com/",
  }
];


export const CERTIFICATES = [
  // {
  //   title: "Happy clients",
  //   desc: "Mauris porttitor lobortis ligula, quis molestie lorem scelerisque eu. Morbi aliquam enim odio,a mollis ipsum tristique eu.",
  //   image: c01,
  // },
  // {
  //   title: "Years of experience",
  //   number: "2+",
  // },
  // {
  //   title: "Projects done",
  //   number: "50+",
  // },
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
  },
  {
    title: "Graphic Design & Digital Art",
    touls: ["Photoshop", "Illustrator", "Figma"],
    description: "I create compelling visual content using Adobe Photoshop, Illustrator, Fresco, Blender, and Figma, delivering high-quality illustrations, graphics, and 3D renders.",
  },
  {
    title: "Digital Marketing & Social Media",
    touls: ["Strategy", "Analytics"],
    description: "I develop and implement social media strategies, create engaging content, monitor analytics, and optimize digital marketing campaigns to boost engagement and brand visibility.",
  },
  {
    title: "Brand Identity & Visual Branding",
    touls: ["Logo Design", "Style Guides"],
    description: "I help clients create a distinct brand identity by designing logos, developing style guides, and establishing a consistent brand voice and visual presence.",
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


// Creative Tools
export const CREATIVETOOLS = [
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
];

// Development Tools
export const DEVTOOLS = [
  {
    title: "HTML5",
    image: htmlLogo, 
  },
  {
    title: "CSS3",
    image: cssLogo, 
  },
  {
    title: "Python",
    image: pythonLogo, 
  },
  {
    title: "Tailwind CSS",
    image: tailwindLogo, 
  },
  {
    title: "WordPress",
    image: wpLogo, 
  },
  {
    title: "JavaScript",
    image: jsLogo, 
  },
  {
    title: "GitHub",
    // image: githubLogo, 
  },
  {
    title: "VS Code",
    // image: vscodeLogo,
  },
  {
    title: "PyCharm",
    // image: pycharmLogo, 
  },
  {
    title: "Jupyter",
    // image: jupyterLogo,
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