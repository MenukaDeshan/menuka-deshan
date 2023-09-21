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
    tag: ["All", "React"],
    gitUrl: "https://menuka-deshan.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CyberSecurity Website",
    description: "Blogs and videos about cybersecurity",
    image: "/images/projects/project2.png",
    tag: ["All", "HTML"],
    gitUrl: "https://cybersec-drab.vercel.app/",
    previewUrl: "/",
  },
  {/** 
  {
    id: 3,
    title: "3D Website",
    description: "Threejs test",
    image: "/images/projects/project3.png",
    tag: ["All", "React"],
    gitUrl: "https://deshan-v1.vercel.app/",
    previewUrl: "/",
  },*/},
  {
    id: 4,
    title: "The Closet",
    description: "Ecommerce Clothing Website",
    image: "/images/projects/project4.png",
    tag: ["All", "HTML"],
    gitUrl: "https://menukadeshan.github.io/TheCloset/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sigiriya 3D-Lens",
    description: "Sigiriya 3d website landing page using html/css/js",
    image: "/images/projects/project5.png",
    tag: ["All", "HTML"],
    gitUrl: "https://menukadeshan.github.io/3d-Lens/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Sigiriya Parallax",
    description: "Sigiriya Parallax website landing page",
    image: "/images/projects/project6.png",
    tag: ["All", "HTML"],
    gitUrl: "https://menukadeshan.github.io/Sigiriya-parallax/",
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
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML"
          isSelected={tag === "HTML"}
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
