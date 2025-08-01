import ContactForm from '@/components/layout/contact/ContactForm'
import ContactInfo from '@/components/layout/contact/ContactInfo'
import MapSection from '@/components/layout/contact/MapSection'

const page = () => {
  return (
    <section className="pt-10 bg-[#F9FAFB] text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
      <MapSection />
    </section>
  )
}

export default page