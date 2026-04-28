// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Bold } from "lucide-react";

const skills = {
  Technical: ["GIS", "Drone Survey", "3D Modelling", "Mapping", "Designing", "Nocode Development"],
  Business: ["BizDev", "MR&A", "CRM", "PMP", "Business Model Innovation", "Project Consult"],
  Government: ["Government Consultancy", "Public Sector Collaboration", "Diplomas & Tech Courses"]
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.03 } }
};

const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  const storyText = "I thrive on solving real-world challenges through technology—whether it's using GIS to map land reforms, developing growth strategies for businesses, or consulting on community projects. You’ll find me launching new initiatives, collaborating with local governments, or exploring innovative ways to drive impact through data and development.";

  return (
    <section className="relative px-6 md:px-20  py-20 overflow-hidden bg-black">
      {/* Animated green background glow */}
      {/* <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow pointer-events-none"
        style={{ backgroundColor: "rgb(16, 185, 129)", opacity: 0.2 }}
      ></div> */}

      {/* Title */}
       <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20 text-4xl md:text-5xl font-extrabold text-white text-center"
            >
              Skills
            </motion.h2>

      {/* Skills Sections */}
      <div className="grid md:grid-cols-3 gap-10 mb-16  ">
          {/* Glow Background */}
   
        {Object.entries(skills).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="relative bg-black rounded-xl p-6 shadow-xl  transition-all duration-500 overflow-hidden  "
            
            style={{
               backgroundColor: "rgb(31, 41, 55)",
                border: "1px solid rgb(55, 65, 81)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute  inset-0 rounded-xl pointer-events-none"
              style={{ border: "2px solid rgb(34, 197, 94)", opacity: 0.3 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
               <div className="absolute inset-0 bg-green-600/20 rounded-full blur-3xl"></div>

            <h3
              className="text-xl font-semibold mb-4 capitalize border-b pb-2 relative z-10"
              style={{ color: "rgb(132, 204, 22)", borderColor: "rgb(107, 114, 128)" }}
            >
              {category.replace("-", " & ")}
            </h3>
            <ul className="space-y-3 relative z-10">
              {items.map((skill) => (
                <motion.li
                  key={skill}
                  className="opacity-80 cursor-pointer text-gray-100 font-medium  hover:text-amber-400 hover:font-bold"
                  whileHover={{
                    scale: 1.1,
                    x: 5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Story Section */}
      <motion.div
        className="relative bg-black  rounded-xl p-10 text-center shadow-2xl transition-all duration-500 border-2 z-10 border border-green-400  hover:cursor-pointer"
        style={{ backgroundColor: "rgb(31, 41, 55)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
           <div className="absolute inset-0 bg-green-600/20 rounded-full blur-3xl"></div>
        <motion.p
          className="text-gray-200 md:text-lg leading-relaxed mb-6 flex flex-wrap justify-center"
          variants={typingVariants}
          initial="hidden"
          animate="visible"
        >
          {storyText.split("=").map((char, i) => (
            <motion.span key={i} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </motion.p>

           <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-block px-10 py-3 rounded-full font-semibold text-white 
          bg-green-400 hover:bg-green-500 transition-all hover:shadow-[0_0_15px_6px_rgba(0,155,0,0.5)]]"
          whileHover={{ scale: 1.1 }}
        >
          My Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
