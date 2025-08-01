import MiniIndustryCard from './MiniIndustryCard';
import { FaDollarSign, FaStethoscope, FaIndustry, FaUniversity, FaShoppingCart } from 'react-icons/fa';

const OtherIndustriesSection = () => {
  const industries = [
    {
      icon: <FaDollarSign />,
      title: 'Finance',
      description: 'AI and analytics drive fraud detection, risk management, and personalized customer experiences.',
    },
    {
      icon: <FaStethoscope />,
      title: 'Healthcare',
      description: 'Improve patient outcomes, optimize resource allocation, and accelerate medical research.',
    },
    {
      icon: <FaIndustry />,
      title: 'Manufacturing',
      description: 'Enhance production efficiency, optimize supply chains, and ensure quality control.',
    },
    {
      icon: <FaUniversity />,
      title: 'Public Sector',
      description: 'Improve public services, enhance security, and optimize resource management.',
    },
    {
      icon: <FaShoppingCart />,
      title: 'Retail',
      description: 'Personalize customer experiences, optimize inventory, and improve marketing effectiveness.',
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-xl font-bold mb-4">Other Industries</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <MiniIndustryCard key={index} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherIndustriesSection;
