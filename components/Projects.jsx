"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "This is a Next.js project",
    image: "/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://menuka-deshan.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CyberSecurity Website",
    description: "Blogs and videos about cybersecurity",
    image: "/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://cybersec-drab.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "3D Website",
    description: "Threejs test",
    image: "/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://deshan-v1.vercel.app/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="justify-center w-full h-auto px-20 pb-10 mb-24">
      <h2 className="py-4 mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-2">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;