// app/industries/public-sector/page.tsx
"use client";

import IndustryTemplate from "@/components/layout/industries/IndustryTemplate";

export default function PublicSectorPage() {
  return (
    <IndustryTemplate
      industryName="Public Sector"
      tagline="Empowering governments to deliver transparency, accountability, and citizen value."
      heroImage="/images/industries/public-sector.jpg"
      overview={`Public institutions must adapt to growing citizen expectations while maintaining transparency and accountability. 
      At LambdaTech AI, we support digital transition and data-driven governance to enhance efficiency, service delivery, 
      and public trust.`}
      challenges={[
        {
          title: "Digital Transformation",
          description: "Shifting legacy systems to modern, digital-first platforms.",
          icon: "💻",
        },
        {
          title: "Citizen Experience",
          description: "Improving accessibility and responsiveness of public services.",
          icon: "👥",
        },
        {
          title: "Regulatory Pressure",
          description: "Ensuring compliance, security, and responsible governance.",
          icon: "📜",
        },
        {
          title: "Resource Constraints",
          description: "Delivering impact with limited budgets and resources.",
          icon: "⚖️",
        },
      ]}
      services={[
        {
          id: "consulting",
          title: "Consulting Services",
          description:
            "Helping institutions rethink governance and operational frameworks for efficiency.",
          image: "/images/services/consulting.jpg",
        },
        {
          id: "data-ai",
          title: "Data & AI",
          description:
            "Enabling smart policymaking with analytics and real-time data insights.",
          image: "/images/services/data-ai.jpg",
        },
        {
          id: "cloud-solutions",
          title: "Cloud Solutions",
          description:
            "Building secure and scalable government platforms to serve citizens effectively.",
          image: "/images/services/cloud.jpg",
        },
      ]}
    />
  );
}
