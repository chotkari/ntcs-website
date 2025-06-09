import React from 'react';
import { 
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  Factory,
  ShoppingCart
} from 'lucide-react';

const IndustriesWeServe = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: HeartPulse,
      description: "Digital solutions for medical facilities",
      features: ["EHR Systems", "Telemedicine", "Patient Management"],
      colorClass: "text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100"
    },
    {
      name: "Education",
      icon: GraduationCap,
      description: "Learning management systems",
      features: ["EdTech Platforms", "Student Portals", "Virtual Classrooms"],
      colorClass: "text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100"
    },
    {
      name: "Finance",
      icon: Landmark,
      description: "Secure financial applications",
      features: ["Banking Software", "Payment Gateways", "Risk Analysis"],
      colorClass: "text-green-600 border-green-200 bg-green-50 hover:bg-green-100"
    },
    {
      name: "Government",
      icon: Building2,
      description: "Public sector solutions",
      features: ["Citizen Portals", "Document Management", "Case Tracking"],
      colorClass: "text-amber-600 border-amber-200 bg-amber-50 hover:bg-amber-100"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Industrial automation systems",
      features: ["IoT Integration", "Supply Chain", "Quality Control"],
      colorClass: "text-red-600 border-red-200 bg-red-50 hover:bg-red-100"
    },
    {
      name: "Retail",
      icon: ShoppingCart,
      description: "E-commerce and POS systems",
      features: ["Omnichannel", "Inventory Management", "Customer Analytics"],
      colorClass: "text-indigo-600 border-indigo-200 bg-indigo-50 hover:bg-indigo-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Cross-Industry Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver specialized technology solutions adapted to the unique challenges of each sector.
          </p>
        </div>

        {/* Simplified Card Grid - No Flip Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className={`industry-card rounded-xl border-2 ${industry.colorClass} transition-all duration-300 hover:shadow-lg overflow-hidden`}
              >
                <div className="p-6 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-lg ${industry.colorClass.split(' ')[2]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-700 mb-4">{industry.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-200">
                    <details className="group">
                      <summary className="flex items-center cursor-pointer text-sm font-medium">
                        <span>Key Solutions</span>
                        <svg className="w-4 h-4 ml-1 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <ul className="mt-3 space-y-2 pl-2">
                        {industry.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default IndustriesWeServe;