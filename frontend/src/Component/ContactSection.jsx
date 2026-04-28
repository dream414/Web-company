// src/components/ContactSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // npm install axios




// fadeInSide as a function returning variants
const fadeInSide = (direction = "left") => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
});


export default function ContactSection() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.id]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:5000/send-email", formData);
    if (res.data.success) {
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    }
  } catch (err) {
    alert("Email sending failed. Try again later.");
    console.error(err);
  }
};



// fadeInUp as a function returning variants
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});
  return (
    <section id="contact" className=" relative flex w-full py-20 bg-black overflow-hidden justify-center items-center ">
      {/* Glow Background */}
      <div className=" absolute inset-0 bg-green-600/20 rounded-full blur-3xl"></div>

      <div className="container px-4  z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center mb-12 space-y-4"
        >
           <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 text-4xl md:text-5xl font-extrabold text-white text-center"
                      >    Let's Build Your Next Digital or Geospatial Solution
                      </motion.h2>
          {/* <motion.h2
            variants={fadeInUp(0)}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Let's Build Your Next Digital or Geospatial Solution
          </motion.h2> */}

          <motion.p
            variants={fadeInUp(0)}
            className="text-lg text-white/90"
          >
            Whether you need a custom GIS dashboard, a 3D mapping tool, or a
            growth-focused website, we're here to turn your vision into reality.
          </motion.p>

          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group mx-auto flex items-center  border-2 border-green-300 gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white overflow-hidden"
          >
            <span className="relative z-10">Let's Mapping</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>

            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-700 opacity-50"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>

        {/* Grid */}
        <div className="flex  flex-col  md:flex-row gap-8 max-w-full mx-auto items-center justify-center text-center">
          
          {/* Form */}
          <motion.div
            variants={fadeInSide("left")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-lg bg-white/20 text-white shadow-lg backdrop-blur-md border border-white/20 w-99"
          >
            <motion.div className="p-6 pt-6 space-y-4">
              <form className="space-y-4 "  onSubmit={handleSubmit}>
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name",
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "your.email@example.com",
                  },
                  {
                    id: "phone",
                    label: "Phone",
                    type: "text",
                    placeholder: "+92 XXX XXXXXXX",
                  },
                ].map((field, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp(0.1 * idx)}
                    className="space-y-2 text-left"
                  >
                    <label
                      htmlFor={field.id}
                      className="text-sm font-medium leading-none"
                    >
                      {field.label}
                    </label>



                    <input
                      id={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="flex h-10 w-full rounded-md border border-white/40 bg-white/10 px-3 py-2 text-base placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:border-green-400 transition-all duration-300"
                    />
                  </motion.div>
                ))}

                {/* Project Type */}
                <motion.div variants={fadeInUp(0.4)} className="space-y-2 text-left">
                  <label
                    htmlFor="project-type"
                    className="text-sm font-medium leading-none"
                  >
                    What's your project about?
                  </label>

                  <select
                  id="projectType"
                   value={formData.projectType} 
                   onChange={handleChange}
                    className="flex h-10 w-full items-center rounded-md border border-white/40 bg-white/10 px-3 py-2 text-sm  focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:border-green-400 transition-all duration-300 bg-black"
                  >
                     <option className="bg-black" value="Select your project">Select your project</option>
                    <option className="bg-black" value="UX UI Designing">UX UI Designing</option>
                    <option   className="bg-black"value="Web Development">Web Development</option>
                    <option  className="bg-black" value="GIS Solutions">GIS Solutions</option>
                    <option  className="bg-black" value="Mobile Apps">Mobile App</option>
                    <option   className="bg-black"value="Other">Other</option>
                  </select>
                </motion.div>

                {/* Message */}
                <motion.div variants={fadeInUp(0.5)} className="space-y-2 text-left">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                     value={formData.message}
                      onChange={handleChange}
                    placeholder="Describe your goals..."
                    rows="4"
                    required
                    className="flex w-full min-h-[80px] rounded-md border border-white/40 bg-white/10 px-3 py-2 text-sm placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:border-green-400 transition-all duration-300"
                  ></textarea>
                </motion.div>

                {/* Submit */}
                <motion.button
                  variants={fadeInUp(0.6)}
                  type="submit"
                  whileHover={{
                    scale: 1.05,
                    background:
                      "linear-gradient(90deg, #22c55e, #10b981, #16a34a)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full h-10 px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Send Request →
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={fadeInSide("right")}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center text-white text-center items-center"
          >
            <motion.div variants={fadeInUp(0.1)} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

              <div className="space-y-3 text-white/90 max-w-md">
                <p className="flex items-center justify-center">
                  <span className="mr-2">📍</span>
                  Web Collection Technology AL Safir plaza Main KKH in front of
                  NADRA office Danyore Gilgit Baltistan Pakistan
                </p>

                <p className="flex items-center justify-center">
                  <span className="mr-2">📧</span>
                  webcollectiontechnology@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp(0.2)}>
              <h3 className="text-xl font-semibold mb-4">
                Why Respond Fast?
              </h3>

              <div className="space-y-3">
                {[
                  "24-hour response time",
                  "Free 30-minute strategy session",
                  "GDPR-compliant data handling",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp(0.1 * index)}
                    className="flex items-center justify-center"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-teal-400"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>

                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
