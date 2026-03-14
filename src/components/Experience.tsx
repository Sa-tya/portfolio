"use client";

import { motion } from "framer-motion";

type ExperienceEntry = {
  title: string;
  company: string;
  type: string;
  dateRange: string;
  location: string;
  start: string;
  end: string;
  description: string[];
  skills: string[];
};

const experiences: ExperienceEntry[] = [
  {
    title: "Backend Developer",
    company: "Trendence Inc.",
    type: "Full-time",
    dateRange: "Jul 2025 – Present",
    location: "Bengaluru, Karnataka, India · Hybrid",
    start: "Jul 2025",
    end: "Present",
    description: [
      "Managing Data  infrastructure using Spring Boot, Angular & Azure.",
    ],
    skills: ["Spring Boot", "Angular", "Azure", "Kubernetes", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Reverie Language Technologies",
    type: "Full-time",
    dateRange: "Nov 2024 – Jun 2025",
    location: "Bengaluru, Karnataka, India · Hybrid",
    start: "Nov 2024",
    end: "Jun 2025",
    description: [
      "API optimization in Node.js.",
      "UI enhancements in Next.js.",
    ],
    skills: ["Next.js", "Node.js", "MongoDB", "TypeScript", "REST APIs"],
  },
  {
    title: "Software Engineer",
    company: "TechCompiler Data Systems",
    type: "Full-time",
    dateRange: "Apr 2022 – Oct 2024",
    location: "Noida, Uttar Pradesh, India · On-site",
    start: "Apr 2022",
    end: "Oct 2024",
    description: [
      "Full stack development using Node.js, React.js, and MongoDB.",
      "Project deployment on AWS EC2 and AWS Lambda (Serverless).",
    ],
    skills: ["Node.js", "React.js", "MongoDB", "AWS", "Serverless"],
  },
];

function parseMonthYear(value: string) {
  if (value.trim().toLowerCase() === "present") return new Date();

  const [month, year] = value.split(" ");
  const monthIndex = [
    "jan","feb","mar","apr","may","jun",
    "jul","aug","sep","oct","nov","dec"
  ].indexOf(month.toLowerCase());

  return new Date(Number(year), monthIndex, 1);
}

function calculateMonths(start: string, end: string) {
  const startDate = parseMonthYear(start);
  const endDate = parseMonthYear(end);

  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = endDate.getMonth() - startDate.getMonth();

  return years * 12 + months + 1; 
}

function formatMonths(months: number) {
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remainder) parts.push(`${remainder} mo${remainder > 1 ? "s" : ""}`);
  return parts.join(" ") || "0 mo";
}

export default function Experience() {
  const colors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600",
    "from-rose-500 to-rose-600",
  ];

  const experiencesWithDuration = experiences.map((exp) => ({
    ...exp,
    durationMonths: calculateMonths(exp.start, exp.end),
  }));

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 lg:px-16 bg-black/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">Experience</h2>

        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-12">
            {experiencesWithDuration.map((exp, index) => {
              const color = colors[index % colors.length];

              return (
                <div key={`${exp.company}-${exp.title}`} className="relative">
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
                          {exp.title} <span>@ {exp.company}</span>
                        </h3>
                        <p className="text-sm" style={{color: "powderblue"}}>
                          {exp.dateRange} · {exp.location}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-400">Duration</p>
                        <p className="text-base font-semibold">{formatMonths(exp.durationMonths)}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      {exp.description.map((line) => (
                        <p key={line} className="text-sm text-gray-200">
                          • {line}
                        </p>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
