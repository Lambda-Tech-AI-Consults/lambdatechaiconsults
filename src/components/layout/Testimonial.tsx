"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Amaka Johnson",
    title: "Head of Innovation, NoriTech",
    photo: "/images/testimonials/amaka.jpg",
    quote:
      "Working with your team was a game changer. Your tailored solutions helped us automate key processes, improve data accuracy, and unlock new growth opportunities.",
  },
  {
    name: "Chuka Obi",
    title: "CTO, SmartBank Africa",
    photo: "/images/testimonials/chuka.jpg",
    quote:
      "I’m constantly impressed with their professionalism, expertise, and ability to deliver complex projects on time. They exceeded expectations.",
  },
  {
    name: "Fatima Bello",
    title: "Product Manager, MedSoft",
    photo: "/images/testimonials/fatima.jpg",
    quote:
      "They brought our vision to life in a way that was user-friendly and scalable. Everyone on our team now works more efficiently.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#0C1F4A] mb-14"
        >
          What Our Clients Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} style={{ minHeight: '320px' }}>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-[#F3F4F6] p-8 rounded-2xl shadow-md text-left h-64 flex flex-col justify-between"
              >
                <p className="text-base italic text-gray-800 mb-6">
                  “{t.quote}”
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 relative rounded-full overflow-hidden">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0C1F4A]">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
