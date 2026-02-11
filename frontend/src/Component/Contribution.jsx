// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "GBDMA Team",
    image: "/gb.png",
    stars: 5,
    text: "Web Collection Technology delivered outstanding GIS solutions that greatly enhanced our service",
  },
  {
    name: "Soni Jawari Center",
    image: "/soni.png",
    stars: 5,
    text: "Web Collection executed our Land Reform project with exceptional accuracy and professionalism",
  },
  {
    name: "Deputy Commissioner's Office",
    image: "/government baltistan.png",
    stars: 5,
    text: "Web Collection delivered a high-quality 3D road model for our project with precision and professionalism; we look forward to involving them in future initiatives",
  },
];

export default function Contribution() {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gray-900 flex justify-center"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-green-600/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white inline-block"
          >
            Government of Gilgit-Baltistan
          </motion.h2>

          <img
            src="/government baltistan.png"
            alt="Government of Gilgit-Baltistan Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 mx-auto object-contain rounded-lg
            border-green-500 shadow-[0_0_20px_8px_rgba(110,231,183,0.5)]"
          />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.07 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br
              from-green-200 via-green-300 to-green-400 p-[2px] h-full"
            >
              {/* Animated Border */}
              <motion.div
                initial={{ backgroundPosition: "0% 50%" }}
                whileHover={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-green-300 via-green-500 to-green-700"
                style={{
                  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "destination-out",
                  padding: "2px",
                  borderRadius: "16px",
                }}
              />

              {/* Inner Card */}
              <div
                className="relative z-10 bg-gray-900/80 backdrop-blur-md rounded-2xl
                p-6 flex flex-col items-center text-center justify-between h-full"
              >
                {/* TOP */}
                <div className="flex flex-col items-center">
                  {/* LOGO IMAGE — all effects here */}
                  <motion.img
                    src={t.image}
                    alt={t.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="w-24 h-24 mb-5 object-contain rounded-xl cursor-pointer
                    transition-all duration-300 border border-gray-600
                    hover:border-green-500
                    hover:shadow-[0_0_20px_8px_rgba(110,231,183,0.5)]"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array(t.stars)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.2 2 9.3l7.1-0.7L12 2z" />
                        </svg>
                      ))}
                  </div>

                  <motion.p
                    whileHover={{ y: -2 }}
                    className="text-gray-200 text-sm sm:text-base leading-relaxed"
                  >
                    “{t.text}”
                  </motion.p>
                </div>

                {/* BOTTOM */}
                <motion.p
                  whileHover={{ scale: 1.05, color: "rgb(34 197 94)" }}
                  className="font-semibold text-white mt-6"
                >
                  – {t.name}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
