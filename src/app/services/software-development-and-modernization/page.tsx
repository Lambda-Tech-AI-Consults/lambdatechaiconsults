// app/services/software-development/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function SoftwareDevelopmentPage() {
  return (
    <ServiceTemplate
      title="Software Development & Modernization"
      description="Engineer, optimize, and modernize software for resilience, scalability, and user-centric experiences."
      heroImage="/images/services/software-dev.jpg"
      overview="From product engineering to delivery modernization, we create software systems designed to scale and evolve in the digital-first world."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Assess existing software and challenges." },
        { icon: "🧭", title: "Strategy", detail: "Define modernization and delivery roadmaps." },
        { icon: "⚙️", title: "Innovation", detail: "Engineer new systems with cloud-native platforms." },
        { icon: "🚀", title: "Implementation", detail: "Deploy, optimize, and maintain enterprise-grade apps." },
      ]}
      capabilities={[
        {
          title: "Product Engineering",
          description: "Build modern, user-focused products with agile methods.",
          image: "/images/services/product-engineering.jpg",
        },
        {
          title: "Delivery Modernization",
          description: "Adopt generative AI and automation to accelerate delivery.",
          image: "/images/services/delivery-modernization.jpg",
        },
        {
          title: "Platform Engineering",
          description: "Develop cloud-native digital cores for future readiness.",
          image: "/images/services/platform-engineering.jpg",
        },
      ]}
    />
  );
}
