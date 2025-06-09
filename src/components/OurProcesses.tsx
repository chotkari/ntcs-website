import React from "react";
import {
  ClipboardList,
  Lightbulb,
  Code,
  Server,
  Rocket,
  ArrowRight,
} from "lucide-react";

const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discovery / Planning",
      description:
        "Deep-dive sessions to understand your business goals, challenges, and technical requirements.",
      icon: ClipboardList,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      deliverables: ["Requirement Docs", "Tech Audit", "Project Plan"],
    },
    {
      id: 2,
      title: "Solution Design",
      description:
        "Architecting the optimal technology stack and user experience for your specific needs.",
      icon: Lightbulb,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      deliverables: ["Wireframes", "System Architecture", "Tech Specs"],
    },
    {
      id: 3,
      title: "Development",
      description:
        "Agile implementation with bi-weekly demos and 100% transparent communication.",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-50",
      deliverables: ["MVP", "Quality Reports", "Test Cases"],
    },
    {
      id: 4,
      title: "Deployment",
      description:
        "Seamless rollout with zero downtime and comprehensive staff training.",
      icon: Server,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      deliverables: ["Training Docs", "Maintenance Plan", "Handover"],
    },
    
  ];

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Proven Process
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            We follow a proven methodology to ensure successful project delivery
            and client satisfaction.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos="fade-up"
              >
                {/* Step Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                  }`}
                >
                  <div
                    className={`p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${step.bgColor} bg-opacity-30 backdrop-blur-sm`}
                  >
                    {/* Step Header */}
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full ${
                          step.bgColor
                        } flex items-center justify-center mr-4 animate-float animation-delay-${
                          index * 1000
                        }`}
                      >
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div>
                        <span className="inline-block text-xs font-semibold text-gray-500 mb-1">
                          Phase {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-5">{step.description}</p>

                    {/* Deliverables */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className={`w-5 h-5 ${step.color} mr-2 mt-0.5 flex-shrink-0`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step Number (for desktop) */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-primary text-primary font-bold text-2xl absolute left-1/2 transform -translate-x-1/2 shadow-lg">
                  {index + 1}
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden flex justify-center my-8">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary font-bold text-2xl flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-xl transition-all transform hover:scale-105 group"
          >
            Start Your Project
            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-gray-500">
            Typical engagement timeline: 4-8 weeks from discovery to MVP
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
