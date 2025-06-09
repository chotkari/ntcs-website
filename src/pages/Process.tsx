import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Palette, Rocket, CheckCircle } from 'lucide-react';
import working from "../image/process.png"

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const processRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: Search,
      title: 'Discovery & Analysis',
      subtitle: 'Understanding Your Needs',
      description: 'We begin by thoroughly understanding your business requirements, current IT infrastructure, and future goals.',
      details: [
        'Business needs assessment',
        'Current system evaluation',
        'Goal identification',
        'Resource analysis',
        'Risk assessment'
      ],
      duration: '1-2 weeks'
    },
    {
      icon: Palette,
      title: 'Design & Planning',
      subtitle: 'Crafting the Solution',
      description: 'Our experts design a comprehensive solution tailored to your specific requirements and budget.',
      details: [
        'Solution architecture',
        'Technical specifications',
        'Implementation timeline',
        'Resource allocation',
        'Testing strategy'
      ],
      duration: '1-3 weeks'
    },
    {
      icon: Rocket,
      title: 'Implementation & Delivery',
      subtitle: 'Bringing Ideas to Life',
      description: 'We execute the plan with precision, ensuring minimal disruption to your business operations.',
      details: [
        'Phased implementation',
        'Quality assurance',
        'Staff training',
        'System testing',
        'Go-live support'
      ],
      duration: '2-8 weeks'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const stepIndex = parseInt(element.dataset.step || '0');
            setActiveStep(stepIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = processRef.current?.querySelectorAll('.process-step');
    stepElements?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

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
                    Our Process
                  </span>
                  
                </h1>
                {/* Subheadline */}
                <p className="text-xl text-primary-200 max-w-2xl leading-relaxed">
                  A proven 3-step methodology that ensures successful project delivery 
                and exceeds client expectations every time.
                </p>
              </div>

              {/* Image - Using your #2 (senior explaining) with tech overlay */}
              <div className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-1 shadow-2xl overflow-hidden">
                  <img
                    src={working}
                    alt="Senior architect explaining infrastructure strategy"
                    className="w-full h-auto rounded-xl"
                  />
                </div>                
              </div>
            </div>
          </div>
        </section>
         

        {/* Process Overview */}
        <section className="py-20 bg-white" ref={processRef}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  How We Work
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our structured approach ensures transparency, quality, and timely delivery 
                  while keeping you informed every step of the way.
                </p>
              </div>

              {/* Process Steps */}
              <div className="space-y-20">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = activeStep >= index;
                  
                  return (
                    <div 
                      key={index}
                      data-step={index}
                      className={`process-step grid lg:grid-cols-2 gap-12 items-center ${
                        index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                      }`}
                    >
                      {/* Content */}
                      <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isActive ? 'bg-gradient-to-br from-primary-400 to-accent-200 text-white' : 'bg-gray-100 text-gray-400'
                          }`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-accent mb-1">
                              Step {index + 1} • {step.duration}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-primary">
                              {step.title}
                            </h3>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-primary mb-3">
                            {step.subtitle}
                          </h4>
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {step.description}
                          </p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-primary mb-4">What We Deliver:</h5>
                          <ul className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center ">
                                <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <div className={`relative bg-gray-50 rounded-2xl p-8 transition-all duration-500 ${
                          isActive ? 'bg-primary/5 border border-primary/20' : ''
                        }`}>
                          <div className="aspect-video bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
                            <Icon className={`w-16 h-16 transition-colors duration-500 ${
                              isActive ? 'text-primary' : 'text-gray-300'
                            }`} />
                          </div>
                          
                          {/* Progress indicator */}
                          <div className="mt-6">
                            <div className="flex justify-between text-sm text-gray-500 mb-2">
                              <span>Progress</span>
                              <span>{isActive ? '100%' : '0%'}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full transition-all duration-1000 ${
                                  isActive ? 'bg-primary w-full' : 'bg-gray-300 w-0'
                                }`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Process Works */}
        <section className="py-20 bg-gray-50 ">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Why Our Process Works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Proven Results</h3>
                  <p className="text-gray-600">500+ successful projects delivered using this methodology</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Client Satisfaction</h3>
                  <p className="text-gray-600">98% client satisfaction rate with our delivery process</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-200 to-primary-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">On-Time Delivery</h3>
                  <p className="text-gray-600">95% of projects delivered on time and within budget</p>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="contact/#contact"
                  className="btn-primary"
                >
                  Start Your Project Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
