import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import teamPhoto from "../image/teams.png"; // Replace with your team image
import { Linkedin, Twitter } from "lucide-react";
import LeaderTeams from "@/components/Teams";
import CoreTeams from "@/components/CoreTeams";




const Teams = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20 md:pt-[3.5rem]">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-20 min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>

          {/* SVG tech lines */}
         

          {/* Glowing blobs */}
          <div className="absolute -left-32 top-1/4 w-80 h-80 bg-gradient-to-br from-primary-500 to-accent-500 opacity-10 blur-3xl animate-pulse"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary-300 to-white bg-clip-text text-transparent">
                    Meet Our Experts
                  </span>
                  <br />
                  <span className="text-white">The Core Team Behind Our Innovation</span>
                </h1>
                <p className="text-xl text-primary-200 max-w-2xl">
                  Our team is composed of passionate technologists, engineers, and innovators dedicated to building robust digital ecosystems.
                </p>
              </div>

              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                  <img
                    src={teamPhoto}
                    alt="Team discussion"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeaderTeams/>
        <CoreTeams/>
      </main>

      <Footer />
    </div>
  );
};

export default Teams;
