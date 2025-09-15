"use client";

import { projects } from "@/contents/projects";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import ProjectCard from "./ProjectsCard";

interface ProjectsProps {
  title: string;
}

export default function Projects({ title }: ProjectsProps) {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          {...fadeInUp}
        >
          {title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
