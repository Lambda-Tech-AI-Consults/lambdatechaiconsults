// app/services/architecture-modernization/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function ArchitectureModernizationPage() {
  return (
    <ServiceTemplate
      title="Architecture & Modernization"
      description="Build future-ready digital architectures and modernize legacy systems for agility."
      heroImage="/images/services/architecture.jpg"
      overview="We design and modernize architectures — spanning business, technology, and applications — to unlock scalability and efficiency."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Assess legacy and future architecture needs." },
        { icon: "🧭", title: "Strategy", detail: "Design enterprise-wide architecture blueprints." },
        { icon: "⚙️", title: "Innovation", detail: "Enable microservices, APIs, and automation." },
        { icon: "🚀", title: "Implementation", detail: "Migrate and modernize for agility and resilience." },
      ]}
      capabilities={[
        {
          title: "Business & Enterprise Architecture",
          description: "Align IT and business architecture with organizational goals.",
          image: "/images/services/business-architecture.jpg",
        },
        {
          title: "Technology Architecture",
          description: "Design technology landscapes including microservices and APIs.",
          image: "/images/services/tech-architecture.jpg",
        },
        {
          title: "Application Architecture",
          description: "Engineer scalable applications for modern businesses.",
          image: "/images/services/app-architecture.webp",
        },
        {
          title: "Legacy Modernization",
          description: "Upgrade legacy systems for agility and cost savings.",
          image: "/images/services/legacy-modernization.webp",
        },
      ]}
    />
  );
}
