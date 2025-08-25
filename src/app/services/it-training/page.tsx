// app/services/it-training/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function ITTrainingPage() {
  return (
    <ServiceTemplate
      title="IT Training"
      description="Upskill your workforce with specialized IT and digital training programs."
      heroImage="/images/services/training.jpg"
      overview="We provide hands-on IT training programs designed to empower teams with the knowledge needed to leverage modern technologies and tools effectively."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Identify skill gaps in the workforce." },
        { icon: "🧭", title: "Strategy", detail: "Create tailored training pathways." },
        { icon: "💡", title: "Innovation", detail: "Deliver interactive, real-world IT learning." },
        { icon: "🚀", title: "Implementation", detail: "Upskill teams to drive organizational transformation." },
      ]}
      capabilities={[
        {
          title: "Cloud & Infrastructure Training",
          description: "Hands-on learning for cloud platforms and IT operations.",
          image: "/images/services/cloud-training.jpg",
        },
        {
          title: "AI & Data Training",
          description: "Specialized programs in AI, data science, and analytics.",
          image: "/images/services/ai-training.jpg",
        },
      ]}
    />
  );
}
