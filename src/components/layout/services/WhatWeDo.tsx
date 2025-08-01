"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const WhatWeDo = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* HEADING */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2 className="text-3xl font-bold text-[#0C1F4A]" variants={fadeIn}>
            What We Do
          </motion.h2>
          <motion.p className="text-gray-700 max-w-3xl" variants={fadeIn}>
            LambdaTech AI is a consulting and technology company delivering strategic, digital, and technical solutions to the energy sector and beyond. Our role bridges innovation and execution — empowering clients to transform complex operational challenges into streamlined, intelligent systems that deliver measurable value.
          </motion.p>
        </motion.div>

        {/* SERVICE CATEGORIES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* A. CONSULTING & TECHNOLOGY SERVICES */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold text-[#0C1F4A]">Consulting & Technology Services</h3>
            <p className="text-gray-700 mt-1">
              We offer tailored end-to-end solutions across the asset lifecycle — from digital strategy and production optimization to analytics and system integration. Our delivery model focuses on smart technology adoption, improved performance, and operational agility.
            </p>
          </motion.div>

          {/* B. SPECIALIZED OUTSOURCING SERVICES */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold text-[#0C1F4A]">Specialized Outsourcing Services</h3>
            <p className="text-gray-700 mt-1">
              LambdaTech provides on-demand access to experienced subsurface professionals and multidisciplinary technical teams. Our outsourcing services cover Integrated Production Modelling (IPM), PVT Studies, Reservoir Engineering, Subsurface Interpretation, and more — delivering agility and cost-efficiency.
            </p>
          </motion.div>

          {/* C. SUBSURFACE & RESERVOIR ENGINEERING */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold text-[#0C1F4A]">Subsurface & Reservoir Engineering Support</h3>
            <p className="text-gray-700 mt-1">
              We support full-field development planning, dynamic modeling, and performance forecasting. Our geoscience and engineering experts deliver high-value interpretation and modeling that improves decision-making across drilling, completions, and production optimization.
            </p>
          </motion.div>

          {/* D. INTEGRATED FIELD STUDIES */}
          <motion.div variants={fadeIn}>
            <h3 className="text-xl font-semibold text-[#0C1F4A]">Integrated Field Studies & Advisory</h3>
            <p className="text-gray-700 mt-1">
              We conduct integrated field studies from discovery to development and decline, supporting asset teams with reservoir characterization, economic screening, and field strategy design. Our methodology aligns subsurface analysis with operational planning and long-term value delivery.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;