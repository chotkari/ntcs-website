import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ClientTestimonials = () => {
  const testimonials = [
    
      {
        name: "Rita Shrestha",
        position: "Managing Director, Kathmandu Medical Suppliers",
        content:
          "NTCS ले ERP सिस्टम लागू गरेपछि हाम्रो सप्लाई चेनमा ४०% कुशलता आएको छ। अत्यन्त सन्तुष्ट!",
        rating: 5,
      },
      {
        name: "Sujan Maharjan",
        position: "IT Head, Gurukul Edutech",
        content:
          "Exceptional technical expertise and on-time project delivery. Truly a reliable team!",
        rating: 5,
      },
      {
        name: "Bikash Rana",
        position: "Operations Manager, Himalayan Garments",
        content:
          "कस्टम सफ्टवेयर समाधानले हाम्रो उत्पादन प्रक्रिया पूर्ण रूपमा डिजिटलाइज गरेको छ।",
        rating: 5,
      },
    
  ];
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                Client Voices
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by 100+ organizations across Nepal and beyond
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="card-gradient hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">
                      {testimonial.position}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimonials;
