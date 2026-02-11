import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Geo Spatial Land Reform",
    subtitle: "Land Reforms",
    desc: "Geo Spatial Analysis and Land Data Collection for Land Reform in Gilgit Baltistan.",
    tags: ["GIS", "Land Reform", "Geo Spatial Analysis"],
    challenge: "Fragmented and outdated land information obstructed reforms in Gilgit-Baltistan.",
    solution: "Deployed advanced geospatial analysis and land data collection for policy and planning.",
    result: "Enhanced transparency and data-driven reform decisions.",
    image: "/land reform.jpg",
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Global Analytics Web Dashboard",
    desc: "Developed a responsive and interactive web dashboard for an international client to monitor real-time data, geolocation insights, and global trends through a clean and user-friendly interface.",
    tags: ["Web Dashboard", "Analytics", "Data Visualization"],
    challenge: "International client needed real-time data monitoring across multiple regions.",
    solution: "Created a responsive web dashboard for geolocation insights and global trends analysis.",
    result: "Improved decision making with actionable insights and real-time monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Traffic 3D Modelling",
    subtitle: "3D Modelling for Assistant Commissioner Danyore",
    desc: "3D visualization of Gilgit's road network using terrain data and digital modeling techniques for better planning and simulation.",
    tags: ["3D Modelling", "Traffic", "Simulation"],
    challenge: "No visual tools for planning traffic and road controls.",
    solution: "Developed detailed 3D modeling solutions for simulation and management of road traffic.",
    result: "Improved planning and real-time traffic control through visualization.",
    image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Land Data Portal",
    subtitle: "GeoSpatial Analysis and Land Data Collection for Assistant Commissioner Danyore",
    desc: "Digitization of land data for all 10 districts of Gilgit Baltistan, with full web-based visualization and categorization.",
    tags: ["GIS", "Land Data", "Digitization"],
    challenge: "Massive paper-based land records with poor accessibility and risk of errors.",
    solution: "Digitized all land data for 10 districts, categorized and accessible via web visualization.",
    result: "Drastic reduction in disputes and accelerated administrative workflows.",
    image: "./portal.jpg",
  },
  {
    title: "GB Land Reform",
    subtitle: "GIS based Data Collection",
    desc: "The 'GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021' project supports evidence-based land reform planning.",
    tags: ["GIS based Data Collection", "Spatial Analysis", "Ortho mosaicing"],
    challenge: "Need for accurate, spatially aligned land data for planning.",
    solution: "Collected GIS-based land data and performed spatial analysis with ortho mosaicing.",
    result: "Enhanced land categorization and planning accuracy.",
  },
  {
    title: "3D Modelling using Drone Imagery",
    subtitle: "Urban Planning",
    desc: "Created a high-resolution 3D land model using drone imagery for urban planning purposes.",
    tags: ["Agisoft Metashape", "Pix4D", "Dji Modify"],
    challenge: "High-resolution 3D models needed for planning decisions.",
    solution: "Drone imagery processed into precise 3D models for visualization.",
    result: "Better decision-making in urban development.",
  },
  {
    title: "Web Mapping & Land Categorization",
    subtitle: "Interactive Grid-Based Demarcation",
    desc: "Interactive web map to categorize land parcels using point-based demarcation with precise grid system.",
    tags: ["Google Earth Online", "ArcGIS Online", "Web GIS"],
    challenge: "Need accurate land parcel visualization.",
    solution: "Implemented point-based grid demarcation with web GIS tools.",
    result: "Accurate visualization and land categorization.",
  },
  {
    title: "Negative Slope Analysis",
    subtitle: "Terrain Visualization",
    desc: "Identifying and visualizing negative slopes using high-resolution DEM data and GIS tools.",
    tags: ["Arc GIS", "Google Earth Pro", "DEM Data"],
    challenge: "Terrain slope identification required for planning.",
    solution: "Used DEM data with GIS tools for slope visualization.",
    result: "Better understanding of terrain risks and planning decisions.",
  },
];

export default function Project() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 bg-black overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-green-500/20 blur-[160px]" />
      <div className="container px-6 relative z-10 max-w-full">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 m-9 gap-15">
          {/* ✅ ONLY CHANGE: last 4 cards removed */}
          {projects.slice(0, projects.length - 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(project)}
              className="cursor-pointer relative rounded-2xl overflow-hidden bg-black/80 border border-green-700 shadow-lg p-[2px] min-w-[180px] md:min-w-[200px] lg:min-w-[300px]"
            >
              <div className="relative z-10 bg-black/70 rounded-2xl overflow-hidden p-4 flex flex-col items-center text-center">

                <div className="h-40 md:h-48 w-full overflow-hidden rounded-t-xl">
                  <motion.img
                    src={project.image}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 brightness-90 hover:brightness-110 transition-all duration-500"
                  />
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-green-800/40 text-white rounded-lg border border-green-400/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-1 text-base font-bold text-green-400">
                    {project.title}
                  </div>
                  <div className="mb-2 text-lg font-semibold text-white">
                    {project.subtitle}
                  </div>
                  <p className="mb-3 text-white/75">{project.desc}</p>

                  <div className="space-y-1 text-sm mt-2">
                    <div>
                      <span className="font-bold text-green-400">Challenge: </span>
                      <span className="text-white">{project.challenge}</span>
                    </div>
                    <div>
                      <span className="font-bold text-green-400">Solution: </span>
                      <span className="text-white">{project.solution}</span>
                    </div>
                    <div>
                      <span className="font-bold text-green-400">Result: </span>
                      <span className="text-white">{project.result}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ MODAL WITH CLOSE BUTTON (ORIGINAL) */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black backdrop-blur-lg flex items-center justify-center px-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.7, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 40 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full rounded-2xl overflow-hidden bg-black/70 p-6 border border-green-700"
            >
              <img
                src={active.image}
                className="w-full h-72 object-cover rounded-xl mb-6 opacity-90 hover:opacity-100"
              />

              <h2 className="text-2xl font-bold text-green-400 mb-2">
                {active.title}
              </h2>
              <h3 className="text-xl text-white/80 mb-4">
                {active.subtitle}
              </h3>
              <p className="text-white/80 mb-4">{active.desc}</p>

              <button
                onClick={() => setActive(null)}
                className="mt-4 px-6 py-2 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
