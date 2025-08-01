import { FaLightbulb } from "react-icons/fa";
import { MdVerifiedUser, MdShowChart } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

const values = [
  {
    title: "Innovation",
    icon: <FaLightbulb className="w-6 h-6" />,
    description: "We embrace creativity and continuous learning to develop groundbreaking solutions.",
  },
  {
    title: "Integrity",
    icon: <MdVerifiedUser className="w-6 h-6" />,
    description: "We uphold the highest ethical standards, ensuring transparency and trust in all our interactions.",
  },
  {
    title: "Partnership",
    icon: <HiUserGroup className="w-6 h-6" />,
    description: "We collaborate closely with our clients, building strong relationships based on mutual respect and shared goals.",
  },
  {
    title: "Impact",
    icon: <MdShowChart className="w-6 h-6" />,
    description: "We are committed to delivering measurable results that create lasting value for our clients and society.",
  },
];

export default function CoreValues() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Core Values</h2>
      <div className="flex flex-wrap gap-6 w-full">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border bg-white shadow-sm space-y-3 w-80"
          >
            <div className="text-blue-600">{value.icon}</div>
            <h3 className="text-lg font-semibold">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
