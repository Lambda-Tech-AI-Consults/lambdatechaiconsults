
import HowWeServeHero from "@/components/layout/how-we-serve/HowWeServeHero";
import StrategicFramework from "@/components/layout/how-we-serve/StrategicFramework";
import MethodologySteps from "@/components/layout/how-we-serve/MethodologySteps";
import CTA from "@/components/layout/Cta";

export default function Page() {
  return (
    <>
      <div className="bg-[#F9FAFB] text-gray-700 mx-auto">
        <HowWeServeHero />
        <MethodologySteps />
        <StrategicFramework />
      </div>
      <CTA />
    </>
  );
}
