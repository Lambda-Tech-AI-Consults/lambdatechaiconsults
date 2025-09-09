// app/industries/finance/page.tsx
"use client";

import IndustryTemplate from "@/components/layout/industries/IndustryTemplate";

export default function FinancePage() {
  return (
    <IndustryTemplate
      industryName="Finance"
      tagline="Navigating disruption with clarity, trust, and intelligence."
      heroImage="/images/industries/finance.jpg"
      overview={`The financial sector is at the forefront of digital disruption. 
      From shifting consumer expectations to increasingly complex regulations, 
      organizations must reimagine how they operate. At LambdaTech AI, we partner 
      with banks, insurers, fintechs, and investment firms to enable smarter 
      decision-making, enhance resilience, and unlock growth through technology 
      and data-driven strategies.`}
      challenges={[
        {
          title: "Regulatory Complexity",
          description:
            "Adapting to evolving compliance requirements while maintaining operational efficiency.",
          icon: "⚖️",
        },
        {
          title: "Operational Risk",
          description:
            "Managing cybersecurity threats, fraud risks, and ensuring business continuity.",
          icon: "🛡️",
        },
        {
          title: "Customer Expectations",
          description:
            "Delivering seamless, personalized, and real-time financial experiences.",
          icon: "💳",
        },
        {
          title: "Data Utilization",
          description:
            "Transforming vast financial data into actionable insights for better decision-making.",
          icon: "📊",
        },
      ]}
      services={[
        {
          id: "data-and-ai",
          title: "Data & AI",
          description:
            "Harnessing advanced analytics, machine learning, and AI to deliver risk intelligence, fraud detection, and predictive insights.",
          image: "/images/services/data-ai.jpg",
        },
        {
          id: "digital-transformation",
          title: "Digital Transformation",
          description:
            "Helping financial institutions modernize operations and adopt cloud-native platforms for agility and scalability.",
          image: "/images/services/digital-transformation.jpg",
        },
        {
          id: "business-process-automation",
          title: "Business Process Automation",
          description:
            "Streamlining back-office processes, reducing inefficiencies, and improving client servicing speed with automation.",
          image: "/images/services/business-automation.jpg",
        },
        {
          id: "cloud-solutions",
          title: "Cloud Solutions",
          description:
            "Designing secure cloud architectures to ensure scalability, compliance, and data resilience in financial operations.",
          image: "/images/services/cloud.jpg",
        },
      ]}
    />
  );
}
