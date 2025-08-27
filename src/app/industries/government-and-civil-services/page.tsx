// app/industries/government/page.tsx
"use client";

import IndustryTemplate from "@/components/layout/industries/IndustryTemplate";

export default function GovernmentPage() {
  return (
    <IndustryTemplate
      industryName="Government & Civil Services"
      tagline="Transforming governance and public service delivery with digital intelligence."
      heroImage="/images/industries/government.jpg"
      overview={`Government and civil service organizations are under pressure to deliver transparency, efficiency, and citizen-focused solutions. 
      LambdaTech AI provides digital strategies that modernize service delivery, strengthen security, and enhance decision-making.`}
      challenges={[
        {
          title: "Legacy Systems",
          description: "Outdated technology holding back modernization efforts.",
          icon: "🖥️",
        },
        {
          title: "Citizen Demands",
          description: "Meeting the evolving needs of digitally aware populations.",
          icon: "📱",
        },
        {
          title: "Security Concerns",
          description: "Protecting sensitive government data from cyber threats.",
          icon: "🔒",
        },
        {
          title: "Data Management",
          description: "Breaking silos to enable smarter decision-making.",
          icon: "📊",
        },
      ]}
      services={[
        {
          id: "it-infrastructure",
          title: "IT Infrastructure & Operations",
          description:
            "Delivering secure and reliable government IT systems for critical services.",
          image: "/images/services/it-infrastructure.jpg",
        },
        {
          id: "architecture-modernization",
          title: "Architecture & Modernization",
          description:
            "Upgrading legacy platforms to agile, secure, and scalable architectures.",
          image: "/images/services/architecture.jpg",
        },
        {
          id: "data-ai",
          title: "Data & AI",
          description:
            "Driving evidence-based policies and citizen engagement through insights.",
          image: "/images/services/data-ai.jpg",
        },
      ]}
    />
  );
}
