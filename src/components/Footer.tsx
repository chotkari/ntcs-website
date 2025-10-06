import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const controller = new AbortController();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/midas.prabesh@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email,
            _subject: "NTCS email subscription",
            _template: "box",
          }),
          signal: controller.signal,
        }
      );

      if (response.ok) {
        setStatus("✅ Thank you!");
        setEmail("");
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("Request aborted");
      } else {
        console.error(err);
        setStatus("⚠️ Failed to subscribe.");
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/home", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
  { name: "ERP System Development", slug: "erp" },
  { name: "Custom Software Development", slug: "custom-software" },
  { name: "IT Consulting & System Architecture", slug: "it-consulting" },
  { name: "System Integration", slug: "system-integration" },
  { name: "Technical Support", slug: "support" },
  { name: "Business Intelligence", slug: "bi" },
];


  return (
    <footer className="bg-primary-800 text-primary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 bg-secondary rounded-full mix-blend-overlay"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">NTCS</h3>
              <p className="text-primary-200 text-sm mt-1">
                New Tech Consultancy Services
              </p>
            </div>

            <p className="text-primary-300 leading-relaxed">
              Your trusted IT consultation partner. We specialize in innovation,
              cutting-edge software solutions, and digital transformation
              services.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/ntcs.software"
                className="w-9 h-9 bg-primary-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 group"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-4 h-4 text-primary-100 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/ntcs.software"
                className="w-9 h-9 bg-primary-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 group"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 text-primary-100 group-hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com/ntcs.software/"
                className="w-9 h-9 bg-primary-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 group"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4 text-primary-100 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-primary-300 hover:text-white transition-colors duration-200 flex items-start"
                    >
                      <span className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-primary-300 hover:text-white transition-colors duration-200 flex items-start"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/XHWsCA1ApEXD8Gb8A"
                target="_blank"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 " />
                  <address className="text-primary-300 hover:text-white not-italic">
                    Thapathali
                    <br />
                    Kathmandu, Nepal
                  </address>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+977-980-230-1091"
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                >
                  +977-980-230-1091
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@ntcs.com.np"
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                >
                  info@ntcs.com.np
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-primary-300">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-primary-600">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-white mb-3">
              Stay in Touch
            </h4>
            <p className="text-primary-300 mb-6 max-w-lg mx-auto">
              Leave your email to get occasional updates and announcements from NTCS.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center"
              aria-label="Stay in touch"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="md:flex-1 px-4 py-3 w-full sm:w-auto rounded-lg bg-primary-700 border border-primary-600 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 w-full sm:w-auto bg-accent hover:bg-accent-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Submit
              </button>

              {status && (
                <p className="text-sm text-center text-white sm:col-span-2">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-400 text-sm">
              &copy; {currentYear} NTCS. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-primary-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-primary-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>

              <button
                onClick={scrollToTop}
                className="w-9 h-9 bg-primary-700 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-primary-200 hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
