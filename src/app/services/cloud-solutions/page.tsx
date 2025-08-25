// app/services/cloud-solutions/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function CloudSolutionsPage() {
  return (
    <ServiceTemplate
      title="Cloud Solutions"
      description="Accelerate innovation with agile, secure, and integrated cloud environments."
      heroImage="/images/services/cloud.jpg"
      overview="From migration to management, we help clients fully harness the cloud to fuel digital growth and agility."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Assess IT readiness for cloud adoption." },
        { icon: "🧭", title: "Strategy", detail: "Develop robust cloud strategies." },
        { icon: "⚙️", title: "Innovation", detail: "Engineer and automate cloud-native systems." },
        { icon: "🚀", title: "Implementation", detail: "Migrate and integrate workloads seamlessly." },
      ]}
      capabilities={[
        {
          title: "Cloud Integration and Management",
          description: "End-to-end integration and operations of cloud solutions.",
          image: "/images/services/cloud-integration.jpg",
        },
        {
          title: "Cloud Strategy, Architecture & Migration",
          description: "Tailored cloud architectures and smooth migrations.",
          image: "/images/services/cloud-architecture.jpg",
        },
      ]}
    />
  );
}
