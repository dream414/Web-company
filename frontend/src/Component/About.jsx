import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "500+", label: "Global Clients" },
    { value: "95%", label: "Success Rate" },
    { value: "24/7", label: "Expert Support" },
    { value: "5+", label: "Years Experience" },
  ];

  const bottomBoxes = [
    { img: "/MAP4.jpg", text: "Anas Ali Marketing Manager at Web Collection Maketing  Expert With  12 years of Experience" },
    { img: "/MAP5.jpg", text: "Rashid Iqbal: Tech Expert at Web Collection .Full stack and block chain Developer With 13 years of Experience in Development" },
    { img: "/MAP8.jpg", text: "Nadir Ali" },
    { img: "/MAP7.jpg", text: "Zain Abbas" },
    { img: "/MAP6.jpg", text: "Zain Abbas: Designe With 4 years of Experience in Front End Designer" },
    { img: "/aps.jpg", text: "Nadir Ali :GIS Expert at Web  Collection With 3 years of Experience in GIS and Remote Sensing" },
    { img: "/MAP10.jpg", text: "Qaiser Abbas: GIS team Lead and GIS manager at Web Collection 5  year of Experience in GIS and Remote sensing" },
    { img: "/MAP11.jpg", text: "Akiram Abbas Officer Manager at Web Collection. Designer" },
  ];

  return (
    <section id="about" className="py-20 bg-[#11111a] text-white overflow-hidden">
      {/* ================= TOP ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container px-4 mx-auto"
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-white/80">
            Web Collection Technology delivers smart GIS & AI-based geospatial
            solutions for real-world impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* ================= BIG IMAGE (OLD PROPS RESTORED) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-green-500/40 shadow-lg bg-black group-hover:shadow-[0_0_35px_10px_rgba(0,255,0,0.7)] transition-all duration-300">
                <motion.img
                  src="./team pic.png"
                  alt="Team"
                  className="w-full h-80 object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ================= TEXT ================= */}
          <div className="flex-1 space-y-6">
            {["Our Vision", "Our Approach"].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white/5 p-6 rounded-2xl border border-green-500/40 hover:shadow-[0_0_25px_8px_rgba(0,255,0,0.6)] transition-all">
                  <p className="text-green-300 font-medium mb-2">{title}</p>
                  <p className="text-white/70">
                    {title === "Our Vision"
                      ? "Empower organizations with actionable spatial intelligence."
                      : "Transparency, collaboration & technical excellence."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ================= STATS ================= */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,255,150,0.7)",
            }}
            className="bg-black/40 rounded-xl p-6 text-center border border-green-500/40"
          >
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-green-200 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ================= 8 BOXES (SAME HOVER AS BIG IMAGE) ================= */}
      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9">
          {bottomBoxes.map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-green-500/40 bg-black group-hover:shadow-[0_0_20px_10px_rgba(0,255,0,0.7)] transition-all duration-300">
                <motion.img
                  src={box.img}
                  alt={box.text}
                  className="w-full h-76 object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm py-3 text-center border-t border-green-500/40">
                  <p className="text-green-300 text-sm font-medium tracking-wide">
                    {box.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
