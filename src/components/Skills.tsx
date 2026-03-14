"use client";
import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiReact, SiRedux, SiAngular, 
         SiNextdotjs, SiNodedotjs, SiNestjs, SiMongodb, SiPostgresql, 
         SiMysql, SiRedis, SiAmazon, SiLinux, SiKubernetes } from "react-icons/si";
import { FaJava, FaCloud } from "react-icons/fa";
import { FaCode, FaDatabase } from "react-icons/fa";
import { BsBraces } from "react-icons/bs";

const skillCategories = {
  "Programming Languages": [
    { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
  ],
  "Cloud & DevOps": [
    { name: "Azure", icon: <FaCloud className="text-[#0078D4]" /> },
    { name: "AWS", icon: <SiAmazon className="text-[#FF9900]" /> },
    { name: "Linux", icon: <SiLinux className="text-white" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
  ],
  "Core Skills": [
    { name: "Data Structures", icon: <FaCode className="text-green-400" /> },
    { name: "Algorithms", icon: <BsBraces className="text-blue-400" /> },
    { name: "Design Patterns", icon: <FaCode className="text-purple-400" /> },
    { name: "DBMS", icon: <FaDatabase className="text-yellow-400" /> },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 lg:px-16 bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="group relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                             px-4 py-2 rounded-full border border-blue-500/20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                    
                    {/* Tooltip */}
                    {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                                  bg-black/80 text-white text-xs py-1 px-2 rounded 
                                  opacity-0 group-hover:opacity-100 transition-opacity
                                  whitespace-nowrap pointer-events-none">
                      {skill.name}
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 