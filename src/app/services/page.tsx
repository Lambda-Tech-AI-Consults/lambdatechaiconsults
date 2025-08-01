import CTA from "@/components/layout/Cta";
// import ServiceList from "@/components/layout/ServiceList";
import CaseStudy from "@/components/layout/services/CaseStudy";
import DetailedServiceList from "@/components/layout/services/DetailedServiceList";
import ProductShowcase from "@/components/layout/services/ProductShowcase";
import WhatWeDo from "@/components/layout/services/WhatWeDo";
import React from "react";

const page = () => {
  return (
    <>
      <main className="mx-auto px-4 py-10 w-full bg-[#F9FAFB] text-gray-700">
        <WhatWeDo />
        <DetailedServiceList />
        {/* <ServiceList /> */}
        <ProductShowcase />
        <CaseStudy />
      </main>
      <CTA />
    </>
  );
};

export default page;
