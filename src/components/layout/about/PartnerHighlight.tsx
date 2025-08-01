import Image from "next/image";

export default function PartnerHighlight() {
  return (
    <section className="flex flex-col md:flex-row gap-10 items-center">
      <div className="flex-1 space-y-2">
        <p className="text-sm text-gray-500">Partnership Highlight</p>
        <h2 className="text-2xl font-semibold">Innovateq: Pioneering AI-Driven Solutions</h2>
        <p>
          Innovateq is a key partner in our mission to deliver cutting-edge AI solutions. Their expertise in machine learning and data science complements our consulting services, enabling us to provide comprehensive and innovative solutions to our clients.
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/images/partners/innovateq.png"
          alt="Innovateq logo"
          width={400}
          height={250}
          className="rounded-md shadow-md"
        />
      </div>
    </section>
  );
}
