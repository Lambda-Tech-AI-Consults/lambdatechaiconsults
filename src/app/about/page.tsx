import AboutIntro from "@/components/layout/about/AboutIntro";
import CoreValues from "@/components/layout/about/CoreValues";
import MissionVision from "@/components/layout/about/MissionVision";
import PartnerHighlight from "@/components/layout/about/PartnerHighlight";
import AboutSection from "@/components/layout/AboutSection";
import CTA from "@/components/layout/Cta";

const page = () => {
  return (
    <>
      <div className="px-4 md:px-16 py-10 space-y-16 bg-[#F9FAFB] text-gray-700 mx-auto">
        <AboutSection />
        <AboutIntro />
        <MissionVision />
        <CoreValues />
        <PartnerHighlight />
      </div>
      <CTA />
    </>
  );
};

export default page;
