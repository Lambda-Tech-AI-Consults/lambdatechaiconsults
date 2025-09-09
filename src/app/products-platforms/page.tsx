// app/products-platforms/page.tsx
"use client";

import Image from "next/image";
import ProductShowcase from "@/components/layout/services/ProductShowcase";

const ProductsPlatformsPage = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative bg-[#0C1F4A] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/digital-wave.png')] opacity-10 bg-cover bg-center" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Products & Platforms
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Partnering with global innovators to deliver world-class energy
            platforms, simulation systems, and AI-powered solutions that
            transform operations across the oil, gas, and energy value chain.
          </p>
        </div>
      </section>

      {/* ZNEXX Highlight */}
      <section className="py-20 px-10 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#0C1F4A] mb-6">
            Our Strategic Partnership with ZNEXX Technologies
          </h2>
          <p className="mb-4 leading-relaxed">
            We are a proud partner
            with <strong>ZNEXX Technologies</strong> — a trusted Nigerian
            technology innovator renowned for its
            precision-engineered digital solutions for the energy sector. ZNEXX
            brings deep expertise in process simulation, real-time digital twin
            development and 3D operator training simulators (OTS).
          </p>
          <p className="mb-4 leading-relaxed">
            Together, LAMBDATECH and ZNEXX will co-deliver solutions such as{" "}
            <strong>Operator Training Simulators (OTS)</strong> and{" "}
            <strong>Virtual Asset Management Systems</strong> that offer
            life-sized, dimensionally accurate 3D models of assets. These digital
            replicas are synchronized with live operational data and serve as
            powerful decision-making tools — transforming the way critical
            infrastructure is operated and maintained.
          </p>
          <p className="leading-relaxed">
            This collaboration enables asset owners to simulate, monitor, and
            optimize field operations with unmatched realism, speed, and
            intelligence — purpose-built for the African energy landscape and
            beyond.
          </p>
        </div>
        <div className="relative h-80 md:h-full w-full">
          <Image
            src="/images/partners/znexx-hero.png"
            alt="ZNEXX Partnership"
            fill
            className=" rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* Product Showcase (Tabs + Details) */}
      <ProductShowcase />
      

      {/* Advantage / Partnerships */}
      <section className="py-20 px-10 mx-auto">
        <h2 className="text-3xl font-bold text-[#0C1F4A] mb-10 text-center">
          Our Strategic OEM Partnerships & Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* iNNOVATEQ */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <Image
              src="/images/partners/iNNOVATEQ.png"
              alt="iNNOVATEQ"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">iNNOVATEQ</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              As an official channel partner of iNNOVATEQ, we deploy the{" "}
              <strong>Nibras-NX</strong> platform for advanced Well, Reservoir,
              and Facility Management (WRFM). It integrates machine learning,
              engineering workflows, and asset data to deliver real-time
              surveillance and proactive reservoir management.
            </p>
          </div>

          {/* ADAGA */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <Image
              src="/images/partners/adaga-logo.png"
              alt="ADAGA"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">ADAGA e-Digital</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our alliance with ADAGA provides intelligent drilling technologies
              that enhance drilling operations with real-time analytics,
              downhole monitoring, and predictive optimization — resulting in
              safer, faster, and more cost-effective wells.
            </p>
          </div>

          {/* Elite Energy */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <Image
              src="/images/partners/elite-energy-logo.png"
              alt="Elite Energy"
              width={120}
              height={80}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">Elite Energy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Partnering with Elite Energy, we deliver solutions in{" "}
              <strong>Hazard Consequence Assessment (HCA)</strong> and
              quantitative risk analysis. These tools support safety compliance,
              operational integrity, and risk mitigation across the lifecycle of
              oil and gas assets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C1F4A] text-white text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Unlock Energy Innovation?
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
          From AI-driven reservoir management to immersive training simulators,
          LambdaTech brings the right partners and platforms to deliver
          results-driven impact for your operations.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full bg-[#00B34D] text-white font-semibold hover:bg-[#00963f] transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default ProductsPlatformsPage;
