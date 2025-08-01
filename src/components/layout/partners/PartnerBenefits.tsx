const benefits = [
  {
    title: 'Access to Innovation',
    desc: 'Collaborate on next-gen energy solutions and digital technologies.',
  },
  {
    title: 'Shared Expertise',
    desc: 'Tap into our decades of experience in the energy sector.',
  },
  {
    title: 'Sustainable Impact',
    desc: 'Align with our goals in reducing carbon emissions and boosting efficiency.',
  },
  {
    title: 'Global Exposure',
    desc: 'Grow your brand reach through joint efforts and industry presence.',
  },
  {
    title: 'Dedicated Support',
    desc: 'From onboarding to deployment, we work closely with our partners.',
  },
  {
    title: 'Scalable Integration',
    desc: 'Our systems are built to connect seamlessly with your infrastructure.',
  },
]

const PartnerBenefits = () => (
  <section className="bg-[#F5F9FB] py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-10 text-center">Why Partner with LamdaTech?</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default PartnerBenefits