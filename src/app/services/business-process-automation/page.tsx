// app/services/business-process-automation/page.tsx
import ServiceTemplate from "@/components/layout/services/ServiceTemplate";

export default function BusinessProcessAutomationPage() {
  return (
    <ServiceTemplate
      title="Business Process Automation"
      description="Reinvent business operations with AI-driven automation and intelligent platforms."
      heroImage="/images/services/business-automation.jpg"
      overview="We combine deep process expertise with AI-powered platforms to streamline business operations and deliver efficiency at scale."
      approach={[
        { icon: "🤝", title: "Consultation", detail: "Identify automation opportunities." },
        { icon: "🧭", title: "Strategy", detail: "Map automation priorities to business outcomes." },
        { icon: "💡", title: "Innovation", detail: "Leverage RPA, AI, and ML to automate operations." },
        { icon: "🚀", title: "Implementation", detail: "Deploy and monitor intelligent workflows." },
      ]}
      capabilities={[
        {
          title: "Enhance Process Automation",
          description: "AI-enabled automation to optimize business operations and drive outcomes.",
          image: "/images/services/process-automation.jpg",
        },
        {
          title: "Business Process Services",
          description: "Blend human and machine collaboration for smarter operations.",
          image: "/images/services/bps.jpg",
        },
      ]}
    />
  );
}
