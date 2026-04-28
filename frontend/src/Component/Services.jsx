// src/components/Services.jsx
import React from "react";
import {
  Globe,
  Brain,
  ChartLine,
  ChartBar,
  Code,
  LayoutDashboard,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "GIS Development",
    description:
      "Advanced GIS solutions with custom mapping, spatial analysis, and location-based services.",
    icon: <Globe className="h-6 w-6 text-green-600" />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions, predictive analytics, and intelligent automation systems.",
    icon: <Brain className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Data Science",
    description:
      "Complex data analysis, visualization, and predictive modeling using advanced statistical methods.",
    icon: <ChartLine className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing with SEO, content strategy, and analytics-driven campaigns.",
    icon: <ChartBar className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Web Development",
    description:
      "Modern web applications with responsive design and seamless user experience.",
    icon: <Code className="h-6 w-6 text-green-600" />,
  },
  {
    title: "Business Intelligence",
    description:
      "Data-driven insights and analytics dashboards for informed decision making.",
    icon: <LayoutDashboard className="h-6 w-6 text-green-600" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-20 bg-black flex justify-center"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-green-600/20 rounded-full blur-3xl"></div>

      {/* Section Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container px-4 flex flex-col items-center"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center mb-16"
        >
          <motion.h2
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                       className="mb-20 text-4xl md:text-5xl font-extrabold text-white text-center"
                     >
                     Our Services
                     </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-white/90"
          >
            Comprehensive digital solutions powered by cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.07 }}
              className="relative rounded-xl m-5 overflow-hidden bg-gradient-to-br from-green-200 via-green-300 to-green-400 p-[2px]"
            >
              {/* Animated Running Border */}
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
                  borderRadius: "12px",
                }}
              />

              {/* Inner Card */}
              <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-xl p-4 flex flex-col items-center space-y-4">

                {/* Icon Animation */}
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-green-100"
                >
                  {service.icon}
                </motion.div>

                {/* Title Animation */}
                <motion.h1
                  whileHover={{ color: 'rgb(255, 215, 0)', scale: 1.09 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="font-bold text-xl text-white cursor-pointer text-center"
                >
                  {service.title}
                </motion.h1>

                {/* Description Animation */}
                <motion.p
                  whileHover={{ opacity: 1, y: -2 }}
                  className="text-center text-black/70"
                >
                  {service.description}
                </motion.p>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
