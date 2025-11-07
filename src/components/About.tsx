import { useRef } from "react";
import { Brain, BookOpen, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const interests = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Exploring and building intelligent systems that learn and adapt using data-driven techniques.",
    },
    {
      icon: Lightbulb,
      title: "Machine Learning",
      description:
        "Designing and training models that solve real-world problems efficiently and intelligently.",
    },
    {
      icon: BookOpen,
      title: "Reading & Problem Solving",
      description:
        "Gaining insights through books and tackling challenging problems that improve logical thinking.",
    },
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl transform rotate-3"></div>
              <img
                src="public\image.jpg"
                alt="Mudit Jain"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold font-sora mb-6 text-gray-900 dark:text-white">
              Mudit Jain — Computer Engineering Student at VJTI, Mumbai
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Computer Engineering student from Mumbai,
              currently in my third year at VJTI. I love exploring how
              artificial intelligence and machine learning can be used to solve
              real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I’ve worked on projects involving GAN-based text-to-image
              generation, AI-powered platforms like DevPulse, and database
              management systems that simplify complex workflows. My curiosity
              drives me to learn, build, and create meaningful tech solutions
              every day.
            </p>

            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className={`flex items-start space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <interest.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
