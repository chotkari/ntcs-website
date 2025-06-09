import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink, Calendar, Users, Award } from "lucide-react";

import workingOffice from "../image/projects.jpg"
import Hrms from "../image/hrms-erp-solution.png"
import nrna from "../image/nrna-voting.png"
import chotcari from "../image/chotkari.png"
import kinmel from "../image/kinmel.png"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Enterprise",
    "Healthcare",
    "Education",
    "Government",
    "SME",
  ];

  const projects = [
    {
      title: "Modular HRMS ERP Solution",
      category: "Enterprise Software",
      client: "Confidential (HR Management)",
      year: "2023",
      image: Hrms, // Replace with actual image path
      description:
        "Comprehensive HR management system handling onboarding, attendance, payroll, and performance metrics.",
      technologies: ["Odoo", "Python", "PostgreSQL", "JavaScript"],
      results: [
        "90% process automation",
        "50% reduction in payroll errors",
        "Centralized employee database",
        "Real-time analytics dashboard",
      ],
      challenge:
        "Replacing manual HR processes with a unified digital solution across multiple departments.",
      solution:
        "Custom-built Odoo modules with automated workflows and integration with existing financial systems.",
    },
    {
      title: "NRNA Voting Platform",
      category: "E-Governance System",
      client: "Non-Resident Nepali Association (NRNA)",
      year: "2023",
      image: nrna, // Replace with actual image path
      description:
        "Secure voting system supporting global participation in NRNA elections, ensuring fairness and transparency.",
      technologies: ["Laravel", "MySQL", "Vue.js", "AWS"],
      results: [
        "100% secure vote encryption",
        "Real-time results visualization",
        "Scalable access for global users",
        "Full audit trail with role-based permissions",
      ],
      challenge:
        "Enabling secure, real-time online voting for a global organization without compromising data integrity.",
      solution:
        "Role-based Laravel system with encryption, audit logs, and administrative dashboards for election control.",
    },
    {
      title: "Chotkari",
      category: "AI-Powered News Aggregator",
      client: "Internal Project / Media Tech",
      year: "2023", // or update if different
      image: chotcari, // Replace with actual image path
      description:
        "An AI-powered Nepali news aggregator that delivers personalized and real-time content to users across platforms.",
      technologies: [
        "Laravel",
        "Flutter",
        "ReactJS",
        "VueJS",
        "PostgreSQL",
        "AWS",
      ],
      results: [
        "AI-based news categorization and curation",
        "Seamless user experience across mobile and web",
        "Multi-language content support",
        "Scalable architecture on AWS",
      ],
      challenge:
        "Creating a unified platform to deliver real-time, AI-curated news to diverse user bases with scalable infrastructure.",
      solution:
        "Developed using a micro-frontend approach with AI modules and multi-language support, hosted on scalable AWS infrastructure.",
    },
    {
      title: "KinnMel.com",
      category: "eCommerce Platform",
      client: "KinnMel Pvt. Ltd.",
      year: "2023", // or update if different
      image: kinmel, // Replace with actual image path
      description:
        "An end-to-end eCommerce platform that allows sellers to manage inventory, orders, and customers with real-time insights and analytics.",
      technologies: ["Python (Odoo)", "ReactJS", "React Native"],
      results: [
        "Mobile-first responsive UI",
        "Integrated payment and shipping modules",
        "ERP-powered backend with Odoo",
        "Seller and customer dashboards",
      ],
      challenge:
        "Delivering a scalable and flexible eCommerce solution that integrates inventory, payments, and customer management in real-time.",
      solution:
        "Built with Odoo for ERP functionality and ReactJS/React Native for a responsive frontend experience across devices.",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 md:pt-[3.5rem]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 h-[95vh] flex items-center">
          {/* Gradient background matching your style */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>

          {/* Animated tech elements */}
          <div className="absolute inset-0 overflow-hidden z-1">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 800"
              preserveAspectRatio="none"
            >
              <path
                d="M200,200 L1000,200 M200,400 L1000,400 M200,600 L1000,600"
                stroke="rgba(99,102,241,0.15)"
                strokeWidth="2"
                strokeDasharray="10 5"
              />
              {[250, 450, 650].map((y, i) => (
                <circle key={i} cx={300 + i * 150} cy={y} r="2" fill="#6366f1">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur={`${3 + i}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>

            {/* Floating blobs */}
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute -right-40 top-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="text-white space-y-8">
                {/* Headline with gradient accent */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary-300 to-white bg-clip-text text-transparent">
                    Our Projects
                  </span>
                </h1>
                {/* Subheadline */}
                <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
                  Discover how we've helped organizations across Nepal transform
                  their IT infrastructure and achieve digital excellence.
                </p>
              </div>

              {/* Image - Using your #2 (senior explaining) with tech overlay */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                  <img
                    src={workingOffice}
                    alt="Senior architect explaining infrastructure strategy"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "200+", label: "Happy Clients" },
                { value: "99.9%", label: "Uptime Guarantee" },
                { value: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg text-center hover:shadow-sm transition-shadow"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                  {/* Minimal decorative element */}
                  <div className="mt-4 mx-auto w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        {/* <section className="py-12 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-8">Browse by Industry</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeFilter === category
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-b from-primary-50 to-accent-50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.year}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {project.client}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">
                          Key Results:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.results.map((result, resultIndex) => (
                            <div
                              key={resultIndex}
                              className="flex items-center text-sm text-green-600"
                            >
                              <Award className="w-4 h-4 mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            Challenge:
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-2">
                            Solution:
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
