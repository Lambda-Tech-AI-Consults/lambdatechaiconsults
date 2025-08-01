const MiniIndustryCard = ({ icon, title, description }) => (
  <div className="p-4 border rounded-lg shadow-sm w-full sm:w-auto">
    <div className="text-2xl mb-2">{icon}</div>
    <h4 className="font-semibold">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default MiniIndustryCard;
