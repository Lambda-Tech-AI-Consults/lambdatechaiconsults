// app/services/it-infrastructure/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function ITInfrastructurePage() {
  return (
    <ServiceTemplate
      title="IT Infrastructure & Operations"
      description="Optimize IT assets and operations to reduce costs and enhance performance."
      heroImage="/images/services/it-infrastructure.jpg"
      overview="We support enterprises in optimizing IT cost structures, asset management, and service delivery — ensuring IT becomes a strategic enabler rather than a bottleneck."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Identify infrastructure challenges and costs." },
        { icon: "🧭", title: "Strategy", detail: "Create a roadmap for IT optimization." },
        { icon: "⚙️", title: "Innovation", detail: "Leverage automation and ITSM best practices." },
        { icon: "🚀", title: "Implementation", detail: "Deliver resilient, efficient IT operations." },
      ]}
      capabilities={[
        {
          title: "IT Cost Optimization",
          description: "Lower IT costs while maintaining performance and reliability.",
          image: "/images/services/it-cost.jpg",
        },
        {
          title: "IT Asset Management",
          description: "Maximize IT asset value and minimize risks across lifecycle.",
          image: "/images/services/it-asset.jpg",
        },
        {
          title: "IT Business Operations",
          description: "Align IT operations with business strategy and needs.",
          image: "/images/services/it-business.png",
        },
        {
          title: "IT Service Management",
          description: "Deliver IT services efficiently with ITIL-aligned practices.",
          image: "/images/services/it-service.jpg",
        },
      ]}
    />
  );
}
