import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);
 const [subscribeEmail, setSubscribeEmail] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSubscribe = async () => {
  if (!subscribeEmail) return alert("Enter email");

  setLoading(true);

  try {
    await axios.post("http://localhost:5000/send-email", {
      name: "Subscriber",
      email: subscribeEmail,
      phone: "-",
      projectType: "Newsletter",
      message: "Subscribed from footer",
    });

    alert("Subscribed successfully!");
    setSubscribeEmail("");
  } catch (err) {
    console.error(err);
    alert("Failed to subscribe");
  }

  setLoading(false);
};







  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer motion variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 relative flex flex-col items-center justify-center 
    backdrop-blur-xl z-50  border-white/10 transition-all duration-300 shadow-[0_0_25px_8px_rgba(0,255,0,0.7)] backdrop-brightness-125 ">
      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.2 }}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <div className="container px-4 flex flex-col items-center justify-center">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 w-full justify-items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section 1 */}
          <motion.div variants={sectionVariant}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Web Collection Technology</h3>
            <p className="mb-4">Smart Solutions for a Connected World.</p>
            <div className="flex items-center space-x-2 mb-4 justify-center">
              <span className="text-green-600">⭐</span>
              <span>Esri Partner | ISO 27001 Certified</span>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={sectionVariant}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">GIS & Mapping Projects</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Tech Stack</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Careers</a></li>
            </ul>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={sectionVariant}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Recent Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-600 transition-colors">GBDMA Flood Risk Dashboard</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">Soni Jawari Policy Heatmaps</a></li>
              <li><a href="#" className="hover:text-green-600 transition-colors">3D Land Modeling for Smart City</a></li>
            </ul>
          </motion.div>

          {/* Section 4 – Stay Updated */}
          <motion.div variants={sectionVariant}>
            <h3 className="text-xl font-semibold mb-4 text-green-600">Stay Updated</h3>
            <p className="mb-4">Har mahine geospatial insights aur tech tips hasil karein</p>
               <form className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <input
              type="email"
              className="flex-1 h-12 w-40 rounded-md border px-3 py-2 bg-white/10 border-white/20 text-white"
              placeholder="Enter your email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
            />
            <button
              className="h-10 px-4 py-2 bg-green-600 rounded-md text-sm"
              onClick={handleSubscribe}
              disabled={loading}
              type="button"
            >
              Subscribe
            </button>
          </form>

            {/* Social Media */}
            <br />
            <motion.h1 variants={iconVariant} className="text-green-600 text-xl font-semibold">Social Media</motion.h1>
            <motion.div variants={iconVariant} className="mt-6 flex space-x-4 justify-center text-white">
              <a href="https://www.linkedin.com/in/sadaqat-aly-24aa9918a/" className="hover:text-green-600 transition-colors"><Linkedin className="w-5 h-5 inline mr-1"/>LinkedIn</a>
              <a href="https://www.facebook.com/Webcollecti0n" className="hover:text-green-600 transition-colors"><Facebook className="w-5 h-5 inline mr-1"/>Facebook</a>
              <a href="https://www.youtube.com/@WebCollectionTechnology/featured" className="hover:text-green-600 transition-colors"><Youtube className="w-5 h-5 inline mr-1"/>YouTube</a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call-to-action */}
        <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" className="text-center py-8 border-t border-white/10">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            Let's Build Your Next Digital or Geospatial Solution
          </h3>
         <button className="relative px-5 py-2 bg-black text-white rounded-lg overflow-hidden">
  <span className="relative z-10">
    <Link to="/gis">Subscibe for GIS offers</Link>
  </span>

  {/* Animated inner border color */}
  <span className="absolute inset-0 rounded-lg pointer-events-none">
    <span
      className="absolute inset-0 rounded-lg"
      style={{
        background: "linear-gradient(90deg, #00ff00, transparent, #00ff00)",
        backgroundSize: "200% 100%",
        animation: "moveColor 2s linear infinite",
        mask: "repeating-conic-gradient(#fff 0deg 360deg) border-box",
        WebkitMask: "repeating-conic-gradient(#fff 0deg 360deg) border-box",
      }}
    ></span>
  </span>

  <style>{`
    @keyframes moveColor {
      0% { background-position: 0% 0%; }
      100% { background-position: 200% 0%; }
    }
  `}</style>
</button>

        </motion.div>

        {/* Footer info */}
        <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" className="flex flex-wrap justify-center gap-6 py-6 border-t border-white/10 text-sm text-white">
          <div className="flex items-center"><span className="mr-2">🔒</span><span>100% Data Secure</span></div>
          <div className="flex items-center"><span className="mr-2">🌍</span><span>Let's mapping on your idea to visualize your business and needs</span></div>
          <div className="flex items-center"><span className="mr-2">🤝</span><span className="italic">Partnership with 10+ local private companies and govt sectors</span></div>
        </motion.div>

        <motion.div variants={sectionVariant} initial="hidden" whileInView="visible" className="text-center pt-6 border-t border-white/10 text-sm text-white">
          <p>© 2025 Web Collection Technology. All rights reserved.</p>
          <p className="mt-3">
            Web Collection technology Pvt Ltd infront of NADRA office Main KKH Danyore Gilgit &nbsp;| 
            <a className="underline hover:text-green-600" href="mailto:webcollectiontech@gmail.com">webcollectiontech@gmail.com</a>
          </p>
          <div className="flex justify-center space-x-4 mt-2 text-white">
            <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-600 transition-colors">Cookie Settings</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
