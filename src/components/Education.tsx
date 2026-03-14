"use client";

import { motion } from "framer-motion";

type EducationEntry = {
  degree: string;
  institution: string;
  board?: string;
  duration: string;
  location?: string;
  highlights?: string[];
};

const education: EducationEntry[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    duration: "2022 – 2024",
    location: "Noida, Uttar Pradesh",
    highlights: ["Specialization in Software Engineering", "Projects in Web and Cloud"],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "College of Commerce Arts and Science (PPU)",
    duration: "2018 – 2021",
    location: "Patna, Bihar",
    highlights: ["Core subjects: Data Structures, DBMS, Web Development"],
  },
];

export default function Education() {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600",
    "from-rose-500 to-rose-600",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-8 lg:px-16 bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Education</h2>

        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const color = colors[index % colors.length];

              return (
                <div key={edu.institution} className="relative">
                  <span
                    className={`absolute -left-5 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color} ring-4 ring-black/40`}
                  />

                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`border border-white/10 rounded-xl p-6 shadow-sm bg-gradient-to-r ${color} bg-opacity-10`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {edu.degree}
                          <span> @ {edu.institution}</span>
                        </h3>
                        <p className="text-sm text-gray-700">
                          {edu.duration} {edu.location ? `· ${edu.location}` : ""}
                        </p>
                      </div>
                    </div>

                    {edu.highlights?.length ? (
                      <div className="mt-4 space-y-2">
                        {edu.highlights.map((line) => (
                          <p key={line} className="text-sm text-gray-200">
                            • {line}
                          </p>
                        ))}
                      </div>
                    ) : null}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
