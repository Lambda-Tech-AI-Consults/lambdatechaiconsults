import Link from 'next/link'

const PartnerCTA = () => (
  <section className="bg-[#0C1F4A] py-20 text-white text-center">
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Become a LamdaTech Partner</h2>
      <p className="mb-6 text-gray-200">
        Join us in redefining energy technology and shaping the future. Explore partnership opportunities with us today.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-white text-[#0C1F4A] font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition"
      >
        Get in Touch
      </Link>
    </div>
  </section>
)

export default PartnerCTA