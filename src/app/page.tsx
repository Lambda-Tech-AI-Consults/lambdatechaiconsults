import WhoWeAreSnapshot from "@/components/layout/WhoWeAreSnapshot";
import Cta from "@/components/layout/Cta";
import Hero from "@/components/layout/Hero";
import Industries from "@/components/layout/Industries";
import Partners from "@/components/layout/Partners";
import ServiceList from "@/components/layout/ServiceList";
import Testimonial from "@/components/layout/Testimonial";
import WhatWeDoPreview from "@/components/layout/WhatWeDoPreview";
import IndustriesSection from "@/components/layout/IndustriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAreSnapshot />
      <WhatWeDoPreview />
      <ServiceList />
      <Industries />
      <IndustriesSection />
      <Partners />
      <Testimonial />
      <Cta />
    </>
  );
}
