import React from "react";

const CoreTeams = () => {
 const team = [
    {
      name: 'Apple Ball',
     
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
    {
      name: 'Apple Ball',
      
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
    {
      name: 'Apple Ball',
      
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      name: 'Apple Ball',
      
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      name: 'Apple Ball',
      
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    }
  ];
    
  return (
    <>
      {" "}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary-50 to-accent-100 ">
        <div className="container mx-auto px-4 ">
          <div className="max-w-8xl mx-auto">
            {/* Section header with professional spacing */}
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Core Team
                </span>
              </h2>
              <div className="flex justify-center">
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Our skilled and dedicated professionals bring expertise across development, support, design, testing, and consulting.
                </p>
              </div>
            </div>

            {/* Team grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center"
                >
                  <div className="mb-5 w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="px-2">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {member.name}
                    </h3>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreTeams;
