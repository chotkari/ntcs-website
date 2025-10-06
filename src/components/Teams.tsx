import React from "react"
import nabin from "../image/21.png"
import prabesh from "../image/26.png"
import bibek from "../image/27.png"
import madhu from "../image/28.png"
import bijay from "../image/bijaya-prasad-kuikel.png"
import om from "../image/om-shrestha.png"
import prakash from "../image/prakash-bhandari.png"
import pratish from "../image/Pratish Shakya.png"
import puncoz from "../image/puncoz-nepal.png"
import suman from "../image/suman.png"

const Teams = () => {
  const team = [
    {
      name: "Prakash Bhandari",
      position: "President",
      image: prakash,
      bio: "Under his leadership, the company focuses on delivering innovative and scalable digital solutions that address the evolving needs of businesses. His vision and guidance continue to drive NTCS toward growth, excellence, and meaningful impact in the digital landscape.",
    },
    {
      name: "Pratish Shakya",
      position: "Director of Brand and Strategy",
      image: pratish,
      bio: "Leads the company’s marketing vision with a strong focus on brand storytelling, digital transformation, and data-informed growth strategies. His work ensures that NTCS builds a clear and impactful presence across markets while staying aligned with the company’s long-term goals.",
    },
    {
      name: "Om Shrestha",
      position: "Director of Operations",
      image: om,
      bio: "He focuses on optimizing internal processes to ensure the company consistently meets client expectations, maintains a competitive edge, and drives sustainable growth. His operational leadership plays a key role in aligning day-to-day execution with the company’s strategic objectives.",
    },
  ]
  const techteams = [
    {
      name: "Bijaya Prasad Kuikel",
      position: "Full Stack Software Architect",
      image: bijay,
      bio: "Based in Tokyo, Japan, with over seven years of experience, he has led enterprise-level development for companies such as Mercari, Proshore, and Smartmobe. His expertise spans PHP, Laravel, Vue, React, and modern DevOps practices. Bijaya has played key roles in optimizing microservices and restructuring large codebases to improve performance and scalability. Beyond his technical work, he is a passionate mentor, speaker, and active contributor to the tech community.",
    },
    {
      name: "Madhu Sudhan Subedi",
      position: "Backend Engineer & Agile Evangelist",
      image: madhu,
      bio: "Madhu Sudhan is a Backend Engineer and Agile Evangelist with a strong focus on delivering value through iterative development. He has worked with global teams at Monotype’s UBA Solutions and Hivelocity Inc. Japan, where he led data migrations, large-scale AWS transitions, and security upgrades for major e-commerce platforms. As an Agile coach, instructor, and content creator, Madhu actively promotes clean code, collaboration, and technical excellence within the developer community.",
    },
    {
      name: "Pankaj Kumar Nepal",
      position: "Senior Application Engineer & System Architect",
      image: puncoz,
      bio: "A leader in software transformation, Pankaj heads architecture at Rakuten Group Inc., Japan. He specializes in reengineering monolithic systems into microservices, managing Kubernetes-based CI/CD pipelines, and enabling scalable Kafka integrations. His experience at Jobins Co. Ltd. and YoungInnovations covers both backend infrastructure and team development, making him a key figure in driving technical excellence and scalable system design.",
    },
    {
      name: "Nabin Neupane",
      position: "Consultant – Associate Technical Lead",
      image: nabin,
      bio: "With nearly a decade of experience in mobile and web application development, Nabin Neupane is a seasoned expert in React, React Native, and JavaScript. Known for delivering scalable, intuitive applications, Nabin has led high-impact projects for both global brands and local enterprises. As a team lead and developer, he brings deep technical expertise and agile leadership to every project.",
    },
    {
      name: "Bibek Lamichhane",
      position: "ERP Consultant – NTCS",
      image: bibek,
      bio: "Bibek brings over 7 years of specialized experience working with Odoo ERP across diverse industries, including e-commerce, hydro, and agriculture. He played a lead role in the implementation of Odoo for Jeevee, one of Nepal’s leading e-commerce platforms, tailoring modules to support complex logistics and regulatory standards",
    },
    {
      name: "Prabesh Dahal",
      position: "Director of Engineering",
      image: prabesh,
      bio: "A visionary engineering leader known for driving innovation across software development, infrastructure, and product delivery. As a Director of Engineering, this individual combines deep technical expertise in full-stack development and cloud architecture with a passion for mentoring teams and scaling engineering operations. They have led cross-functional teams in both startup and enterprise settings, consistently delivering scalable, high-performance solutions aligned with business goals.",
    },
    {
      name: "Suman Paudel",
      position: "NTCS representative in Japan",
      image: suman,
      bio: "With over 12 years of experience living and working in Japan, he brings deep expertise in financial systems and platform technologies. Currently working at MetaQuotes Japan, a global leader in trading platforms, Suman has a strong background in programming, technical documentation, system integration, and project management. His experience spans credit card platforms, broker systems, and liquidity provider infrastructures, giving him a well-rounded understanding of complex financial technologies. Fluent in Japanese and well-versed in the latest systems, he plays a key role in bridging cross-cultural and technical collaboration between Japan and Nepal.",
    },
  ]

  return (
    <>
      {" "}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                Meet The Visionaries
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Leadership Team
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                At NTCS, our strength lies in the people behind the technology.
                We are a team of experienced professionals, passionate
                innovators, and strategic thinkers who bring a shared vision of
                digital excellence to life.
              </p>
            </div>

            {/* Team grid centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col items-center"
                >
                  <div
                    className="mb-5 w-40 h-40 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-primary-200 to-accent-200">
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
                    <p className="text-primary font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
                Engineering Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Our Technical Pillars
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                At NTCS, our strength lies in the hands of exceptional talent.
                Meet the core engineers who lead our technology vision—each
                bringing global experience, innovation, and a deep commitment to
                building scalable and impactful digital solutions.
              </p>
            </div>

            {/* Team grid centered */}
            <div className="space-y-12 max-w-8xl mx-auto px-4">
              {techteams.sort((a, b) => a.name.localeCompare(b.name)).map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white shadow-sm rounded-xl p-6"
                >
                  <div
                    className="mb-5 w-40 h-40 rounded-2xl overflow-hidden border-2 border-white shadow-md bg-gradient-to-br from-primary-200 to-accent-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center md:text-left flex-1">
                    <h3 className="text-2xl font-semibold text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Teams
