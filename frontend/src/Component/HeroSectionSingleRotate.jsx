import { useState } from "react";
import { motion } from "framer-motion";
import myVideo from "../assets/wct.mp4"; // 👈 video import

const HeroSectionSingleRotate = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/moo.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* LEFT CONTENT */}
        <div className="relative md:w-1/2 text-center md:text-left space-y-6 z-10">
          <button className="px-6 py-2 bg-gray-600 border-2 border-green-600 text-[15px] text-white font-semibold rounded-full shadow-lg">
            Web Collection Technology
          </button>

          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Smarter Mapping & Environmental Insights with Geospatial AI
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed">
            We design sophisticated digital solutions that transform complex
            data into actionable insights.
          </p>

          {/* VIEW BUTTON */}
          <button
            onClick={() => setShowVideo(true)}
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-2xl"
          >
            View
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative md:w-1/2 flex justify-center mt-14 md:mt-0 z-10">
          <img
            id="img"
            src="/any.png"
            alt="earth"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-2 border-green-400"
            style={{ animation: "spin 20s linear infinite" }}
          />

          <div className="absolute bottom-0 w-80 h-6 md:w-96 md:h-8 bg-green-400/50 rounded-full blur-3xl"></div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          #img {
            box-shadow: 0 0 40px 15px rgba(0, 255, 0, 0.5);
          }
        `}</style>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-5xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white text-2xl flex items-center justify-center shadow-lg z-50"
            >
              ✕
            </button>

            {/* BORDER ANIMATION */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="p-[4px] rounded-3xl"
              style={{
                background:
                  "linear-gradient(90deg, #22c55e, #10b981, #34d399, #22c55e)",
                backgroundSize: "300% 300%",
              }}
            >
              {/* VIDEO BOX */}
              <div className="bg-black rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,155,0,0.6)]">
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
              
    className="w-500  h-120 object-cover bg-black"
                >
                  <source src={myVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSectionSingleRotate;