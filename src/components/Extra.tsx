import React from "react";

const Extra = () => {
  return (
    <section className="relative overflow-hidden mt-16 bg-gradient-to-br from-primary-400 to-accent-100 py-16 px-4">
      {/* Subtle animated background elements (optional) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white animate-float-delay"></div>
      </div>

      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto transform transition-all hover:shadow-xl hover:-translate-y-1">
        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          Need <span className="text-accent-500">Custom IT Solutions</span>?
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg text-center">
          Every business is unique. Let's co-create a tailored IT strategy that 
          aligns perfectly with your requirements and budget constraints.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-primary px-8 py-3 rounded-lg font-medium transition-all 
                      hover:shadow-md hover:bg-primary-600 focus:ring-2 focus:ring-primary-300
                      flex items-center justify-center gap-2"
            aria-label="Get custom quote"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            Get Custom Quote
          </a>
          
          <a
            href="tel:+977-980-230-1091"
            className="btn-secondary px-8 py-3 rounded-lg font-medium transition-all 
                      hover:shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-gray-300
                      flex items-center justify-center gap-2"
            aria-label="Call for consultation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Instant Consultation
          </a>
        </div>
      </div>

     
    </section>
  );
};

export default Extra;