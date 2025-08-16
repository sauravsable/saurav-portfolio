import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { Skill } from "@/types";

export const skills: Skill[] = [
  {
    title: "Frontend",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
    icon: FaCode,
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    icon: FaLaptopCode,
  },
  {
    title: "Tools & Others",
    skills: ["Git / GitHub", "Docker", "AWS", "CI/CD"],
    icon: FaGraduationCap,
  },
];
