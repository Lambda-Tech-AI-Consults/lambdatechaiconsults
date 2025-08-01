import Image from "next/image";

type ProductTabsProps = {
  products: { title: string; logo: string }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const ProductTabs: React.FC<ProductTabsProps> = ({
  products,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <div className="flex justify-center gap-4 mb-10 flex-wrap">
      {products.map((product, index) => (
        <button
          key={product.title}
          onClick={() => setActiveIndex(index)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            index === activeIndex
              ? "bg-[#00b34d] text-white border-[#00b34d]"
              : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
          }`}
        >
          <Image
            src={product.logo}
            alt={product.title}
            width={40}
            height={40}
          />
          <span className="font-medium">{product.title}</span>
        </button>
      ))}
    </div>
  );
};

export default ProductTabs;
