// app/services/application-services/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function ApplicationServicesPage() {
  return (
    <ServiceTemplate
      title="Application Services"
      description="Modernize, manage, and optimize enterprise applications to increase efficiency and reduce technical debt."
      heroImage="/images/services/application-services.jpg"
      overview="We modernize enterprise applications end-to-end, leveraging automation and intelligent tooling to engineer resilient and future-ready systems."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Assess application landscape and challenges." },
        { icon: "🧭", title: "Strategy", detail: "Define modernization roadmaps and migration paths." },
        { icon: "⚙️", title: "Innovation", detail: "Engineer modern cloud-native apps with automation." },
        { icon: "🚀", title: "Implementation", detail: "Deploy, monitor, and scale efficiently." },
      ]}
      capabilities={[
        {
          title: "End-to-End Application Modernization",
          description: "Enhance efficiency and modernize applications for future readiness.",
          image: "/images/services/app-modernization.jpg",
        },
        {
          title: "Enterprise Application Management",
          description: "Leverage intelligent automation to optimize enterprise app performance.",
          image: "/images/services/app-management.jpg",
        },
      ]}
    />
  );
}
