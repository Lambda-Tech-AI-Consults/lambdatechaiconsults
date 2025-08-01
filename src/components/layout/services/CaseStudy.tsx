'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CaseStudies = [
  {
    name: 'Well Optimization',
    description:
      'Using Nibras Nx, we helped a leading E&P company implement virtual metering and P-Q curve modeling to optimize well performance, resulting in a 15% production increase.',
    image: '/images/CaseStudy/well.jpg',
  },
  {
    name: 'Reservoir Management',
    description:
      'By deploying EBM for water-flooded reservoirs with Nibras Nx, a client enhanced sweep efficiency and reservoir recovery, improving output predictability and reducing OPEX.',
    image: '/images/CaseStudy/reservoir.jpg',
  },
  {
    name: 'Facility Operations',
    description:
      'We streamlined energy use and CO₂ tracking across multiple assets using Nibras Nx’s energy & emission tools, supporting ESG reporting and operational compliance.',
    image: '/images/CaseStudy/facility.jpg',
  },
  {
    name: 'Digital Field Monitoring',
    description:
      'Through Adaga e-Stream and e-Perform, we digitized real-time monitoring and performance dashboards across remote wells, reducing field visits and boosting uptime.',
    image: '/images/CaseStudy/monitoring.jpg',
  },
  {
    name: 'Operational Reporting',
    description:
      'A major operator used e-Report and e-Plan to unify well activity reporting, enabling seamless collaboration across departments and reducing reporting time by 40%.',
    image: '/images/CaseStudy/report.jpg',
  },
  {
    name: 'Hydrocarbon Accounting',
    description:
      'With Elite Energy’s hydrocarbon accounting tools, we helped a client automate data reconciliation and boost audit accuracy across their upstream operations.',
    image: '/images/CaseStudy/accounting.jpg',
  },
];


const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
}

const CaseStudy = () => {
  return (
    <section className="py-20 bg-[#F5F9FB]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C1F4A] mb-4">
            Case Studies
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#0C1F4A] mb-2">{caseStudy.name}</h3>
                <p className="text-gray-600 text-sm">{caseStudy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
