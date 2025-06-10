import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Rocket, Eye, Star, Cpu } from "lucide-react";
import TeamColaboration from "../image/team-collaboration.jpg";
import seniorMentoring from "../image/senior-mentoring.png";
import programmerWorking from "../image/programmer-working.png";
import PairWorking from "../image/pair-working.jpg";
import collaborationOnComputer from "../image/collaboration-on-computer.png";

const About = () => {
  const values = [
    {
      icon: Rocket, // Dynamic action for Mission
      title: "Mission",
      description:
        "Empowering businesses with customized IT solutions that drive efficiency and digital transformation.",
      gradient: "from-blue-500 to-blue-700", // Using your primary blue
    },
    {
      icon: Eye, // Literal vision representation
      title: "Vision",
      description:
        "To be Nepal's leading tech partner for smart, secure digital solutions.",
      gradient: "from-primary-600 to-primary-800", // Darker brand blue
    },
    {
      icon: Star, // Universal excellence symbol
      title: "Excellence",
      description: "Highest standards of service with continuous improvement.",
      gradient: "from-amber-500 to-amber-700", // Warm accent
    },
    {
      icon: Cpu, // Tech-specific innovation
      title: "Innovation",
      description:
        "We embrace emerging technologies to solve complex challenges.",
      gradient: "from-emerald-500 to-emerald-700", // Complementary green
    },
  ];

  const journeyTimeline = [
    {
      year: "2018",
      event:
        "Founded NTCS with a vision to transform businesses through technology.",
    },
    {
      year: "2019",
      event:
        "Launched our first ERP system, revolutionizing operations for local businesses.",
    },
    {
      year: "2020",
      event:
        "Expanded our services to include cloud solutions and IT consulting.",
    },
    {
      year: "2021",
      event: "Achieved 50+ satisfied clients and 500+ successful projects.",
    },
    { year: "2022", event: "Opened our new office in Thapathali, Kathmandu." },
    {
      year: "2023",
      event: "Celebrated 5 years of innovation and client success.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20  md:pt-[3.5rem]">
        <section
          className="relative overflow-hidden pt-20 pb-20 flex items-center min-h-screen "
          id="about-hero"
          >
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
                    Innovating With
                  </span>
                  <br />
                  <span className="text-white">NTCS</span>
                </h1>
                {/* Subheadline */}
                <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
                  Your trusted IT consultation partner specializing in digital
                  transformation. We combine cutting-edge technology with
                  human-centric design to drive measurable business growth.
                </p>
              </div>

              {/* Image - Using your #2 (senior explaining) with tech overlay */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                  <img
                    src={TeamColaboration}
                    alt="Senior architect explaining infrastructure strategy"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Our Story
                  </span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-xl">
                <p className="text-gray-600 mb-6">
                  Founded in Kathmandu, Nepal, New Tech Consultancy Services
                  (NTCS) was established with a vision to empower businesses
                  through reliable, scalable, and forward-thinking digital
                  solutions. Since day one, we’ve been committed to helping
                  organizations harness the full potential of technology to
                  streamline operations, boost productivity, and accelerate
                  growth.
                </p>
                <p className="text-gray-600 mb-6">
                  We specialize in ERP systems, custom software development, IT
                  consulting, and 24/7 technical support. But more than just
                  delivering services, we position ourselves as long-term
                  technology partners—deeply invested in the success of every
                  client. Each solution we provide is thoughtfully crafted to
                  meet the distinct needs of the organizations we serve,
                  ensuring real impact and measurable results.
                </p>
                <p className="text-gray-600">
                  At NTCS, we build more than systems—we build relationships.
                  With a team of skilled developers, engineers, and consultants,
                  we work closely with clients in a spirit of trust,
                  transparency, and collaboration. Our goal is simple: to turn
                  your vision into reality through technology that performs,
                  evolves, and endures.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Values */}

        <section className="py-20 bg-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Core Principles
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              The foundation of everything we deliver
            </p>
          </div>

          {/* Mentorship Image Banner (Image #1) */}
          <div className="container mx-auto px-4 mb-16">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={seniorMentoring} // Your image #1
                alt="Senior developer mentoring junior team members"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "400px" }}
              />
              <div className="bg-white p-6 text-center">
                <p className="text-lg italic text-gray-700">
                  "We grow together through continuous knowledge sharing"
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="values-card bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-100 relative group"
                >
                  {/* Value Icon */}
                  <div
                    className={`values-card__icon-container w-16 h-16 rounded-xl mb-5 mx-auto bg-gradient-to-r ${value.gradient} 
                  flex items-center justify-center 
                  group-hover:rotate-[15deg] transition-transform duration-500`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value Content */}
                  <h3 className="text-xl font-bold text-center mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Image Row at Bottom */}
          <div className="container mx-auto px-4 mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={programmerWorking} // Your image #3 or #7
              alt="Developer focused on work"
              className="rounded-lg shadow-md h-48 w-full object-cover"
            />
            <img
              src={collaborationOnComputer} // Your image #10
              alt="Team working together"
              className="rounded-lg shadow-md h-48 w-full object-cover hidden md:block"
            />
            <img
              src={PairWorking} // Your image #5
              alt="Pair programming"
              className="rounded-lg shadow-md h-48 w-full object-cover"
            />
          </div>
        </section>
        
      </main>
      {/* Our Journey Timeline - Refined */}
     <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-5">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Our Journey
        </span>
      </h2>
      <p className="text-xl text-gray-600">
        Key milestones in our story of growth and innovation.
      </p>
    </div>

    {/* Center the timeline container */}
    <div className="flex flex-col items-center space-y-6">
      {journeyTimeline.map((item, index) => (
        <div
          key={index}
          className="flex w-full max-w-8xl group"
        >
          <div className="flex-shrink-0 w-16 pr-4 text-right">
            <div className="text-lg font-medium text-blue-500">
              {item.year}
            </div>
          </div>
          <div className="relative bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-400">
            <p className="text-gray-700">{item.event}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default About;
