import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const slides = [
    {
      text: "Accurate, fast, and professional web solutions from frontend UI to backend functionality. Sadaqat built us a scalable and user-friendly web app. His communication was smooth, and he went the extra mile to ensure we got exactly what we needed.",
      author: "- Tech Startup Client",
      image: "/A.png",
      imageText: "Anus Ali",
      imageText2: "Spark Code Group of Companies",
    },
    {
      text: "Stunning drone mapping and visuals! We hired Sadaqat for aerial surveys and video documentation of our site. The drone footage was clean, professional, and full of valuable spatial context. Highly recommended for drone-based projects.",
      author: "- Construction & Survey",
      image: "/Stunning.png",
      imageText: "Awaiz Abbasi",
      imageText2:
        "Deputy Secretary, Public Development & Policy Center, Gilgit",
    },
    {
      text: "Valuable government consultancy. Sadaqat helped us with spatial planning and public development proposals. His GIS-backend insights played a major role in improving our local planning strategy.",
      author: "- Government Project Coordinator",
      image: "/Val.png",
      imageText: "Assistant Commissioner",
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const nextSlide = () =>
    setCurrent((current + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section  id="test" className="w-full py-16 bg-gray-900 flex flex-col items-center">
      
      {/* Heading */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-white bg-green-600 rounded-3xl p-3 shadow-[0_0_25px_rgba(0,255,100,0.5)]"
      >
        What Clients Say About Me
        
      </motion.h1>

      {/* Slider Wrapper */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="min-w-sm max-w-4xl mx-4 sm:mx-6 md:mx-10 rounded-3xl p-6 md:p-10 border-2 border-white shadow-[0_0_30px_rgba(0,255,150,0.3)]"
      >
        {/* Slide */}
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.p
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl font-medium text-white text-center"
            >
              {slides[current].text}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-green-300 text-center"
            >
              {slides[current].author}
            </motion.p>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.img
              src={slides[current].image}
              alt="Client"
              className="w-40 h-40 object-cover rounded-xl"
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 250 }}
            />

            <motion.p
              whileHover={{ scale: 1.05 }}
              className="mt-3 text-white font-semibold"
            >
              {slides[current].imageText}
            </motion.p>

            <motion.p
              whileHover={{ scale: 1.05 }}
              className="mt-1 text-gray-400 text-sm font-semibold"
            >
              {slides[current].imageText2}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 bg-green-600 text-white shadow-[0_0_15px_rgba(0,255,120,0.6)] rounded-xl font-bold hover:text-amber-400"
        >
          Prev
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 bg-green-600 text-white shadow-[0_0_15px_rgba(0,255,120,0.6)] rounded-xl font-bold hover:text-amber-400"
        >
          Next
        </motion.button>
      </div>
    </section>
  );
}
