import ContactForm from '@/components/layout/contact/ContactForm'
import ContactInfo from '@/components/layout/contact/ContactInfo'
import MapSection from '@/components/layout/contact/MapSection'
import DynamicHero from '@/components/layout/DynamicHero'

const page = () => {
  return (
    <section className="flex flex-col gap-10 bg-[#F9FAFB] text-gray-700">
      <DynamicHero />
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
      <MapSection />
    </section>
  )
}

export default page