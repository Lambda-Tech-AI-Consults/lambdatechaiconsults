// app/industries/healthcare/page.tsx
"use client";

import IndustryTemplate from "@/components/layout/industries/IndustryTemplate";

export default function HealthcarePage() {
  return (
    <IndustryTemplate
      industryName="Healthcare"
      tagline="Smarter healthcare, powered by data and innovation."
      heroImage="/images/industries/healthcare.jpg"
      overview={`Healthcare is undergoing rapid transformation, driven by the need for efficiency, 
      improved patient outcomes, and operational agility. At LambdaTech AI, we support healthcare 
      providers, organizations, and support services in rethinking how care is delivered, measured, 
      and managed using technology and data.`}
      challenges={[
        {
          title: "Rising Costs",
          description: "Managing healthcare expenses while improving accessibility and quality.",
          icon: "💰",
        },
        {
          title: "Data Integration",
          description: "Unifying siloed patient data to enable holistic care delivery.",
          icon: "🧩",
        },
        {
          title: "Operational Efficiency",
          description: "Streamlining processes and reducing bottlenecks across healthcare systems.",
          icon: "⚙️",
        },
        {
          title: "Patient Experience",
          description: "Meeting growing expectations for personalized, accessible healthcare services.",
          icon: "🧑‍⚕️",
        },
      ]}
      services={[
        {
          id: "data-ai",
          title: "Data & AI",
          description:
            "Enabling predictive care, faster diagnostics, and data-driven decision-making with AI and analytics.",
          image: "/images/services/data-ai.jpg",
        },
        {
          id: "business-process-automation",
          title: "Business Process Automation",
          description:
            "Automating administrative tasks to reduce workload and allow professionals to focus on patient care.",
          image: "/images/services/business-automation.jpg",
        },
        {
          id: "cloud-solutions",
          title: "Cloud Solutions",
          description:
            "Creating secure and compliant cloud systems for managing patient records and healthcare operations.",
          image: "/images/services/cloud.jpg",
        },
      ]}
    />
  );
}
