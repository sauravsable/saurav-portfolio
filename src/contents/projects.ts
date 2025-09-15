import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Mindwell",
    description:
      "A mental wellness platform where users can connect with mentors and counselors for one-on-one guidance. Features include mentor listings, session bookings, counseling fee management, and secure media uploads. Built with scalability in mind, leveraging AWS-S3 for file storage and Redis for optimized caching.",
    technologies: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
      "Redis",
      "Redux Toolkit",
      "AWS-S3",
    ],
    githubLink: "https://github.com/sauravsable/Project-Phase",
    demoLink: "https://mindwell-sigma.vercel.app/",
    image: "/projects/mindwell.png",
  },
  {
    title: "Elitemart",
    description:
      "A real-time collaborative e-commerce platform where multiple users can create shared group carts, add products, and chat in real time before checkout. Built with Socket.IO for real-time messaging, AWS-SQS for message handling, and AWS-S3 for image storage. The project eliminates the need for external chat apps like WhatsApp when shopping together.",
    technologies: [
      "React.js",
      "Node.js",
      "Material UI",
      "MongoDB",
      "SocketIO",
      "Redux",
      "AWS-SQS",
      "AWS-S3",
    ],
    githubLink: "https://github.com/sauravsable/EliteMart-Frontend",
    demoLink: "https://elite-mart-nine.vercel.app/",
    image: "/projects/elitemart.png",
  },
  {
    title: "Expensio",
    description:
      "A personal finance management app that helps users track expenses, set budgets, and visualize spending habits. It uses GraphQL APIs for efficient data fetching and provides insights into financial trends through interactive dashboards.",
    technologies: ["Next.js", "Node.js", "GraphQL", "MongoDB"],
    githubLink: "https://github.com/sauravsable/expensio_frontend",
    demoLink: "https://expensio-three.vercel.app/login",
    image: "/projects/expensio.png",
  },
  {
    title: "AlertSaveJob",
    description:
      "A Chrome extension designed for job seekers. It allows users to save and organize job postings from different websites in one place, set alerts for deadlines, and avoid missing out on opportunities.",
    technologies: ["Chrome Extension"],
    githubLink: "https://github.com/sauravsable/AlertSaveJob",
    demoLink: "",
    image: "/projects/alertsavejob.png",
  },
  {
    title: "Jee Mains College Predictor",
    description:
      "A data-driven web app that predicts potential colleges for students based on their JEE Mains rank and score. It uses machine learning techniques like Linear Regression with Pandas and NumPy, and provides predictions through a clean UI hosted on PythonAnywhere.",
    technologies: [
      "Python",
      "Pandas",
      "Numpy",
      "Linear Regression",
      "HTML",
      "CSS",
    ],
    githubLink: "https://github.com/sauravsable/college-Predictor.git",
    demoLink: "https://collegepredictor.pythonanywhere.com/",
    image: "/projects/collegepredictor.png",
  },
  {
    title: "RecordMate",
    description:
      "A digital record management system that helps users store, manage, and search their documents in a centralized platform. Designed with a simple React UI and REST APIs to ensure quick and efficient record retrieval.",
    technologies: ["ReactJs", "REST APIs"],
    githubLink: "https://github.com/sauravsable/recordmate.git",
    demoLink: "https://recordmate.vercel.app",
    image: "/projects/recordmate.png",
  },
];
