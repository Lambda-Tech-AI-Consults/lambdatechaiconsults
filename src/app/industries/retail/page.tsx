// app/industries/retail/page.tsx
"use client";

import IndustryTemplate from "@/components/layout/industries/IndustryTemplate";

export default function RetailPage() {
  return (
    <IndustryTemplate
      industryName="Retail"
      tagline="Transforming customer experience through intelligence and agility."
      heroImage="/images/industries/retail.jpg"
      overview={`Retailers must adapt to evolving consumer behaviors and market disruptions. 
      At LAMBDATECH AI, we enable retailers to leverage data, automation, and cloud platforms 
      to build agile systems that drive growth and enhance customer engagement.`}
      challenges={[
        {
          title: "Changing Consumer Behavior",
          description: "Meeting the expectations of digital-first and experience-driven shoppers.",
          icon: "🛍️",
        },
        {
          title: "Omnichannel Demands",
          description: "Integrating online and offline channels for seamless customer experiences.",
          icon: "🌐",
        },
        {
          title: "Inventory Management",
          description: "Optimizing stock levels while reducing waste and shortages.",
          icon: "📦",
        },
        {
          title: "Data Utilization",
          description: "Using customer data to personalize engagement and build loyalty.",
          icon: "📈",
        },
      ]}
      services={[
        {
          id: "business-process-automation",
          title: "Business Process Automation",
          description:
            "Automating supply chain, inventory, and customer service processes for efficiency.",
          image: "/images/services/business-automation.jpg",
        },
        {
          id: "data-ai",
          title: "Data & AI",
          description:
            "Delivering personalization, recommendation engines, and predictive insights.",
          image: "/images/services/data-ai.jpg",
        },
        {
          id: "cloud-solutions",
          title: "Cloud Solutions",
          description:
            "Building scalable digital platforms to support omnichannel commerce.",
          image: "/images/services/cloud.jpg",
        },
      ]}
    />
  );
}
