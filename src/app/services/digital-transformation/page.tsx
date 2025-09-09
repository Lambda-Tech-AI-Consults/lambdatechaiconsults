// app/services/digital-transformation/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function DigitalTransformationPage() {
  return (
    <ServiceTemplate
      title="Digital Transformation"
      description="Empowering businesses to adapt and thrive in the digital era through advanced technologies and innovative strategies."
      heroImage="/images/services/digital-transformation.jpg"
      overview="At LambdaTech AI, our digital transformation services reimagine how organizations operate, unlocking new business models and efficiencies with cloud, automation, and AI."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Understand your business challenges and digital maturity." },
        { icon: "🧭", title: "Strategy", detail: "Create transformation roadmaps aligned with goals." },
        { icon: "💡", title: "Innovation", detail: "Apply cloud, AI, and automation to re-engineer processes." },
        { icon: "🚀", title: "Implementation", detail: "Deliver scalable solutions that drive measurable value." },
      ]}
      capabilities={[
        {
          title: "Digital Transformation Consulting",
          description: "Empowering organizations with tailored strategies to evolve into digitally mature enterprises.",
          image: "/images/services/digital-consulting.jpg",
        },
        {
          title: "Cloud Strategy, Architecture & Migration",
          description: "Modernize IT with secure, agile cloud environments aligned with business goals.",
          image: "/images/services/cloud-strategy.jpg",
        },
      ]}
    />
  );
}
