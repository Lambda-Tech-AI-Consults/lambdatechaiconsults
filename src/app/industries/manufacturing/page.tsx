// app/industries/manufacturing/page.tsx
"use client";

import IndustryTemplate from "@/components/layout/industries/IndustryTemplate";

export default function ManufacturingPage() {
  return (
    <IndustryTemplate
      industryName="Manufacturing"
      tagline="Driving efficiency and sustainability across production lines."
      heroImage="/images/industries/manufacturing.jpg"
      overview={`Manufacturing faces mounting pressure to become smarter, faster, and more sustainable. 
      At LambdaTech AI, we help manufacturers embrace digital transformation to optimize supply chains, 
      modernize operations, and reduce inefficiencies across the value chain.`}
      challenges={[
        {
          title: "Supply Chain Complexity",
          description: "Managing interconnected supply chains and mitigating risks from disruption.",
          icon: "🔗",
        },
        {
          title: "Operational Inefficiencies",
          description: "Eliminating production bottlenecks and minimizing downtime.",
          icon: "🏭",
        },
        {
          title: "Data Silos",
          description: "Integrating fragmented data across operations for smarter insights.",
          icon: "📊",
        },
        {
          title: "Sustainability Demands",
          description: "Reducing carbon footprint and waste across the value chain.",
          icon: "🌍",
        },
      ]}
      services={[
        {
          id: "digital-transformation",
          title: "Digital Transformation",
          description:
            "Helping manufacturers modernize processes and adopt industry 4.0 practices.",
          image: "/images/services/digital-transformation.jpg",
        },
        {
          id: "application-services",
          title: "Application Services",
          description:
            "Modernizing legacy applications and enabling smarter manufacturing workflows.",
          image: "/images/services/application-services.jpg",
        },
        {
          id: "it-infrastructure",
          title: "IT Infrastructure & Operations",
          description:
            "Ensuring reliable, scalable IT infrastructure to support industrial innovation.",
          image: "/images/services/it-infrastructure.jpg",
        },
      ]}
    />
  );
}
