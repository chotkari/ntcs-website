import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import future5g from "../image/future-5g.png";
import DigitalGovernanceinNepal from "../image/Digital-Governance-in-Nepal.webp"
import homeoffice from "../image/homeoffice.webp"

const articles = [
 {
  id: 1,
  title: "10 Essential Cybersecurity Tips for Small Businesses in Nepal",
  category: "Security",
  author: "Rajesh Shrestha",
  date: "2024-01-15",
  readTime: "5 min read",
  image:
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
  excerpt:
    "Learn the fundamental cybersecurity practices that every small business in Nepal should implement to protect their digital assets.",
  tags: ["Cybersecurity", "Small Business", "Protection"],
  content: [
    {
      type: "paragraph",
      text: "Cybersecurity threats are on the rise globally, and Nepal is no exception. Small businesses, often lacking dedicated IT teams, are increasingly becoming targets for cybercriminals. Implementing basic cybersecurity measures is no longer optional—it's essential for protecting your business, data, and customers.",
    },
    {
      type: "heading",
      text: "1. Use Strong Passwords and Two-Factor Authentication",
    },
    {
      type: "paragraph",
      text: "Encourage employees to use complex passwords and update them regularly. Enabling two-factor authentication (2FA) adds an extra layer of protection, especially for email, banking, and business platforms.",
    },
    {
      type: "heading",
      text: "2. Keep Software and Systems Updated",
    },
    {
      type: "paragraph",
      text: "Outdated software is one of the most common entry points for hackers. Ensure all systems, antivirus programs, and apps are regularly updated with the latest security patches.",
    },
    {
      type: "heading",
      text: "3. Educate Your Team About Phishing",
    },
    {
      type: "paragraph",
      text: "Many attacks begin with a simple phishing email. Train your employees to recognize suspicious links, attachments, and requests for sensitive information.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=400&fit=crop",
      alt: "Employee learning about cybersecurity",
      caption: "Staff training is a key defense against cyber threats.",
    },
    {
      type: "heading",
      text: "4. Install Reliable Antivirus and Firewall Software",
    },
    {
      type: "paragraph",
      text: "Invest in trusted antivirus and firewall solutions to monitor and defend your network against malware, ransomware, and intrusions.",
    },
    {
      type: "heading",
      text: "5. Back Up Your Data Regularly",
    },
    {
      type: "paragraph",
      text: "Always maintain regular backups of critical business data—both online and offline. In the event of a breach, you can restore systems without major disruption.",
    },
    {
      type: "quote",
      text: "In Nepal, small businesses are the backbone of the economy. Cybersecurity isn’t a luxury—it's a necessity for long-term growth.",
      author: "Cyber Bureau, Nepal Police",
    },
    {
      type: "heading",
      text: "6. Secure Wi-Fi Networks",
    },
    {
      type: "paragraph",
      text: "Change default router credentials and use WPA3 encryption where possible. Hide your SSID (network name) from public view if it’s not required.",
    },
    {
      type: "heading",
      text: "7. Limit Access Based on Roles",
    },
    {
      type: "paragraph",
      text: "Not every employee needs access to every system. Use role-based access control to reduce risk and exposure.",
    },
    {
      type: "heading",
      text: "8. Avoid Public Wi-Fi for Business Tasks",
    },
    {
      type: "paragraph",
      text: "Using public Wi-Fi in cafes or co-working spaces can expose your data. Use a virtual private network (VPN) when accessing sensitive business information remotely.",
    },
    {
      type: "heading",
      text: "9. Monitor Activity Logs",
    },
    {
      type: "paragraph",
      text: "Regularly review system and login activity logs. It helps identify suspicious behavior before it becomes a serious issue.",
    },
    {
      type: "heading",
      text: "10. Have a Response Plan",
    },
    {
      type: "paragraph",
      text: "Be prepared for the worst. Have a documented plan to respond to data breaches or cyberattacks, including who to contact and how to recover systems quickly.",
    },
    {
      type: "paragraph",
      text: "Cybersecurity doesn’t require massive budgets—just the right awareness and proactive steps. By implementing these essential practices, small businesses in Nepal can safeguard themselves and build customer trust in a digital-first world.",
    }
  ]
}
,
  {
    id: 2,
    title: "The Future of 5G Technology in Nepal: What to Expect",
    category: "Technology",
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    image: future5g,
    excerpt:
      "Exploring the upcoming 5G rollout in Nepal and its potential impact on businesses and consumers.",
    tags: ["5G", "Nepal", "Technology", "Future"],
    content: [
      {
        type: "paragraph",
        text: "Nepal's telecommunications landscape is on the brink of a major transformation with the impending introduction of 5G technology. This next-generation network promises to revolutionize how we connect and do business.",
      },
      {
        type: "heading",
        text: "Current Status of 5G in Nepal",
      },
      {
        type: "paragraph",
        text: "As of 2024, Nepal Telecom has completed initial 5G trials in Kathmandu valley, with commercial rollout expected in major cities by late 2024. The Nepal Telecommunications Authority (NTA) has allocated trial spectrum to telecom operators for testing purposes.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1598124146163-36819847286d?w=800&h=400&fit=crop",
        alt: "5G tower installation",
        caption: "Technicians working on 5G infrastructure in Kathmandu",
      },
      {
        type: "heading",
        text: "Key Benefits of 5G for Nepal",
      },
      {
        type: "list",
        items: [
          "Faster speeds (up to 100x faster than 4G)",
          "Lower latency (near real-time response)",
          "Higher capacity (supporting more connected devices)",
          "Enabling IoT (Internet of Things) applications",
          "Revolutionizing telemedicine and remote healthcare",
        ],
      },
      {
        type: "quote",
        text: "5G will be a game-changer for Nepal's digital economy, enabling innovations we haven't even imagined yet.",
        author: "Telecom Ministry Spokesperson",
      },
      {
        type: "heading",
        text: "Challenges in Implementation",
      },
      {
        type: "paragraph",
        text: "While the potential is enormous, Nepal faces several challenges in 5G deployment:",
      },
      {
        type: "list",
        items: [
          "High infrastructure costs",
          "Limited spectrum availability",
          "Need for skilled technicians",
          "Device compatibility issues",
          "Geographical challenges in rural areas",
        ],
      },
      {
        type: "heading",
        text: "What This Means for Businesses",
      },
      {
        type: "paragraph",
        text: "Businesses should start preparing for the 5G revolution by:",
      },
      {
        type: "list",
        items: [
          "Assessing their current digital infrastructure",
          "Training staff on new technologies",
          "Exploring IoT applications for their industry",
          "Partnering with tech providers for solutions",
          "Budgeting for necessary upgrades",
        ],
      },
      {
        type: "paragraph",
        text: "The full impact of 5G may take several years to materialize, but forward-thinking businesses that prepare now will gain a significant competitive advantage.",
      },
    ],
  },
  {
  id: 3,
  title: "Setting Up a Secure Home Office Network",
  category: "Networking",
  author: "Amit Patel",
  date: "2024-01-05",
  readTime: "6 min read",
  image:
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
  excerpt:
    "A comprehensive guide to creating a secure and efficient home office network setup for remote work.",
  tags: ["Home Office", "Network Security", "Remote Work"],
  content: [
    {
      type: "paragraph",
      text: "As remote work becomes the norm in Nepal and around the world, ensuring your home office network is secure and reliable is more important than ever. A poorly secured home network can leave you vulnerable to cyber threats, data breaches, and productivity issues.",
    },
    {
      type: "heading",
      text: "Why Home Network Security Matters",
    },
    {
      type: "paragraph",
      text: "Unlike office networks managed by IT professionals, home networks often lack enterprise-grade security. Hackers can exploit weak passwords, outdated firmware, or unsecured Wi-Fi to access your devices and sensitive information.",
    },
    {
      type: "heading",
      text: "1. Invest in a Good Router",
    },
    {
      type: "paragraph",
      text: "Your router is the heart of your home network. Invest in a reputable brand that supports modern security protocols like WPA3, automatic firmware updates, and strong parental controls if needed.",
    },
    {
      type: "image",
      src: homeoffice,
      alt: "Secure home office setup",
      caption: "Modern routers come with built-in security features ideal for remote workers.",
    },
    {
      type: "heading",
      text: "2. Change Default Router Settings",
    },
    {
      type: "paragraph",
      text: "Always change the default admin username and password. Rename your network (SSID) to something unique and disable remote access to your router unless absolutely necessary.",
    },
    {
      type: "heading",
      text: "3. Use a Separate Network for Work Devices",
    },
    {
      type: "paragraph",
      text: "Create a dedicated guest network or VLAN (if supported) for your work devices. This keeps them isolated from IoT devices or others that may be less secure.",
    },
    {
      type: "heading",
      text: "4. Use a VPN for Remote Access",
    },
    {
      type: "paragraph",
      text: "A Virtual Private Network (VPN) encrypts your internet traffic and masks your IP address. This is especially useful when accessing company resources or sensitive data from home.",
    },
    {
      type: "quote",
      text: "Setting up a secure home office isn't just for tech experts. With the right steps, anyone can protect their work and stay productive from anywhere.",
      author: "Amit Patel",
    },
    {
      type: "heading",
      text: "5. Keep Firmware and Software Updated",
    },
    {
      type: "paragraph",
      text: "Update your router firmware and all connected devices regularly. This ensures known vulnerabilities are patched, and your network remains protected.",
    },
    {
      type: "heading",
      text: "6. Enable Firewall and Antivirus Protection",
    },
    {
      type: "paragraph",
      text: "Enable the built-in firewall on your router and ensure your computer has a trusted antivirus program. These tools provide the first line of defense against intrusions and malware.",
    },
    {
      type: "heading",
      text: "7. Backup Your Work Regularly",
    },
    {
      type: "paragraph",
      text: "Use cloud storage or external hard drives to back up important documents. In case of ransomware or hardware failure, you’ll have access to your data.",
    },
    {
      type: "heading",
      text: "Optimizing for Performance",
    },
    {
      type: "paragraph",
      text: "Security is important, but so is speed. Place your router centrally, reduce interference from walls or electronic devices, and consider using Ethernet cables for critical devices.",
    },
    {
      type: "paragraph",
      text: "A secure and efficient home network is a must-have for today’s remote professionals. By taking these simple but effective steps, you can work confidently, knowing your digital workspace is protected.",
    }
  ]
},
{
  id: 4,
  title: "Cloud Migration Strategies for Nepali Businesses",
  category: "Technology",
  author: "Rajesh Shrestha",
  date: "2023-12-28",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  excerpt:
    "Best practices for migrating your business operations to the cloud while maintaining security and efficiency.",
  tags: ["Cloud Computing", "Migration", "Business Strategy"],
  content: [
    {
      type: "paragraph",
      text: "With the rapid digital transformation across Nepal, more businesses are exploring cloud computing as a way to scale operations, cut costs, and stay competitive. However, migrating to the cloud requires a strategic approach to avoid disruptions and ensure data integrity.",
    },
    {
      type: "heading",
      text: "Why Cloud Migration Matters",
    },
    {
      type: "paragraph",
      text: "Moving business operations to the cloud allows companies to be more agile, reduce infrastructure costs, and enhance security. In the context of Nepal, it opens new doors for SMEs and startups that lack access to large-scale data centers.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop",
      alt: "Cloud migration visualization",
      caption: "Migrating to the cloud can improve scalability and flexibility for Nepali businesses.",
    },
    {
      type: "heading",
      text: "Types of Cloud Migration Strategies",
    },
    {
      type: "list",
      items: [
        "**Rehost (Lift-and-Shift):** Moving applications to the cloud without major changes.",
        "**Refactor:** Rewriting parts of the application to better fit cloud infrastructure.",
        "**Revise:** Making moderate code changes before migration.",
        "**Rebuild:** Completely re-architecting the application from scratch for the cloud.",
        "**Replace:** Switching to a different cloud-native application or SaaS product.",
      ],
    },
    {
      type: "heading",
      text: "Steps to a Successful Cloud Migration",
    },
    {
      type: "list",
      items: [
        "✅ **Assess Your Current Infrastructure** – Know what you're migrating.",
        "✅ **Set Clear Business Goals** – Define what success looks like.",
        "✅ **Choose the Right Cloud Provider** – AWS, Azure, Google Cloud, or local providers like WorldLink Cloud.",
        "✅ **Develop a Migration Plan** – Decide what to migrate first (start with low-risk apps).",
        "✅ **Ensure Data Security & Compliance** – Encrypt sensitive data and follow NTA guidelines.",
        "✅ **Train Your Team** – Upskill your IT staff on cloud technologies.",
        "✅ **Test and Optimize Post-Migration** – Monitor performance and address issues quickly.",
      ],
    },
    {
      type: "quote",
      text: "Cloud migration isn't just a tech decision — it's a business transformation.",
      author: "Rajesh Shrestha",
    },
    {
      type: "heading",
      text: "Challenges for Nepali Businesses",
    },
    {
      type: "paragraph",
      text: "While the cloud offers many benefits, Nepali businesses often face unique challenges such as:",
    },
    {
      type: "list",
      items: [
        "Limited internet reliability in rural areas",
        "Lack of in-house cloud expertise",
        "Data sovereignty concerns",
        "Initial cost of migration planning",
      ],
    },
    {
      type: "heading",
      text: "Hybrid and Multi-Cloud Options",
    },
    {
      type: "paragraph",
      text: "Not all operations need to be 100% cloud-based. Many organizations in Nepal are adopting hybrid cloud (combination of on-premise and cloud) or multi-cloud (using services from multiple cloud providers) to optimize performance and cost.",
    },
    {
      type: "heading",
      text: "Final Thoughts",
    },
    {
      type: "paragraph",
      text: "Cloud migration is no longer optional — it's a strategic necessity for Nepali businesses looking to grow and compete in the digital age. With a thoughtful approach and the right partners, your migration journey can be smooth, secure, and successful.",
    }
  ]
},
{
  id: 5,
  title: "Common IT Mistakes That Cost Businesses Money",
  category: "Tips & Tricks",
  author: "Priya Sharma",
  date: "2023-12-20",
  readTime: "4 min read",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  excerpt:
    "Identify and avoid these costly IT mistakes that many businesses make without realizing their impact.",
  tags: ["Business Tips", "Cost Saving", "IT Management"],
  content: [
    {
      type: "paragraph",
      text: "In today’s digital-first world, a company’s IT strategy can either drive growth or silently drain resources. Many businesses in Nepal—especially small and medium enterprises—unknowingly make tech mistakes that lead to unnecessary expenses and missed opportunities.",
    },
    {
      type: "heading",
      text: "1. Ignoring Regular Data Backups",
    },
    {
      type: "paragraph",
      text: "Not having an automated and consistent backup system can result in major data loss after hardware failure, malware attacks, or accidental deletion. Regular offsite and cloud backups are a must.",
    },
    {
      type: "heading",
      text: "2. Using Outdated Software and Hardware",
    },
    {
      type: "paragraph",
      text: "Relying on outdated systems not only increases downtime but also makes your business more vulnerable to security threats. Many Nepali businesses continue using pirated or old software, unaware of the long-term costs.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=800&h=400&fit=crop",
      alt: "Outdated computer system",
      caption: "Old and unsupported systems can be a ticking time bomb for businesses.",
    },
    {
      type: "heading",
      text: "3. Weak Cybersecurity Practices",
    },
    {
      type: "paragraph",
      text: "Simple oversights like weak passwords, lack of two-factor authentication, or not training staff on phishing attacks can open doors for costly breaches. Investing in basic security tools and awareness training pays off.",
    },
    {
      type: "heading",
      text: "4. No IT Maintenance Plan",
    },
    {
      type: "paragraph",
      text: "Running your systems without proactive maintenance is like driving a car without oil checks. Scheduled updates, audits, and health checks prevent bigger issues down the road.",
    },
    {
      type: "list",
      items: [
        "Neglecting software updates",
        "Not monitoring server performance",
        "Ignoring error logs",
      ],
    },
    {
      type: "heading",
      text: "5. Overlooking Staff Training",
    },
    {
      type: "paragraph",
      text: "Even the best tools are ineffective if employees don’t know how to use them properly. Skipping digital literacy and basic tech training can lead to inefficiencies, frustration, and support costs.",
    },
    {
      type: "quote",
      text: "An untrained employee can do more damage than outdated software — especially in IT.",
      author: "Priya Sharma",
    },
    {
      type: "heading",
      text: "How to Avoid These Mistakes",
    },
    {
      type: "list",
      items: [
        "Conduct regular IT audits",
        "Invest in cybersecurity awareness",
        "Work with IT consultants for strategic planning",
        "Keep your systems up-to-date",
        "Automate routine IT tasks",
      ],
    },
    {
      type: "heading",
      text: "Final Thoughts",
    },
    {
      type: "paragraph",
      text: "Every rupee saved from preventing IT mishaps is a rupee earned. By being proactive and informed, Nepali businesses can avoid these common tech traps and channel their resources more effectively into growth and innovation.",
    }
  ]
},
{
  id: 6,
  title: "Nepal's Digital Transformation: Progress and Challenges",
  category: "Industry News",
  author: "Amit Patel",
  date: "2023-12-15",
  readTime: "6 min read",
  image:
    "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=600&h=400&fit=crop",
  excerpt:
    "An analysis of Nepal's journey towards digital transformation and the challenges that lie ahead.",
  tags: ["Digital Transformation", "Nepal", "Innovation"],
  content: [
    {
      type: "paragraph",
      text: "Nepal is undergoing a steady yet significant digital shift, with innovations across government services, businesses, education, and healthcare. As connectivity improves and digital literacy grows, the country is witnessing a wave of transformation that promises more inclusion and efficiency.",
    },
    {
      type: "heading",
      text: "Digital Progress in Key Sectors",
    },
    {
      type: "paragraph",
      text: "Several initiatives have driven Nepal’s digital advancement in recent years. From e-banking adoption to smart education platforms and e-governance portals, various sectors are embracing technology to bridge traditional gaps.",
    },
    {
      type: "list",
      items: [
        "Launch of Nagarik App for public services",
        "Growth of digital payment platforms like eSewa and Khalti",
        "Online learning adoption in urban and semi-urban areas",
        "Digital banking and mobile wallet integration",
      ],
    },
    {
      type: "image",
      src: DigitalGovernanceinNepal,
      alt: "Digital Nepal Framework",
      caption: "Government and private players are working towards 'Digital Nepal'.",
    },
    {
      type: "heading",
      text: "Opportunities of Digital Transformation",
    },
    {
      type: "paragraph",
      text: "Digitization brings numerous opportunities for Nepal’s economy. Small businesses are leveraging social media and e-commerce to reach larger markets, while digital platforms are empowering rural communities with access to education, telemedicine, and financial tools.",
    },
    {
      type: "list",
      items: [
        "Wider access to government services",
        "Efficient delivery of healthcare and education",
        "Entrepreneurship through online platforms",
        "Job creation in IT and digital services",
      ],
    },
    {
      type: "heading",
      text: "Challenges on the Road Ahead",
    },
    {
      type: "paragraph",
      text: "Despite the momentum, Nepal’s digital transformation faces several challenges. Infrastructure gaps, inconsistent connectivity in remote areas, limited digital literacy, and a shortage of skilled IT professionals continue to slow progress.",
    },
    {
      type: "list",
      items: [
        "Uneven internet access in rural areas",
        "Low awareness and trust in digital services",
        "Cybersecurity vulnerabilities",
        "Lack of clear policy implementation",
      ],
    },
    {
      type: "quote",
      text: "Digital transformation is not just about technology — it’s about accessibility, policy, and inclusion.",
      author: "Amit Patel",
    },
    {
      type: "heading",
      text: "What Needs to Be Done",
    },
    {
      type: "paragraph",
      text: "To ensure digital transformation benefits all Nepalis, public-private collaboration must focus on inclusive infrastructure, digital literacy campaigns, local content creation, and transparent regulations. Initiatives like Digital Nepal Framework need consistent execution with measurable outcomes.",
    },
    {
      type: "heading",
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "Nepal stands at a pivotal point in its digital journey. With the right investments and inclusive policies, the country can leap into a future where digital tools drive sustainable growth and empower every citizen—urban or rural, tech-savvy or beginner.",
    }
  ]
}


  // ... other articles with similar detailed content structure
];

const BlogPost = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (content) => {
    return content.map((section, index) => {
      switch (section.type) {
        case "paragraph":
          return (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {section.text}
            </p>
          );
        case "heading":
          return (
            <h2
              key={index}
              className="text-2xl font-semibold text-gray-900 mt-8 mb-4"
            >
              {section.text}
            </h2>
          );
        case "list":
          return (
            <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
              {section.items.map((item, i) => (
                <li key={i} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          );
        case "image":
          return (
            <div key={index} className="my-8 rounded-lg overflow-hidden">
              <img
                src={section.src}
                alt={section.alt}
                className="w-full h-auto object-cover"
              />
              {section.caption && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  {section.caption}
                </p>
              )}
            </div>
          );
        case "quote":
          return (
            <blockquote
              key={index}
              className="border-l-4 border-primary-500 pl-4 my-6 italic text-gray-600"
            >
              <p className="mb-2">"{section.text}"</p>
              {section.author && (
                <cite className="text-sm not-italic text-gray-500">
                  — {section.author}
                </cite>
              )}
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link
              to="/blog"
              className="flex items-center text-primary-600 hover:text-accent-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to all articles
            </Link>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center min-w-[120px]">
                <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                {new Date(article.date).toLocaleDateString()}
              </span>
              <span className="flex items-center min-w-[120px]">
                <User className="w-4 h-4 mr-2 text-primary-500" />
                {article.author}
              </span>
              <span className="flex items-center">{article.readTime}</span>
            </div>

            <div className="mb-10 rounded-xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="prose max-w-none">
              {renderContent(article.content)}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
