const IndustryCard = ({ image, title, description }) => (
  <div className="rounded-lg overflow-hidden shadow-sm">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  </div>
);

export default IndustryCard;
