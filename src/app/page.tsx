import AboutSection from "@/components/layout/AboutSection";
import Cta from "@/components/layout/Cta";
import Hero from "@/components/layout/Hero";
import Industries from "@/components/layout/Industries";
import Partners from "@/components/layout/Partners";
import ServiceList from "@/components/layout/ServiceList";
import Testimonial from "@/components/layout/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceList />
      <Industries />
      <Partners />
      <Testimonial />
      <Cta />
    </>
  );
}
