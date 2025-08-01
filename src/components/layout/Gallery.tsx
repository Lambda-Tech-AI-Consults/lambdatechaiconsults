'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  '/images/gallery/3.jpg',
  '/images/gallery/4.jpg',
  '/images/gallery/5.jpg',
  '/images/gallery/6.jpg',
  '/images/gallery/7.jpg',
  '/images/gallery/8.jpg',
  '/images/gallery/9.jpg',
]

const Gallery = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#0C1F4A] mb-10 text-center"
        >
          Project Gallery
        </motion.h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-2 space-y-2 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg transition duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
