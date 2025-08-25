// app/services/data-ai/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function DataAIPage() {
  return (
    <ServiceTemplate
      title="Data & AI"
      description="Unlock the power of data and AI to enable faster, smarter decision-making."
      heroImage="/images/services/data-ai.jpg"
      overview="We empower businesses to transform their operations with modern data strategies and AI-driven solutions. From data management to advanced analytics, we ensure insights translate into outcomes."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Evaluate data challenges and opportunities." },
        { icon: "🧭", title: "Strategy", detail: "Develop tailored data & AI strategies." },
        { icon: "💡", title: "Innovation", detail: "Leverage AI, ML, and analytics platforms." },
        { icon: "🚀", title: "Implementation", detail: "Enable adoption with scalable data ecosystems." },
      ]}
      capabilities={[
        {
          title: "Data Management",
          description: "Organize, access, and secure enterprise data with compliance in mind.",
          image: "/images/services/data-management.jpg",
        },
        {
          title: "Data Modernization",
          description: "Migrate legacy systems to modern, cloud-based architectures.",
          image: "/images/services/data-modernization.jpg",
        },
        {
          title: "Data Strategy",
          description: "Align data frameworks with business outcomes.",
          image: "/images/services/data-strategy.jpg",
        },
        {
          title: "Business Intelligence & Visualization",
          description: "Turn raw data into actionable, visual insights.",
          image: "/images/services/bi-visualization.jpg",
        },
        {
          title: "Artificial Intelligence",
          description: "Automate tasks and enhance decisions with AI-driven intelligence.",
          image: "/images/services/ai.jpg",
        },
      ]}
    />
  );
}
