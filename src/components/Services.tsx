import React, { useEffect, useRef, useState } from 'react';
import { 
  Boxes, 
  Code2, 
  Cloud, 
  Target,
  Cpu,
  Database,
  ShieldCheck,
  Network
} from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<number>());
  const sectionRef = useRef<HTMLElement>(null);

  // Enhanced intersection observer with staggered delays
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = parseInt(element.dataset.index || '0');
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]));
            }, index * 150); // Staggered delay
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card-container');
    cards?.forEach((card, index) => {
      card.setAttribute('data-index', index.toString());
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Boxes,
      title: 'ERP System Development',
      description: 'Custom-built ERP solutions to streamline and automate business operations across departments.',
      features: ['Custom workflows', 'Real-time analytics', 'Multi-department integration']
    },
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business needs and workflows.',
      features: ['Bespoke applications', 'Legacy system modernization', 'API integrations']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Seamless integration of Cloud infrastructure and applications for optimal performance.',
      features: ['AWS/Azure/GCP', 'Migration services', 'Hybrid cloud solutions']
    },
    {
      icon: Target,
      title: 'IT Consulting',
      description: 'Strategic guidance to align technology with your business objectives.',
      features: ['Digital transformation', 'Tech stack evaluation', 'Roadmapping']
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-4">
        {/* Enhanced Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
          <h2 
            id="services-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Core Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive technology solutions that drive <span className="font-semibold text-primary">business growth</span> and <span className="font-semibold text-accent">operational excellence</span>.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id='service'>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`service-card-container transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <article className="service-card h-full group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  {/* Decorative gradient bar */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
                  
                  {/* Animated background element */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon with floating effect */}
                    <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-2 mt-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-accent mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Enhanced CTA */}
                    <div className="pt-6 mt-auto">
                      <a
                        href="#contact"
                        className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors duration-200 group"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        <span className="relative">
                          <span className="block group-hover:opacity-0 transition-opacity">Learn More</span>
                          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Get Started
                          </span>
                        </span>
                        <svg 
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100">
            <p className="text-xl text-gray-700">
              Need a custom solution for your business?
            </p>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg shadow hover:shadow-md transition-all transform hover:scale-105"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;