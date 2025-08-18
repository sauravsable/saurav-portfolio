import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "React Native", "Redux/Redux Toolkit", "Material UI", "Chart.js", "Tailwind CSS", "HTML5 / CSS3"],
    icon: FaCode,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Express", "Kafka", "PostgreSQL", "MongoDB","Redis", "AWS Redshift"],
    icon: FaLaptopCode,
  },
  {
    title: "Tools & Others",
    skills: ["Typescript", "REST / GraphQL API","Git / GitHub", "Docker", "AWS", "Postman","n8n/Make.com", "Puppeteer"],
    icon: FaGraduationCap,
  },
];
