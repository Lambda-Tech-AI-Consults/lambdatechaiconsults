type ProductDetailsProps = {
  product: {
    title: string;
    logo: string;
    sections: Record<string, string[]>;
  };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="space-y-10 px-4 sm:px-10">
      {Object.entries(product.sections).map(([sectionTitle, items]) => (
        <div
          key={sectionTitle}
          className="border rounded-xl p-6 bg-gray-50 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-[#00b34d] mb-4 border-b pb-2">
            {sectionTitle}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-800">
            {items.map((item, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded-md shadow-sm border hover:border-[#00b34d] transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProductDetails;
