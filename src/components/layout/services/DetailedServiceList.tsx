"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import {
  FaChartLine,      
  FaCogs,         
  FaRobot,          
  FaCloud,         
  FaHandshake,     
  FaDatabase,       
  FaLaptopCode,      
  FaNetworkWired,   
  FaSitemap,       
  FaLeaf,            
  FaChalkboardTeacher, 
  FaBoxes,           
} from "react-icons/fa";

type Service = {
  subtitle: string;
  description: string;
};

type ServiceGroup = {
  title: string;
  services: Service[];
  icon?: React.ReactNode;
};


const icons = [
  FaChartLine,      
  FaCogs,         
  FaRobot,          
  FaCloud,         
  FaHandshake,     
  FaDatabase,       
  FaLaptopCode,      
  FaNetworkWired,   
  FaSitemap,       
  FaLeaf,            
  FaChalkboardTeacher, 
  FaBoxes,           
];

const fullServices: ServiceGroup[] = [
  {
    title: "Digital Transformation",
    services: [
      {
        subtitle: "Digital Transformation Consulting",
        description:
          "Empowering businesses to adapt and thrive in the digital era through advanced technologies and innovative strategies.",
      },
      {
        subtitle: "Cloud Strategy, Architecture, and Migration",
        description:
          "Developing and implementing cloud strategies, designing cloud architectures, and managing cloud migrations to drive innovation and growth.",
      },
    ],
  },
  {
    title: "Application Services",
    services: [
      {
        subtitle: "End-to-End Application Modernization",
        description:
          "Enhancing operations, increasing efficiency, removing technical debt, and modernizing applications for future readiness.",
      },
      {
        subtitle: "Enterprise Application Management",
        description:
          "Leveraging automation and intelligent tooling to engineer, modernize, and manage enterprise applications with speed and efficiency.",
      },
    ],
  },
  {
    title: "Business Process Automation",
    services: [
      {
        subtitle: "Enhance Process Automation",
        description:
          "Combining business and process expertise with AI-enabled platforms to optimize business operations and drive value creation.",
      },
      {
        subtitle: "Business Process Services",
        description:
          "Innovating business operations through human and machine collaboration to transform operations and ensure relevance and growth.",
      },
    ],
  },
  {
    title: "Cloud Solutions",
    services: [
      {
        subtitle: "Cloud Integration and Management",
        description:
          "Integrating, automating, managing, and delivering cloud solutions to fuel innovation and growth.",
      },
      {
        subtitle: "Cloud Strategy, Architecture, and Migration",
        description:
          "Developing and implementing cloud strategies and architectures, and managing cloud migrations.",
      },
    ],
  },
  {
    title: "Consulting Services",
    services: [
      {
        subtitle: "Enterprise Process and Technology Consulting",
        description:
          "Leveraging industry expertise to help clients reimagine their organizations and turn big visions into practical realities.",
      },
      {
        subtitle: "Strategy Sourcing and Vendor Management",
        description:
          "Optimizing IT sourcing strategies and managing vendor relationships to ensure value and efficiency.",
      },
    ],
  },
  {
    title: "Data and AI",
    services: [
      { subtitle: "Data Management", description: "Organizing, accessing, and deriving insights from data while maintaining compliance and safeguarding sensitive information." },
      { subtitle: "Data Modernization", description: "Migrating legacy systems to a cloud-based architecture for agility and scalability." },
      { subtitle: "Data Strategy", description: "Aligning data strategy with business outcomes to transform organizations." },
      { subtitle: "Business Intelligence and Visualization", description: "Driving fast, accurate, fact-based decisions from personalized data for real business results." },
      { subtitle: "Artificial Intelligence", description: "Automating everyday tasks and enabling rapid, prescriptive decision-making through AI." },
    ],
  },
  {
    title: "Software Development and Modernization",
    services: [
      { subtitle: "Product Engineering", description: "Innovating, building, and optimizing software experiences through a well-orchestrated strategy focused on end-users and backed by technology." },
      { subtitle: "Delivery Modernization", description: "Initiating pilot projects, integrating modern tools like generative AI, and ensuring future readiness on an enterprise scale." },
      { subtitle: "Platform Engineering", description: "Creating, evolving, and operating core cloud-native systems to provide digital cores fit for tomorrow." },
    ],
    icon: "FaLaptopCode",
  },
  {
    title: "IT Infrastructure and Operations",
    services: [
      { subtitle: "IT Cost Optimization", description: "Implementing strategies to reduce IT costs while maintaining service quality and performance." },
      { subtitle: "IT Asset Management", description: "Managing IT assets to maximize value and minimize risk throughout their lifecycle." },
      { subtitle: "IT Business Operations", description: "Enhancing IT business operations to support overall business strategy and objectives." },
      { subtitle: "IT Service Management", description: "Ensuring efficient and effective delivery of IT services." },
    ],
    icon: "FaNetworkWired",
  },
  {
    title: "Architecture and Modernization",
    services: [
      { subtitle: "Business and Enterprise Architecture", description: "Developing and implementing business and enterprise architecture strategies to support business goals." },
      { subtitle: "Technology Architecture", description: "Designing technology architectures, including systems architecture, integration architecture (RPA and SOA), microservices, and API environments." },
      { subtitle: "Application Architecture", description: "Designing application architectures to support business requirements and technology strategies." },
      { subtitle: "Legacy Modernization", description: "Modernizing legacy systems to improve performance, reduce costs, and support future business needs." },
    ],
    icon: "FaSitemap",
  },
  {
    title: "Sustainability Services",
    services: [
      { subtitle: "Sustainability Advisory and Solutions", description: "Providing sustainability services to help organizations reduce their environmental footprint and achieve sustainability goals." },
      { subtitle: "ESG Reporting", description: "Automating ESG reporting, making it forward-looking and proactive, and building seamless connectivity and data exchange across stakeholders." },
    ],
    icon: "FaLeaf",
  },
  {
    title: "IT Training",
    services: [
      { subtitle: "IT Training", description: "Providing customized IT training solutions to upskill staff and enhance organizational capability." },
    ],
    icon: "FaChalkboardTeacher",
  },
  {
    title: "Procurement Services",
    services: [
      { subtitle: "Procurement Services", description: "Streamlining and optimizing the procurement lifecycle to ensure cost-effective and timely acquisitions." },
    ],
    icon: "FaBoxes",
  },
];

fullServices.forEach((group, index) => {
  group.icon = icons[index]
    ? icons[index]({ className: "text-[#00b34d] text-xl mr-2" })
    : null;
});

const DetailedServiceList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0C1F4A] mb-8 text-center">
          Our Full Services
        </h2>
        <div className="space-y-4 flex flex-row flex-wrap justify-evenly items-center">
          {fullServices.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-4 bg-gray-100 font-semibold text-[#0C1F4A] hover:bg-gray-200 rounded-t-lg flex items-center justify-between"
              >
                <div className="flex items-center">
                  {group.icon}
                  {group.title}
                </div>
                <FiChevronDown
                  className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <div className="overflow-hidden px-6 pb-4">
                    {group.services.map((service, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                        className="py-2 border-b border-gray-100"
                      >
                        <h4 className="text-lg font-semibold text-[#0C1F4A]">
                          {service.subtitle}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServiceList;
