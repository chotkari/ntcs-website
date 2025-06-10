import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import pairWorking from "../image/pair-working.jpg";
import { CheckCircle } from "lucide-react";
import {
  Boxes,
  Code2,
  Network,
  Merge,
  LifeBuoy,
  BarChart3,
  Filter,
} from "lucide-react";

const ServicesPage = () => {
   const location = useLocation();

  useEffect(() => {
    // Scroll to section with id from hash
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay ensures DOM is ready
      }
    }
  }, [location]);

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Network", "Development", "Support"];

  const services = [
    {
      slug: "erp",
      icon: Boxes,
      category: "Development",
      title: "ERP System Development",
      description:
        "Custom-built ERP solutions to streamline and automate business operations across departments.",
      features: [
        "Inventory Management",
        "HR & Payroll",
        "Finance & Accounting",
        "Sales & CRM",
      ],
    },

    {
      slug: "custom-software",
      icon: Code2,
      category: "Development",
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your unique business needs and workflows.",
      features: [
        "Requirement Analysis",
        "Agile Development",
        "Scalable Architecture",
        "Cross-Platform Support",
      ],
    },
    {
      slug: "it-consulting",
      icon: Network,
      category: "Network",
      title: "IT Consulting & System Architecture",
      description:
        "Expert guidance and strategic planning to build robust, scalable, and secure IT infrastructures.",
      features: [
        "Technology Assessment",
        "Architecture Design",
        "Cloud Strategy",
        "Infrastructure Optimization",
      ],
    },
    {
      slug: "system-integration",
      icon: Merge,
      category: "Development",
      title: "Systems Integration",
      description:
        "Seamless integration of diverse systems and applications to ensure smooth data flow and unified operations.",
      features: [
        "API Integration",
        "Data Synchronization",
        "Legacy System Integration",
        "Third-Party Services",
      ],
    },
    {
      slug: "support",
      icon: LifeBuoy,
      category: "Support",
      title: "Maintenance & Technical Support",
      description:
        "Reliable technical support and regular maintenance to keep your systems running smoothly and securely.",
      features: [
        "24/7 Support",
        "Bug Fixes",
        "System Updates",
        "Performance Tuning",
      ],
    },
    {
      slug: "bi",
      icon: BarChart3,
      category: "Development",
      title: "Data & Business Intelligence",
      description:
        "Transform raw data into actionable insights to drive smarter business decisions.",
      features: [
        "Data Warehousing",
        "Dashboards & Reporting",
        "Predictive Analytics",
        "ETL Processes",
      ],
    },
  ];

  const filteredServices =
    activeFilter === "All"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 md:pt-[3.5rem]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 flex items-center min-h-screen ">
          {/* Gradient background matching your style */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>

          {/* Animated tech elements */}
          <div className="absolute inset-0 overflow-hidden z-1">
           

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
                    Enterprise-Grade
                  </span>
                  <br />
                  <span className="text-white">IT Services</span>
                </h1>
                {/* Subheadline */}
                <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
                  Bespoke technology solutions designed to scale with your
                  business. From infrastructure to innovation - we engineer
                  competitive advantage.
                </p>
              </div>

              {/* Image - Using your #2 (senior explaining) with tech overlay */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                  <img
                    src={pairWorking}
                    alt="Senior architect explaining infrastructure strategy"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden">
          {/* Decorative tech elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-20 w-0.5 h-32 bg-gradient-to-b from-primary-500 to-transparent opacity-30"></div>
            <div className="absolute right-1/3 bottom-40 w-32 h-0.5 bg-gradient-to-r from-accent-500 to-transparent opacity-30"></div>
          </div>

          {/* Filter Section */}
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center">
                {/* Enhanced filter header */}
                <div className="flex items-center justify-center space-x-3 mb-8 group">
                  <div className="relative">
                    <Filter className="w-6 h-6 text-primary-500 group-hover:text-accent-500 transition-colors" />
                    <div className="absolute -inset-1 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                    Explore Service Categories
                  </span>
                </div>

                {/* Animated filter buttons */}
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                        activeFilter === category
                          ? "text-white shadow-lg"
                          : "text-gray-700 hover:text-primary-600 bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      {activeFilter === category && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 z-0"></span>
                      )}
                      <span className="relative z-10 flex items-center">
                        {category}
                        {activeFilter === category && (
                          <CheckCircle className="ml-2 w-4 h-4 text-white" />
                        )}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="container mx-auto px-4" id="service">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      id={service.slug}
                      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 overflow-hidden"
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Service header */}
                      <div className="relative z-10 mb-6">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-1 bg-gradient-to-br from-accent-200 to-primary-400 shadow-md">
                          <Icon className="w-8 h-8 text-white transform group-hover:rotate-6 transition-transform" />
                        </div>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3 group-hover:bg-accent/20 transition-colors">
                          {service.category}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      {/* Service content */}
                      <div className="relative z-10">
                        <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors">
                          {service.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors"
                            >
                              <div className="relative mr-2 flex-shrink-0">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full absolute group-hover:animate-ping opacity-0 group-hover:opacity-40"></div>
                                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Floating tech decor */}
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl -z-10"></div>
        </section>
      </main>
      <IndustriesWeServe />
      <Footer />
    </div>
  );
};

export default ServicesPage;
