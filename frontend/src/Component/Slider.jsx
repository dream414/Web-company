import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { src: "/site.png", title: "Site Selection Maps", content: "Comprehensive site selection analysis with terrain and slope data" },
  { src: "/2map.png", title: "Gilgit Settlements Map", content: "Map of settlements and communities in the Gilgit region" },
  { src: "/gilgit baltistamap.png", title: "Gilgit-Baltistan Physical Map", content: "Physical features including colleges,peaks,district headquarters and roads" },
  { src: "/gb Evelation.png", title: "GB Evelation Map", content: "Elevation contours of Gilgit-Baltistan region from 915m to 8,200m" },
  { src: "/sub division.png", title: "Roundo Union Concils", content: "Sub-Division Roundo Union Concils with population distribution" },
  { src: "/gb land.png", title: "Gilgit-Baltistan Land Type Maps", content: "Categorical map of land types across Gilgit-Baltistan" },
  { src: "/Skardu.png", title: "Skardu Lakes and Rivers", content: "Lakes and Rivers occurrence in Skardu Sub-Division (2000-2021)" },
  { src: "/district skardu.png", title: "Skardu Land Distribution", content: "Land type distibution accross District Skardu" },
  { src: "/watershed.png", title: "Watershed Catchnment Map", content: "Watershed Catchment area map of Gilgit district" },
  { src: "/Earthquake.png", title: "Earthquake Hotspots", content: "Recent Earthquake hotspots in Roudo (Skardu) region" },
  { src: "/hunza district.png", title: "Hunza District Map", content: "Contour,slope,aspect and hillshade map of Hunza District" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [gap, setGap] = useState(280);
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(null);

  // 🔁 Responsive spacing (for 5 images)
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 480) setGap(150);
      else if (window.innerWidth < 768) setGap(190);
      else if (window.innerWidth < 1024) setGap(230);
      else setGap(280);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">

      {/* 🔽 Heading moved slightly down */}
      <div className="text-center mt-24 mb-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          MSP Collection
        </h2>

        {/* ⬜ White paragraph */}
        <p className="mt-6 text-lg text-white">
          Explore our comprehensive collection of maps and spatial planning resources
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full h-[32rem] sm:h-[38rem] md:h-[42rem] lg:h-[46rem] flex items-center justify-center overflow-visible">

        {slides.map((slide, i) => {
          let pos = i - index;

          // 🔥 allow ±2 visibility (5 images)
          if (pos < -Math.floor(slides.length / 2)) pos += slides.length;
          if (pos > Math.floor(slides.length / 2)) pos -= slides.length;

          const isCenter = pos === 0;

          // scale based on distance
          const scale =
            pos === 0 ? 1.1 :
            Math.abs(pos) === 1 ? 0.85 :
            Math.abs(pos) === 2 ? 0.65 : 0;

          return (
            <motion.div
              key={i}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -80) setIndex((i + 1) % slides.length);
                if (info.offset.x > 80) setIndex((i - 1 + slides.length) % slides.length);
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setOpen(slide)}
              animate={{
                x: pos * gap,
                scale,
                opacity: Math.abs(pos) > 2 ? 0 : 1,
                zIndex: isCenter ? 30 : 10,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="absolute cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="
                    rounded-2xl
                    border-2 border-green-500
                    w-56 sm:w-72 md:w-88 lg:w-96
                    h-60 sm:h-72 md:h-80 lg:h-96
                    object-cover
                  "
                />

                {/* Hover text */}
                {hovered === i && (
                  <div className="absolute inset-0 rounded-2xl bg-black/65 flex items-center justify-center p-4 text-center">
                    <p className="text-white text-xs sm:text-sm md:text-base">
                      {slide.content}
                    </p>
                  </div>
                )}
              </div>

              {/* Title */}
              {isCenter && (
                <h3 className="text-center mt-4 font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  {slide.title}
                </h3>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.img
              src={open.src}
              alt={open.title}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-full max-h-full rounded-xl border-2 border-green-500 object-covercd my-app"
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
