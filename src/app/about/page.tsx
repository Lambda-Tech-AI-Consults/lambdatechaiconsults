import AboutHero from "@/components/layout/about/AboutHero";
import CoreValues from "@/components/layout/about/CoreValues";
import MissionVision from "@/components/layout/about/MissionVision";
import PartnerHighlight from "@/components/layout/about/PartnerHighlight";
import AboutSection from "@/components/layout/AboutSection";
import CTA from "@/components/layout/Cta";

const page = () => {
  return (
    <>
      <div className="bg-[#F9FAFB] text-gray-700 mx-auto w-full">
        <AboutHero />
        <div className="bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6">
            <AboutSection />
          </div>
        </div>
        <MissionVision />
        <CoreValues />
        <PartnerHighlight />
      </div>
      <CTA />
    </>
  );
};

export default page;
