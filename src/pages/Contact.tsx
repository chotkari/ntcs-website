import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import contactImage from "../image/contact.png";

const Contact = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />

      <main className="pt-20 md:pt-[3.5rem] ">
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
                    Contact Us
                  </span>
                </h1>
                {/* Subheadline */}
                <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
                  Ready to transform your IT infrastructure? Get in touch with
                  our experts for a free consultation and personalized solution.
                </p>
              </div>

              {/* Image - Using your #2 (senior explaining) with tech overlay */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                  <img
                    src={contactImage}
                    alt="Senior architect explaining infrastructure strategy"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* Address */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Visit Our Office
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/XHWsCA1ApEXD8Gb8A"
                    target="_blank"
                  >
                    <p className="text-gray-600 hover:text-primary leading-relaxed">
                      Thapathali, Kathmandu
                      <br />
                      Nepal
                      <br />
                      Near Norvic Hospital
                    </p>
                  </a>
                </div>

                {/* Phone */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Call Us
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+977-980-230-1091"
                      className="hover:text-primary transition-colors"
                    >
                      +977-980-230-1091
                    </a>
                    <br />
                  </p>
                </div>

                {/* Email */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Email Us
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@ntcs.com.np"
                      className="hover:text-primary transition-colors"
                    >
                      info@ntcs.com.np
                    </a>
                    <br />

                    <a
                      href="https://ntcs.com.np/"
                      className="hover:text-primary transition-colors"
                      target="_blank"
                    >
                      www.ntcs.com.np
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center mb-16">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Business Hours
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Regular Hours
                    </h4>
                    <p className="text-gray-600">
                      Sunday - Friday: 09:00 AM - 6:00 PM
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 ">
                      Emergency Support
                    </h4>
                    <p className="text-gray-600">
                      24/7 Available
                      <br />
                      Call: +977-980-230-1091
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Follow Us
                </h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.facebook.com/ntcs.software"
                    target="_blank"
                    className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center hover:brightness-110 transition"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ntcs.software"
                    target="_blank"
                    className="w-12 h-12 bg-gradient-to-tr from-blue-700 to-indigo-900 text-white rounded-full flex items-center justify-center hover:brightness-110 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>

                  <a
                    href="https://www.instagram.com/ntcs.software/"
                    target="_blank"
                    className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:brightness-110 transition"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />

        {/* Map Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Find Us
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://maps.app.goo.gl/XHWsCA1ApEXD8Gb8A"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
