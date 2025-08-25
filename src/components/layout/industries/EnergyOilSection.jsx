import IndustryCard from './IndustryCard';

const EnergyOilSection = () => {
const cards = [
  {
    title: 'Specialized Outsourcing Services',
    description:
      'From field optimization to reservoir evaluation and development planning, we provide expert-driven support through domain specialists. Our core capabilities include Integrated Production Modelling (IPM), PVT studies, Fluid Characterization, Subsurface Interpretation, and Geoscience Evaluation.',
    image: '/images/industries/lambdatech subsurface.png',
  },
  {
    title: 'Consulting & Technology Solutions',
    description:
      'We serve as a hybrid consulting and technology firm, delivering custom solutions to the energy sector. By blending digital innovation with hands-on execution, we enable clients to boost asset performance, reduce risk, and fast-track ROI.',
    image: '/images/industries/energy4.jpg',
  },
  {
    title: 'Technical Partnerships & Delivery',
    description:
      'Through our strategic technology partners, we co-deliver advanced platforms including digital transformation solutions, real-time performance monitoring, Operator Training Simulators (OTS), and immersive 3D asset virtualization for operational excellence.',
    image: '/images/industries/lambdatech OTS.png',
  },
];


  return (
    <section className="mb-10 ">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-xl font-bold mb-2">Energy & Oil: iNNOVATEQ Partnership</h2>
        <p className="text-gray-600 mb-6">
          Lambdatech partners with iNNOVATEQ to revolutionize the energy and oil sector...
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <IndustryCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnergyOilSection;
