// Add this import at the top of your file
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";





export default function Gis() {
    const navigate = useNavigate();
  const plans = [
    {
      title: "Basic Plan",
      color: "text-green-400",
      border: "border-green-500",
      glow: "shadow-green-500/30",
      icon: "🟢",
      desc: "Perfect for simple map needs",
      features: [
        "1 custom map design",
        "Basic data visualization",
        "Standard layout & labeling",
        "One revision included",
        "Delivered in JPG/PNG/PDF format",
        "Best for: students, small projects, and simple presentations",
      ],
    },
    {
      title: "Advanced Plan",
      color: "text-blue-400",
      border: "border-blue-500",
      glow: "shadow-blue-500/30",
      icon: "🔵",
      desc: "Ideal for professional and business use",
      features: [
        "Up to 3 custom maps",
        "Spatial analysis & thematic mapping",
        "Professional layout & cartographic styling",
        "Data cleaning & organization",
        "Up to 3 revisions",
        "Delivered in high-resolution + editable formats",
        "Best for: researchers, businesses, and reports",
      ],
    },
    {
      title: "Premium Plan",
      color: "text-purple-400",
      border: "border-purple-500",
      glow: "shadow-purple-500/30",
      icon: "🟣",
      desc: "Complete GIS mapping solution",
      features: [
        "Up to 7 custom maps or full project support",
        "Advanced spatial analysis & insights",
        "Interactive web map or dashboard (optional)",
        "Custom design, branding & advanced visualization",
        "Priority support & unlimited revisions",
        "All formats + source files included",
        "Best for: organizations, government projects, and decision-making reports",
      ],
    },
  ];

  return (
    <section className="bg-black min-h-screen py-20 px-6 overflow-hidden">

  <button
  onClick={() => navigate(-1)}
  className="px-5 py-2 border border-green-500 text-green-400 rounded-lg 
             transition-all duration-300 ease-in-out
             hover:bg-white hover:font-bold hover:text-green-400 hover:scale-105 hover:shadow-lg"
>
  ← Go Back
</button>
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          GIS Pricing Plans
        </h2>
        <p className="text-gray-400 mb-14 text-lg">
          Choose the perfect mapping package for your project needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`relative bg-[#111] border ${plan.border} rounded-3xl p-8 text-left shadow-2xl ${plan.glow} hover:shadow-2xl transition-all duration-500 overflow-hidden group`}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition duration-500 bg-gradient-to-br from-white/10 to-transparent" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{plan.icon}</div>

                <h3 className={`text-2xl font-bold mb-2 ${plan.color}`}>
                  {plan.title}
                </h3>

                <p className="text-gray-400 mb-6">{plan.desc}</p>

                <ul className="space-y-3 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 border-b border-gray-800 pb-2"
                    >
                      <span className={`${plan.color} text-lg`}>✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 rounded-xl font-semibold bg-transparent border ${plan.border} ${plan.color} hover:bg-white hover:text-black transition-all duration-300`}
                >
                  Select Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

