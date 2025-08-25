// app/services/consulting-services/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function ConsultingServicesPage() {
  return (
    <ServiceTemplate
      title="Consulting Services"
      description="Reimagine organizations and optimize IT sourcing with strategic consulting expertise."
      heroImage="/images/services/consulting.jpg"
      overview="Our consulting services help organizations rethink their processes and technology strategies. From enterprise process reimagination to IT vendor management, we guide transformation with clarity and impact."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Understand client challenges and objectives." },
        { icon: "🧭", title: "Strategy", detail: "Design pragmatic consulting roadmaps." },
        { icon: "💡", title: "Innovation", detail: "Provide actionable recommendations backed by data." },
        { icon: "🚀", title: "Implementation", detail: "Enable execution through governance and alignment." },
      ]}
      capabilities={[
        {
          title: "Enterprise Process & Technology Consulting",
          description: "Transform business models by leveraging industry expertise and modern technology.",
          image: "/images/services/enterprise-consulting.jpg",
        },
        {
          title: "Strategy Sourcing & Vendor Management",
          description: "Optimize IT sourcing and vendor relationships to deliver value at scale.",
          image: "/images/services/vendor-management.jpg",
        },
      ]}
    />
  );
}
