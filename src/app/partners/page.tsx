import PartnerHighlight from "@/components/layout/partners/PartnerHighlight";
import Partners from "@/components/layout/Partners";
import PartnerBenefits from "@/components/layout/partners/PartnerBenefits";
import PartnerCTA from "@/components/layout/partners/PartnerCTA";
import PartnerHero from "@/components/layout/partners/PartnerHero";
import CaseStudy from "@/components/layout/services/CaseStudy";
import React from "react";

const page = () => {
  return (
    <main className="bg-white text-[#0C1F4A] mx-auto">
      <PartnerHero />
      <Partners />
      <div className="px-4 md:px-16 py-10 space-y-16 bg-[#F9FAFB] text-gray-700 mx-auto">
        <PartnerHighlight />
      </div>
      <PartnerBenefits />
      <CaseStudy />
      <PartnerCTA />
    </main>
  );
};

export default page;
