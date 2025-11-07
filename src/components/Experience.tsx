import { useRef } from "react";
import { Briefcase, Award } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const skills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Git", level: 75 },
    { name: "Flask", level: 70 },
    { name: "JavaScript", level: 65 },
    { name: "React", level: 50 },
    // { name: 'Tailwind CSS', level: 95 },
  ];

  const experiences = [
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "Feb 2025 – Mar 2025",
      description:
        "Developed a one-time redeemable QR code system integrated with a company’s loyalty program. Implemented real-time validation, live database tracking, and “QR Expired” logic for enhanced security. Hosted the project using Supabase and Vercel for dynamic features.",
      icon: Briefcase,
    },
    {
      title: "AI & Software Projects",
      company: "Independent Work",
      period: "2023 – Present",
      description:
        "Worked on multiple AI and software projects including a GAN-based Text-to-Image Model, an agentic AI news platform (DevPulse), and a SQL-based Port Management System.",
      icon: Briefcase,
    },
    {
      title: "Computer Engineering Student",
      company: "Veermata Jijabai Technological Institute (VJTI), Mumbai",
      period: "2023 – 2027",
      description:
        "Pursuing B.Tech in Computer Engineering. Focused on Artificial Intelligence, Machine Learning, and Software Development.",
      icon: Award,
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-sora mb-4 text-gray-900 dark:text-white">
            Experience & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold font-sora mb-8 text-gray-900 dark:text-white">
              Experience
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-cyan-500"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className={`relative pl-12 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                      <exp.icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h4 className="text-xl font-bold font-sora text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold font-sora mb-8 text-gray-900 dark:text-white">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 50}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${500 + index * 50}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-cyan-50 dark:from-primary-900/20 dark:to-cyan-900/20 rounded-xl">
              <h4 className="font-bold font-sora text-gray-900 dark:text-white mb-3">
                Other Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Supabase",
                  "Vercel",
                  // "Docker",
                  "AWS",
                  "MongoDB",
                  // "Figma",
                  // "Next.js",
                  "MariaDB",
                  "OpenVINO",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
