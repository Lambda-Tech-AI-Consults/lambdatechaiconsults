// app/services/sustainability/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function SustainabilityPage() {
  return (
    <ServiceTemplate
      title="Sustainability Services"
      description="Empower sustainable growth with advisory and ESG-driven solutions."
      heroImage="/images/services/sustainability.png"
      overview="Our sustainability services help clients align business growth with environmental responsibility — from carbon tracking to ESG reporting automation."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Assess sustainability goals and compliance needs." },
        { icon: "🧭", title: "Strategy", detail: "Design roadmaps for sustainable growth." },
        { icon: "💡", title: "Innovation", detail: "Leverage digital platforms for ESG automation." },
        { icon: "🚀", title: "Implementation", detail: "Deploy and monitor ESG initiatives effectively." },
      ]}
      capabilities={[
        {
          title: "Sustainability Advisory & Solutions",
          description: "Enable organizations to reduce footprint and improve impact.",
          image: "/images/services/sustainability-advisory.webp",
        },
        {
          title: "ESG Reporting",
          description: "Automate ESG data reporting for compliance and transparency.",
          image: "/images/services/esg.jpg",
        },
      ]}
    />
  );
}
