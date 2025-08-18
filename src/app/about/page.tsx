"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";
import { aboutDescription } from "../../contents/staticData";

import { skills } from "@/contents/skills";
import { education } from "@/contents/education";
import { experience } from "@/contents/experience";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          {aboutDescription}
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                variants={fadeInUp}
                {...cardHover}
              >
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <ul className="text-secondary space-y-2">
                  {skill.skills.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">{item.role}</h3>
              <p className="text-primary mb-2">{item.company}</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                {item.work.map((workitem, index) => (
                  <li key={index} className="list-none">{workitem}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mb-4"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <h3 className="text-xl font-semibold mb-2">{item.branch}</h3>
              <p className="text-primary mb-2">{item.college}</p>
              <p className="text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
