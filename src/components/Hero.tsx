import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import HeroImage from "../image/hero-image.jpg";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create particles
    const particleCount = Math.floor(canvas.width / 10);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: `rgba(99, 102, 241, ${Math.random() * 0.2 + 0.1})`
    }));

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reset particles that go off screen
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current.querySelector('.parallax-element') as HTMLElement;
      
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="hero-section relative overflow-hidden pt-20 mt-16 lg:mt-0 min-h-screen flex items-center"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 z-0"></div>
      
      {/* Particle background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none z-1"
      />
      
      {/* Animated tech pattern */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          {/* Circuit lines */}
          <path 
            d="M200,100 L1000,100 M200,300 L1000,300 M200,500 L1000,500 M200,700 L1000,700"
            stroke="rgba(99,102,241,0.15)" 
            strokeWidth="2"
            strokeDasharray="10 5"
          />
          {/* Animated connection dots */}
          {[150, 350, 550, 750].map((y, i) => (
            <circle key={i} cx={300 + i * 100} cy={y} r="2" fill="#6366f1">
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i}s`} repeatCount="indefinite"/>
            </circle>
          ))}
        </svg>
        
        {/* Floating gradient blobs */}
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -right-40 top-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute right-20 bottom-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-10 blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="text-white space-y-8 relative">
              {/* Floating tech elements */}
              <div className="absolute -left-10 -top-10 w-20 h-20 rounded-full bg-accent/20 blur-md animate-float"></div>
              <div className="absolute right-0 bottom-20 w-16 h-16 rounded-full bg-primary/20 blur-md animate-float animation-delay-2000"></div>
              
              <div className="space-y-4 relative">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                  Leading 
                  <span className='bg-gradient-to-br from-primary-300 to-white bg-clip-text text-transparent'> IT Solutions </span>
                  <span className="block text-white">in Nepal</span>
                </h1>
              </div>

              <p className="text-xl text-primary-200 max-w-2xl leading-relaxed relative">
                At NTCS, we deliver high-quality technology that solves real problems, drives growth, 
                and builds lasting partnerships. From Nepal to the world, we're your trusted partner in digital transformation.
              </p>

              {/* Key benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                {[
                  "5+ Years Experience",
                  "24/7 Support",
                  "Certified Technicians",
                  "Competitive Pricing"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-white group-hover:text-primary transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="relative group inline-flex items-center justify-center px-8 py-4 rounded-lg overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:from-primary-500 group-hover:to-accent-400 transition-all"></span>
                  <span className="absolute inset-0.5 rounded-md bg-gradient-to-r from-primary-500 to-accent-400 group-hover:opacity-0 transition-opacity"></span>
                  <span className="relative z-10 text-white font-bold flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)] animate-ripple"></span>
                  </span>
                </a>
                
                <a
                  href="#services"
                  className="relative group inline-flex items-center justify-center px-8 py-4 rounded-lg overflow-hidden border-2 border-primary-400"
                >
                  <span className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                  <span className="relative z-10 text-primary-100 font-bold flex items-center group-hover:text-white transition-colors">
                    View Our Services
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="parallax-element">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 relative overflow-hidden shadow-2xl">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/50 rounded-br-2xl"></div>
                  
                  {/* Hero image with overlay */}
                  <div className="relative">
                    <img
                      src={HeroImage}
                      alt="Advanced computer technology and circuit boards"
                      className="w-full h-auto object-cover rounded-lg"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  </div>
                  
                  {/* Floating stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 text-center pb-6">
                    {[
                      { value: "500+", label: "Projects" },
                      { value: "5+", label: "Years" },
                      { value: "24/7", label: "Support" }
                    ].map((stat, index) => (
                      <div key={index} className="p-2">
                        <div className="text-2xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                        <div className="text-sm text-primary-200 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;