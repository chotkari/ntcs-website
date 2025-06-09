
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Teams from '../components/Teams';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Extra from '@/components/Extra';
import IndustriesWeServe from '@/components/IndustriesWeServe';
import ClientTestimonials from '@/components/ClientTestimonials';
import OurProcesses from '@/components/OurProcesses';

const Index = () => {
  // Lazy loading for images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').substring(1);
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <Services />   
        <IndustriesWeServe/>
        <Extra/>     
          <Teams/>   
          <ClientTestimonials/>  
          <OurProcesses/>   
        <ContactForm />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
