"use client";
import { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductDetails from "./ProductDetails";

type Product = {
  title: string;
  logo: string;
  sections: Record<string, string[]>;
};

const products: Product[] = [
  {
    title: "Nibras Nx",
    logo: "/images/partners/nibras.webp",
    sections: {
      Wells: [
        "E-WellBook",
        "Production Universe",
        "Virtual Metering",
        "Well Optimization",
        "EBM for Wells",
        "P-Q Curve",
        "Well Test Planning",
        "Well Test Control",
        "Well Test Review",
        "Well Test Auto Validation",
      ],
      Reservoirs: ["E-PatternBook", "EBM for Water Flooded Reservoirs"],
      Facilities: [
        "Energy and CO2 Emission",
        "Operator Standard Work",
        "Permit to Work",
      ],
    },
  },
  {
    title: "Adaga e-Digital Solutions",
    logo: "/images/partners/adaga-logo.png",
    sections: {
      "e Perform": [
        "Activities Visualization",
        "Performance Analysis",
        "Real-time KPI",
        "Desktop & Cloud Apps",
      ],
      "e Stream": ["Acquire", "Store", "Convert", "Transmit"],
      "e Steering": [
        "Modeling Tool",
        "Data Correlation",
        "Multiple Wells",
        "3D Surfaces",
      ],
      "e Report": [
        "Online Platform",
        "Unified Reporting Tool",
        "Analytical Reports",
        "Digital Format",
      ],
      "e Plan": [
        "Online Platform",
        "Unified Well Sequence Tool",
        "Automatic Sequence Updates",
        "Digital Format",
      ],
    },
  },
  {
    title: "Elite Energy",
    logo: "/images/partners/elite-energy.png",
    sections: {
      "Hydrocarbon Accounting": ["Hydrocarbon Allocation"],
    },
  },
];

const ProductShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Our Partner Energy-Based Products
      </h2>

      <ProductTabs
        products={products}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <ProductDetails product={products[activeIndex]} />
    </section>
  );
};

export default ProductShowcase;
