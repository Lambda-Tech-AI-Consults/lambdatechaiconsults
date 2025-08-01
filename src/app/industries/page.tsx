import CTA from '@/components/layout/Cta';
import EnergyOilSection from '../../components/layout/industries/EnergyOilSection';
import OtherIndustriesSection from '../../components/layout/industries/OtherIndustriesSection';

const page = () => {
  return (
    <>
      <main className="mx-auto px-4 py-10 bg-[#F9FAFB] text-gray-700 w-full">
        <EnergyOilSection />
        <OtherIndustriesSection />
      </main>
      <CTA />
    </>
  );
};

export default page;
