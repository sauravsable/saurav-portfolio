import { IconType } from "react-icons";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface Skill {
  title: string;
  skills: string[];
  icon: IconType;
}


export interface Education {
  branch: string;
  college: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  work: string[];
}

export interface Contact {
  title: string;
  link: string;
  linkheading: string;
  icon: IconType;
}

export interface SocialMedia {
  link: string;
  icon: IconType
}