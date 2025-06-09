import React from "react";
import one from "../image/1.png"; 
import three from "../image/3.png"; 
import four from "../image/4.png"; 
import five from "../image/5.png"; 
import six from "../image/6.png";
import seven from "../image/7.png"
import eight from "../image/8.png"; 
import nine from "../image/9.png";
import ten from "../image/10.png"; 
import eleven from "../image/11.png"; 
import twelve from "../image/12.png"; 
import thirteen from "../image/13.png"; 
import fourteen from "../image/14.png"; 
import fifteen from "../image/15.png"; 
import sixteen from "../image/16.png"; 
import seventeen from "../image/17.png"; 
import eighteen from "../image/18.png"; 
import nineteen from "../image/19.png"; 
import twenty from "../image/20.png"; 
import twentyone from "../image/21.png"; 
import twentysix from "../image/26.png"; 
import twentyseven from "../image/27.png"; 
import twentyeight from "../image/28.png"; 
const CoreTeams = () => {
 const team = [
    {  
     
      image: one,
    },
    {     
      
      image: three,
    },
    {    
      
      image: four,
    },
    {
            
      image: five,
    },
    {
      
      image: six,
    },
    {image:seven},
    {image:eight},
    {image:nine},
    {image:ten},
    {image:eleven},
    {image:twelve},
    {image:thirteen},
    {image:fourteen},
    {image:fifteen},
    {image:sixteen},
    {image:seventeen},
    {image:eighteen},
    {image:nineteen},
    {image:twenty},
    
    {image:twentysix},
    
  ];
    
  return (
    <>
      {" "}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-accent-50 ">
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
                  <div className="mb-5 w-40 h-40 rounded-full overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-primary-200 to-accent-200">
                    <img
                      src={member.image}
                      
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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
