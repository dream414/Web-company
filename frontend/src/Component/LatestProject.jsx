import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Projects data
const projects = [
  {
    id: 1,
    title: "GB Land Reform",
    description:
      "The GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021 project was carried out by Web Collection Technology Private Limited, led by its CEO Sadaqat Ali. The initiative was conducted under the supervision of DS Soni at the Jawari Center for Public Policies to support evidence-based land reform planning.",
    image:
      "https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png",
    badges: ["GIS based Data Collection", "Spatial Analysis", "Ortho mozaking"],
  },
  {
    id: 2,
    title: "3D Modelling Using Drone Imagery for urban planning",
    description:
      "This project involved creating a high-resolution 3D land model using drone imagery for urban planning purposes. It was executed by Web Collection Technology under the supervision of local government authorities.",
    image:
      "https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png",
    badges: ["Agisoft Metashape", "Pix4D", "Dji Modify"],
  },
  {
    id: 3,
    title: "Web Mapping & Land Categorization with Grid-Based Democration",
    description:
      "This project involved creating an interactive web map to categorize land parcels using point-based demarcation. A precise grid system aligned with the North-South pole was applied for accurate land division and visualization.",
    image:
      "https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png",
    badges: ["Google Earth Online", "ArcGIS Online", "Web GIS"],
  },
  {
    id: 4,
    title: "Negative Slope Analysis & Terrain Visualization Using DEM Data and GIS Tools",
    description:
      "This project focuses on identifying and visualizing negative slopes using high-resolution DEM data and GIS tools. ArcGIS was used for terrain analysis, while Google Earth Pro provided intuitive visual outputs for broader understanding.",
    image: "./4box.png",
    badges: ["ArcGIS", "Google Earth Pro", "High-resolution DEM data"],
  },
];
const featureImages = [
  "nm.png",
  "n2.png",
  "n3.png",
  "n4.png",
   "n5.png",
];


// Individual project detail components


const InfoBox = ({ title, value }) => (
  <div className="bg-[#111111] p-4 rounded-xl text-sm">
    <p className="text-gray-400">{title}</p>
    <p className="text-white font-medium">{value}</p>
  </div>
);

const GBLandReform = ({ onBack }) => {

  



  return (
    <section 
     className="bg-black text-white min-h-screen px-6 py-20">
      <div    className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button onClick={onBack} className="  text-black  hover:shadow-[0_0_35px_10px_rgba(0,255,0,0.7)]  hover:bg-white mb-10 cursor-pointer font-bold p-3 text-xl bg-green-600 rounded-3xl ">
         All Projects
        </button>

        {/* Breadcrumb */}
        <div className="flex gap-2 text-gray-400 text-sm mb-4">
             
            <a href="../" className="hover:text-green-400">Home</a> //
            <a href="../projects" className=" cursor-pointer  hover:text-green-400">Portfolio</a> //
            <span className="text-green-400 cursor-pointer  ">Portfolio Single</span>
          </div>

        {/* Title */}
        <h1 className="text-5xl  font-bold mb-6">GB LAND REFORM</h1>

        {/* Description */}
        <p className="text-gray-400 max-w-4xl mb-16">
          The "GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021"
          project was carried out by Web Collection Technology Private Limited,
          led by its CEO Sadaqat Ali. The initiative was conducted under the
          supervision of DS Soni at the Jawari Center for Public Policies to
          support evidence-based land reform planning.
        </p>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <InfoBox
            title="Client"
            value="Soni Jawari Center for Public Policy, Gilgit"
          />
          <InfoBox
            title="Industry"
            value="Web Collection Technology Private Limited"
          />
          <InfoBox title="Timeline" value="13 Weeks" />
          <InfoBox
            title="Technologies"
            value="GIS, Drone Survey, Google Imagery, Remote Sensing"
          />
        </div>

        {/* Main Image */}
        <img
          src="https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png"
          alt="GB Land Reform"
          className="rounded-3xl mb-24"
        />

        {/* Project Overview */}
        <section className="mb-20">
          <h2 className="text-3xl mb-6">Project Overview</h2>
          <p className="text-gray-300">
           GB Land Reform Data Collection and Spatial Analysis in Gilgit – 2021

This project aimed to collect, organize, and spatially analyze land-related data in the Gilgit region to support ongoing land reform initiatives. Conducted in 2021 by Web Collection Technology Private Limited under the leadership of CEO Sadaqat Ali, the project focused on integrating Geographic Information Systems (GIS) with field-collected data to provide accurate insights into land ownership, usage patterns, encroachments, and disputed areas.

Supervised by DS Soni at the Jawari Center for Public Policies, the initiative contributed to evidence-based policymaking by producing detailed spatial maps and reports. The project outcomes serve as a foundation for transparent decision-making, improved land governance, and sustainable development in Gilgit-Baltistan.
          </p>
        </section>

         {/*  Your Role */}
        <section className="mb-20">
          <h2 className="text-3xl mb-6">Your  Role</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Sadaqat Ali, serving as the Project Lead and GIS Specialist, oversaw the full planning and execution process — including data design, field coordination, spatial analysis, and stakeholder engagement.

The core project team from Web Collection Technology played the following roles:</li>
            <li>GIS Analysts conducted mapping, digitization, and spatial modeling.</li>
            <li>Survey & Data Collection Team carried out field surveys, community interviews, and digitized local land records.</li>
            <li>Data Entry & Management Unit processed tabular data and maintained database integrity.a</li>
            <li>Technical Support Team ensured the smooth functioning of GIS software, data tools, and equipment</li>
          </ul>

 {/* GIS Stack Used */}
       
          <h2 className="text-3xl mb-6">GIS Stack Used</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>ArcGIS Pro – For advanced spatial analysis, cartography, and data visualization.</li>
            <li>QGIS – As an open-source alternative for quick map editing, digitization, and plugin-based analysis.</li>
            <li>ArcGIS Online – For data sharing, web mapping, and stakeholder collaboration through interactive dashboards.</li>
            <li>Survey123 for ArcGIS – Used for structured field data collection via mobile devices with geotagged entries.</li>
            <li>Google Earth Pro – For historical imagery review, visual validation, and georeferencing support.</li>
            <li>PostgreSQL/PostGIS – For spatial database management and storage of georeferenced land records.</li>
            <li>Python (with ArcPy/QGIS APIs) – For automation of geoprocessing tasks and report generation.</li>
            <li>Excel & Power BI – For attribute data handling, tabular analysis, and basic charting.</li>
          </ul>
          

        {/* Key Features */}
       <h1 className="text-3xl font-bold">Key Features</h1>
          <h2 className=" mb-6">High-Resolution Spatial Mapping <br></br>
Digitized and georeferenced land parcels with precise boundary delineation for accurate spatial analysis.</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><h2 className="font-bold">Field-Based Data Collection</h2>
Integrated Survey123 and GPS-enabled devices for real-time, location-specific land data and ownership records.</li>
 <li><h2 className="font-bold">Identification of Disputed and Encroached Land</h2>
Mapped conflict zones and unauthorized land use areas to support legal and administrative actions.</li>
 <li><h2 className="font-bold">Integration of Spatial and Non-Spatial Data</h2>
Combined geographic features with land ownership, usage, and legal status data for comprehensive insights.</li>
 <li><h2 className="font-bold">Stakeholder Collaboration</h2>
Worked closely with local government bodies, policy centers, and community members for data validation and transparency.</li>
 <li><h2 className="font-bold">Interactive Thematic Maps</h2>
Produced multi-layered thematic maps highlighting land use patterns, ownership categories, and reform zones.</li>
 <li><h2 className="font-bold">Spatial Database Development</h2>
Created a structured spatial database using PostgreSQL/PostGIS for long-term land records management.</li>
 <li><h2 className="font-bold">Automated Reporting Tools</h2>
Used Python scripting for generating customized analytical reports and visual summaries for decision-makers.</li>
          </ul>

          <div className="font-black text-white h-10 bg-white/10 rounded-2xl mt-10  mb-10 p-2">Mapping ortho mozaking</div>
   {/* Challenges & Solutions */}
    <h1 className="text-3xl font-bold">Challenges or Solutions</h1>
          <p className="text-gray-300 mb-3">
            <strong>Challenge 1: Incomplete or Outdated Land Records</strong> <br></br>Solution: Conducted detailed field surveys and interviews with local landowners and community elders to validate and update records, ensuring data accuracy and completeness.
          </p>
          <p className="text-gray-300 mb-3">
            <strong>Challenge 2: Difficult Terrain and Accessibility</strong> <br></br> Solution: Utilized high-resolution satellite imagery, drone-based reconnaissance (where possible), and mobile GIS tools to map remote or inaccessible areas effectively.
          </p>
          <p className="text-gray-300 mb-3">
            <strong>Challenge 3: Lack of Standardized Data Formats</strong>   <br></br>Solution: Developed a unified data entry and classification system integrated with GIS databases to maintain consistency across all datasets.
          </p>
 <p className="text-gray-300 mb-3">
            <strong>Challenge 4: Disputed and Overlapping Land Claims</strong> <br></br>Solution: Mapped disputed zones separately with metadata tags and incorporated local stakeholder inputs to flag sensitive areas for further legal or administrative review.
          </p>
          <p className="text-gray-300 mb-3">
            <strong>Challenge 5: Limited Technical Capacity of Local Institutions</strong> <br></br> Solution: Provided technical training sessions on GIS tools and spatial data interpretation to local officials and collaborators for future use and maintenance.
          </p>
          <p className="text-gray-300 mb-3">
            <strong>Challenge 6: Data Privacy and Community Trust</strong>   <br></br>Solution: Ensured ethical data collection through informed consent and maintained confidentiality, which helped build trust and cooperation during fieldwork.
          </p>

         <div className="grid md:grid-cols-5 gap-6 mt-10">
  {featureImages.map((img, i) => (
    <div
      key={i}
      className="h-32 rounded-2xl overflow-hidden"
    >
      <img
        src={img}
        alt={`Feature ${i + 1}`}
        className="w-full h-full object-contain"
      />
    </div>
  ))}
</div>

        </section>

     
       

        {/* Output */}
        <section className="mb-24">
          <h2 className="text-3xl mb-6">Output</h2>
          <p className="text-gray-300">
           The GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021 project successfully produced detailed spatial datasets, interactive land maps, and a centralized digital land database. These outputs support transparent land reforms, reduce disputes, and enable evidence-based policymaking. The project has laid the groundwork for future digital governance in Gilgit-Baltistan.
          </p>
        </section>
 
        {/* More Projects */}
        <section>
          <h3 className="text-3xl  font-bold mb-10">More   Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl  font-bold mb-3">
                  3d modelling using drone imagery for urban planning
                </h3>
                <p className="text-gray-400  text-sm">
                  This project involved creating a high-resolution 3D land model using drone imagery for urban planning purposes. It was executed by Web Collection Technology under the supervision of local government authorities.
                </p>

                  <div className="flex flex-wrap mt-7 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                       Agisoft Metashape
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                       Pix4D
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                      Dji Modify
                        </span>   
                    </div>
              </div>
            </div>

            <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Web Mapping & Land Categorization With Grid-Based Democration
                </h3>
                <p className="text-gray-400 text-sm">
This project involved creating an interactive web map to categorize land parcels using point-based demarcation. A precise grid system aligned with the North-South pole was applied for accurate land division and visualization.
                </p>
                 <div className="flex flex-wrap mt-10 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                      Google Earth Online
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                     ArcGIS Online
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    Web GIS
                        </span>   
                    </div>
              </div>
            </div>





            
          </div>
        </section>
      

      </div>
    </section>
  );
};




const Drone3DProject = ({ onBack }) => (
    <div className="max-w-6xl mx-auto">
      
  <main className="relative bg-black text-white">
    {/* Back Button */}
        <button onClick={onBack} className="  text-black  hover:shadow-[0_0_35px_10px_rgba(0,255,0,0.7)] hover:bg-white mb-10  font-bold p-3 text-xl cursor-pointer bg-green-600 rounded-3xl ">
         All Projects
        </button>
      {/* Hero Section */}
      <section className="relative">
       

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto p-6">
          {/* Breadcrumb */}
          <div className="flex gap-2 text-gray-400 text-sm mb-4">
             
            <a href="../" className="hover:text-green-400">Home</a> //
            <a href="../projects" className=" cursor-pointer  hover:text-green-400">Portfolio</a> //
            <span className="text-green-400">Portfolio Single</span>
          </div>

          {/* Title & Subtext */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">
              3D MODELLING USING DRONE IMAGERY FOR URBAN PLANNING
            </h1>
            <p className="text-gray-400 max-w-2xl">
              This project involved creating a high-resolution 3D land model using drone imagery for urban planning purposes. It was executed by Web Collection Technology under the supervision of local government authorities.
            </p>
          </div>

          {/* Primary Button */}
          <a
            href="https://www.linkedin.com/posts/sadaqat-aly-24aa9918a_assistantabrcommissioner-gis-smartcity-activity-7201641969368862724-V7NO?utm_source=share&utm_medium=member_desktop&utm_medium=member_desktop&rcm=ACoAACynrxoBhYDMGp5J9lM2Vr4LaCiZCMO7nhI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-400 text-black font-semibold px-6 py-3 rounded-full mb-8"
          >
            Live Preview
          </a>

          {/* Client, Industry, Timeline, Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-8">
            <div>
              <p className="text-green-400 font-semibold">Client</p>
              <p>Assistant Collector</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Industry</p>
              <p>Local Government Authorities</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Timeline</p>
              <p>4 Weeks</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Technologies</p>
              <p>DJI Mavic 3 Drone</p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full h-[500px] mb-12 relative">
            <img
              src="https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-6xl mx-auto p-6 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
          <p>
            The 3D Land Modeling for Urban Planning project aimed to support local government planning efforts by generating accurate, high-resolution 3D models using drone imagery. Conducted by Web Collection Technology under the supervision of the Assistant and Deputy Collector, the project provided detailed spatial data and visualizations essential for effective land use planning, zoning, and infrastructure development. The month-long initiative included drone-based data acquisition, photogrammetric processing, and GIS-based analysis to produce orthomosaic maps, elevation models, and planning-ready outputs.
          </p>
        </div>


        <div>
          <h3 className="text-2xl font-bold mb-2">Your Role</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              As the CEO of Web Collection Technology, I served as the Project Manager and certified Drone Operator for this project. I led the overall planning, supervised drone flight operations, managed the technical team, and ensured accurate data acquisition and 3D model generation. I also coordinated directly with local government officials, ensuring the project met all requirements under the supervision of the Assistant and Deputy Collector.My role was central to maintaining quality, timelines, and delivering actionable outputs for urban planning.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Tech Stack Used</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Drone Technology:</strong> DJI Phantom 4 Pro (or equivalent) for high-resolution aerial imagery acquisition</li>
            <li><strong>Photogrammetry Software:</strong> Agisoft Metashape / Pix4D for processing drone images into 3D models, orthomosaics, and point clouds</li>
            <li><strong>GIS Tools:</strong> ArcGIS Pro and QGIS for spatial analysis, terrain modeling, and map generation</li>
            <li><strong>3D Modeling Software:</strong> Blender and SketchUp for refining 3D visualizations and urban planning simulations</li>
            <li><strong>Data Management:</strong> GeoTIFF, LAS/LAZ, and shapefile formats for storing and sharing spatial data</li>
            <li><strong>Coordinate System:</strong> WGS 84 / UTM Zone for georeferencing and spatial accuracy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Key Features</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>📸 <strong>High-Resolution Drone Imagery:</strong> Accurate aerial data captured for detailed analysis and modeling.</li>
            <li>🌐 <strong>3D Terrain and Surface Modeling:</strong> Realistic digital models for visualizing land elevation and structure.</li>
            <li>🗺️ <strong>Orthomosaic and Topographic Maps:</strong> Geo-referenced maps to support urban planning and documentation.</li>
            <li>📊 <strong>Slope and Elevation Analysis:</strong> Critical for identifying suitable zones for infrastructure and construction.</li>
            <li>🏙️ <strong>Urban Planning Visualizations:</strong> 3D outputs to aid planners and decision-makers in land use planning.</li>
            <li>⚙️ <strong>GIS-Based Spatial Analysis:</strong> Advanced geospatial tools used for accurate area, distance, and zoning assessments.</li>
            <li>📁 <strong>Deliverable Formats:</strong> Models and maps delivered in industry-standard formats for easy integration into planning workflows.</li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold ">Structure Overview</h1>
         <div className="bg-gray-900 font-bold text-green-400 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto">
      <pre>
{`3D modelling /src
├── main.js (entry point)
├── app/
│   ├── App.js        # Initializes the scene, renderer, camera
│   └── Config.js     # Constants, paths, settings
├── engine/
│   ├── SceneManager.js   # Manages scene lifecycle
│   ├── Renderer.js       # WebGL or engine-specific rendering logic
│   ├── CameraManager.js  # Handles camera creation and movement
│   └── Controls.js       # OrbitControls or custom navigation`}
      </pre>
    </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Challenges & Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Challenge:</strong> Unpredictable Weather Conditions<br/>
              <strong>Solution:</strong> Flight operations were scheduled during clear weather windows, and multiple flights were conducted to ensure complete and clear data capture.
            </li>
            <li>
              <strong>Challenge:</strong> Rugged and Uneven Terrain<br/>
              <strong>Solution:</strong> Ground Control Points (GCPs) were strategically placed to improve georeferencing accuracy in challenging areas.
            </li>
            <li>
              <strong>Challenge:</strong> Large Volume of Data Processing<br/>
              <strong>Solution:</strong> High-performance computing systems and optimized workflows in Agisoft Metashape were used to speed up processing and reduce errors.
            </li>
            <li>
              <strong>Challenge:</strong> Coordination with Local Authorities<br/>
              <strong>Solution:</strong> Regular briefings and on-site meetings were conducted with the Assistant and Deputy Collector to ensure smooth execution and compliance.
            </li>
            <li>
              <strong>Challenge:</strong> Ensuring Spatial Accuracy<br/>
              <strong>Solution:</strong> Used high-precision GNSS devices for GCP collection and maintained rigorous QA/QC during GIS analysis.
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            "https://framerusercontent.com/images/uVwnFJaxLCCqdF9GiziPGfJ8.jpeg",
            "https://framerusercontent.com/images/z8f1ScsNVazSnyuTHO3ZEaIQJfk.jpeg",
            "https://framerusercontent.com/images/zWxWcr4q7Nm8nYqamkVLkQ0sFJg.jpeg",
            "https://framerusercontent.com/images/66GRP0KERbYgnyvn176scqJGv8k.png",
            "https://framerusercontent.com/images/ZupHRImArbKijPG9AzgfoMawT9w.png"
          ].map((src, i) => (
            <div key={i} className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <img src={src} alt={`Project image ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
       <div>
          <h3 className="text-2xl font-bold mb-2">Client satisfaction</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Challenge:</strong> Unpredictable Weather Conditions<br/>
              <strong>Solution:</strong> Flight operations were scheduled during clear weather windows, and multiple flights were conducted to ensure complete and clear data capture.
            </li>
            <li>
              <strong>Challenge:</strong> Rugged and Uneven Terrain<br/>
              <strong>Solution:</strong> Ground Control Points (GCPs) were strategically placed to improve georeferencing accuracy in challenging areas.
            </li>
            <li>
              <strong>Challenge:</strong> Large Volume of Data Processing<br/>
              <strong>Solution:</strong> High-performance computing systems and optimized workflows in Agisoft Metashape were used to speed up processing and reduce errors.
            </li>
            <li>
              <strong>Challenge:</strong> Coordination with Local Authorities<br/>
              <strong>Solution:</strong> Regular briefings and on-site meetings were conducted with the Assistant and Deputy Collector to ensure smooth execution and compliance.
            </li>
            <li>
              <strong>Challenge:</strong> Ensuring Spatial Accuracy<br/>
              <strong>Solution:</strong> Used high-precision GNSS devices for GCP collection and maintained rigorous QA/QC during GIS analysis.
            </li>
          </ul>
        </div>

          {/* More Projects */}
        <section>
          <h3 className="text-3xl  font-bold m-10">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl  font-bold mb-3">
                 GB Land Reform
                </h3>
                <p className="text-gray-400  text-sm">
                 The GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021 project was carried out by Web Collection Technology Private Limited, led by its CEO Sadaqat Ali. The initiative was conducted under the supervision of DS Soni at the Jawari Center for Public Policies to support evidence-based land reform planning
                </p>
                  <div className="flex flex-wrap mt-7 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    GIS based Data Collection
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    Spatial Analysis
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                  Ortho mozaking
                        </span>   
                    </div>
              </div>
            </div>

            <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Web Mapping & Land Categorization With Grid-Based Democration
                </h3>
                <p className="text-gray-400 text-sm">
This project involved creating an interactive web map to categorize land parcels using point-based demarcation. A precise grid system aligned with the North-South pole was applied for accurate land division and visualization.
                </p>
                 <div className="flex flex-wrap mt-10 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                      Google Earth Online
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                     ArcGIS Online
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    Web GIS
                        </span>   
                    </div>
              </div>
            </div>
          </div>
        </section>

       

    </main>
</div>
);

const WebMappingProject = ({ onBack }) => (

  
   <div className="max-w-6xl mx-auto">
  <main className="relative">
    {/* Back Button */}
        <button onClick={onBack} className="  text-black  hover:shadow-[0_0_35px_10px_rgba(0,255,0,0.7)] hover:bg-white mb-10  font-bold p-3 text-xl cursor-pointer bg-green-600 rounded-3xl ">
         All Projects
        </button>
      {/* Hero Section */}
      <section className="relative">
       
       

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto p-6">
          {/* Breadcrumb */}
           
          <div className="flex gap-2 text-gray-400 text-sm mb-4">
             
            <a href="../" className="hover:text-green-400">Home</a> //
            <a href="../projects" className="hover:text-green-400">Portfolio</a> //
            <span className="text-green-400 hover:cursor-pointer">Portfolio Single</span>
          </div>

          {/* Title & Subtext */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">
              WEB MAPPING & LAND CATEGORIZATION WITH GRIRD-BASED DEMARCATION
            </h1>
            <p className="text-gray-400 max-w-2xl">
             This project involved creating an interactive web map to categorize land parcels using point-based demarcation. A precise grid system aligned with the North-South pole was applied for accurate land division and visualization.
            </p>
          </div>

          {/* Primary Button */}
          <a href="https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-400 text-black font-semibold px-6 py-3 rounded-full mb-8"
          >
            Live Preview
          </a>

          {/* Client, Industry, Timeline, Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-8">
            <div>
              <p className="text-green-400 font-semibold">Client</p>
              <p>Barney Joy</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Industry</p>
              <p>land and infrasturecture</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Timeline</p>
              <p>2 Weeks</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Technologies</p>
              <p>Web GIS, GIS and Remote Sensing </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full h-[500px] mb-12 relative">
            <img
              src="THREE.png"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-6xl mx-auto p-6 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
          <p>
          This project focused on developing an interactive web map for land categorization and visualization using client-provided point demarcations. Each land parcel was digitized and systematically divided using a grid aligned with the North-South pole for spatial accuracy. The map allows users to view, navigate, and analyze land categories efficiently. The project was executed using professional GIS tools and web mapping libraries to ensure accuracy, responsiveness, and usability for land assessment and planning purposes.      </p>
        </div>


        <div>
          <h3 className="text-2xl font-bold mb-2">Your Role</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
            As the GIS expert and web mapping developer, I was responsible for the entire workflow—from interpreting the client’s point data to delivering a fully functional web map. I digitized land parcels, applied a precise North-South aligned grid system, categorized land types, and built an interactive map interface. I ensured spatial accuracy, clean design, and user-friendly navigation while maintaining clear communication with the client throughout the project.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Tech Stack Used</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>ArcGIS Pro: </strong> For advanced geoprocessing, coordinate alignment, and map layout design</li>
            <li><strong>Leaflet.js:</strong> Lightweight JavaScript library for building the interactive web map</li>
            <li><strong>Mapbox:</strong> For customized basemaps and smooth tile rendering (if used)</li>
            <li><strong>GeoJSON & Shapefiles: </strong> For spatial data storage, sharing, and integration</li>
            <li><strong>TML/CSS/JavaScript: </strong>To structure, style, and power the web mapping interface</li>
            <li><strong>Coordinate System:</strong>WGS 84 (EPSG:4326) for global alignment with the North-South pole directionWGS 84 (EPSG:4326) for global alignment with the North-South pole direction imized.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Key Features</h3>
          <h3 className="text-xl  mb-2">Point-Based Land Demarcation: Accurate digitization of client-provided points to define land parcel boundaries.</h3>
          <ul className="list-disc list-inside space-y-2">
            <li> <strong>🗺️ North-South Aligned Grid System:</strong>Grid overlay aligned with Earth's poles for consistent spatial orientation.</li>
            <li>🌐 <strong> Interactive Web Map:</strong> User-friendly, browser-accessible map for easy viewing and navigation.</li>
            <li>🗺️ <strong>Orthomosaic and Topographic Maps:</strong> Geo-referenced maps to support urban planning and documentation.</li>
            <li> <strong>🏷️ Land Categorization: </strong>Visual representation of land parcels by type or use with clear labels and color coding.</li>
            <li> <strong>🔍 Zoom & Pan Controls:</strong>Smooth navigation for detailed exploration of specific land areas.</li>
            <li> <strong>📂 Data Integration:</strong>Support for GeoJSON and shapefile formats for future use or analysis.</li>
            <li> <strong>💡 Responsive Design:</strong>  Optimized for desktop and mobile viewing.</li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold ">  Code Structure Overview</h1>
         <div className="bg-gray-900 font-bold text-green-400 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto">
      <pre>
{`web-mapping-project/
│
├── index.html
├── style.css
├── script.js
├── data/
│   ├── parcels.geojson
│   └── grid.geojson
├── assets/
│   └── icons, logos, etc.
└── libs/
    └── leaflet.js, leaflet.css`}
      </pre>
    </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Challenges & Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Challenge:</strong>  Irregular Point Demarcation<br/>
              <strong>Solution:</strong>  Carefully cleaned and validated the input point data in QGIS to ensure proper alignment before parcel creation.
            </li>
            <li>
              <strong>Challenge:</strong>Aligning Grid with North-South Pole<br/>
              <strong>Solution:</strong>Used WGS 84 coordinate reference system and automated grid generation tools in QGIS to ensure precise North-South alignment.
            </li>
            <li>
              <strong>Challenge:</strong>Performance Issues with Web Map Rendering<br/>
              <strong>Solution:</strong> Optimized GeoJSON files by simplifying geometries and reducing file size to ensure smooth loading in Leaflet.js.
            </li>
            <li>
              <strong>Challenge:</strong> Category Visualization Confusion<br/>
              <strong>Solution:</strong>  Implemented clear color coding and popup labels for each land category to improve map readability and user understanding.
            </li>
            <li>
              <strong>Challenge:</strong>Cross-Browser Compatibility<br/>
              <strong>Solution:</strong> Tested the web map on multiple browsers (Chrome, Firefox, Edge) and used standardized HTML, CSS, and JS libraries for consistent behavior.
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            "p1.png",
            "p2.png",
            "p3.png",
            "p3.png",
          ].map((src, i) => (
            <div key={i} className="relative w-full h-7b4 md:h-90 rounded-xl overflow-hidden">
              <img src={src} alt={`Project image ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
        <section className="mb-24">
          <h2 className="text-3xl mb-6">Takeaways</h2>
          <p className="text-gray-300">
          "Outstanding work! Sadaqat delivered exactly what I needed – a clean, interactive web map with accurate land parcel demarcation and a well-aligned grid system. His communication was clear, the delivery was on time, and the technical quality exceeded my expectations. Highly recommended for any GIS or mapping project!"Ask ChatGPT
          </p>
        </section>
      {/* More Project */}
  {/* More Projects */}
        <section>
          <h3 className="text-3xl  font-bold m-10">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl  font-bold mb-3">
                 GB Land Reform
                </h3>
                <p className="text-gray-400  text-sm">
                 The GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021 project was carried out by Web Collection Technology Private Limited, led by its CEO Sadaqat Ali. The initiative was conducted under the supervision of DS Soni at the Jawari Center for Public Policies to support evidence-based land reform planning
                </p>
                  <div className="flex flex-wrap mt-7 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    GIS based Data Collection
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    Spatial Analysis
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                  Ortho mozaking
                        </span>   
                    </div>
              </div>
            </div>

 <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl  font-bold mb-3">
                  3d modelling using drone imagery for urban planning
                </h3>
                <p className="text-gray-400  text-sm">
                  This project involved creating a high-resolution 3D land model using drone imagery for urban planning purposes. It was executed by Web Collection Technology under the supervision of local government authorities.
                </p>

                  <div className="flex flex-wrap mt-7 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                       Agisoft Metashape
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                       Pix4D
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                      Dji Modify
                        </span>   
                    </div>
              </div>
            </div>
          
          </div>
        </section>


      </main>
      </div>

);

const NegativeSlopeProject = ({ onBack }) => (
   <div className="max-w-6xl mx-auto">
  <main className="relative">
    {/* Back Button */}
        <button onClick={onBack} className="  text-black  hover:shadow-[0_0_35px_10px_rgba(0,255,0,0.7)] hover:bg-white mb-10  font-bold p-3 text-xl cursor-pointer bg-green-600 rounded-3xl ">
         All Projects
        </button>
      {/* Hero Section */}
      <section className="relative">
       
       

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto p-6">
          {/* Breadcrumb */}
           
          <div className="flex gap-2 text-gray-400 text-sm mb-4">
             
            <a href="../" className="hover:text-green-400">Home</a> //
            <a href="../projects" className="hover:text-green-400">Portfolio</a> //
            <span className="text-green-400 hover:cursor-pointer">Portfolio Single</span>
          </div>

          {/* Title & Subtext */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">
              Negative Slope Analysis and Terrain Visualization Using DEM Data and GIS Tools
            </h1>
            <p className="text-gray-400 max-w-2xl">
            This project focuses on identifying and visualizing negative slopes using high-resolution DEM data and GIS tools. ArcGIS was used for terrain analysis, while Google Earth Pro provided intuitive visual outputs for broader understanding.
            </p>
          </div>

          {/* Primary Button */}
          <a href="https://framerusercontent.com/images/qJRrqt6I0kUZlRP91PlApvyFCs.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-400 text-black font-semibold px-6 py-3 rounded-full mb-8"
          >
            Live Preview
          </a>

          {/* Client, Industry, Timeline, Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm mb-8">
            <div>
              <p className="text-green-400 font-semibold">Client</p>
              <p>APrilbonifatto</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Industry</p>
              <p>Fiverr</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Timeline</p>
              <p>1 Weeks</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold">Technologies</p>
              <p>GIS and Romote sensing  </p>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full h-[500px] mb-12 relative">
            <img
              src="./4box.png"
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-6xl mx-auto p-6 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Project Overview</h3>
          <p>
          This project focuses on analyzing terrain elevation and identifying negative slopes using high-resolution Digital Elevation Model (DEM) data. The methodology involves processing spatial data in ArcGIS to calculate slope values, isolating areas with downward gradients, and organizing the results in Excel for clarity. The processed data is then visualized in Google Earth Pro, overlaying slope and elevation values on satellite imagery for intuitive understanding. The final outputs are exported as high-resolution maps to support terrain interpretation, drainage analysis, and land-use planning.      </p>
        </div>


        <div>
          <h3 className="text-2xl font-bold mb-2">Your Role</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
           As the GIS Analyst and Project Lead, I was responsible for the complete execution of this project—from DEM data processing to final visualization. I conducted detailed terrain and slope analysis in ArcGIS, focusing on identifying negative slopes. I organized and filtered the data in Excel for clarity and extracted meaningful patterns. Finally, I visualized the results in Google Earth Pro and produced high-quality map outputs, ensuring the findings were both technically accurate and easily understandable for non-specialist audiences.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Tech Stack Used</h3>
          <ul className="list-disc list-inside space-y-2">
            <p>ArcGIS Pro: For DEM processing, slope calculation, terrain analysis, and spatial data management</p>
            <li><strong>Google Earth Pro: </strong>For overlaying slope data on satellite imagery and generating user-friendly visualizations </li>
            <li><strong>Microsoft Excel:</strong>For organizing, filtering, and highlighting slope values and elevation data</li>
            <li><strong>High-Resolution DEM Data: </strong> Core input dataset for elevation and slope analysis</li>
            <li><strong>WGS 84 (EPSG:4326): </strong>Coordinate reference system used for geospatial consistency and global alignment</li>
            <li><strong>KML/KMZ & GeoTIFF Formats :</strong>For data export and visualization in mapping tools</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Key Features</h3>
         
          <ul className="list-disc list-inside space-y-2">
            <li> <strong>📍 Accurate Negative Slope Detection:</strong>Identified and analyzed terrain areas where elevation declines, useful for drainage and hazard mapping.</li>
            <li><strong> 🌐 High-Resolution DEM Analysis: </strong>  Used detailed elevation data for precise slope and terrain modeling.</li>
            <li> <strong>🗺️ GIS-Based Terrain Mapping: </strong>  Applied ArcGIS tools for elevation, slope, and feature extraction.</li>
            <li> <strong>📊 Organized Slope Data in Excel:  </strong>Filtered and categorized slope values for easy interpretation and comparison.</li>
            <li> <strong>🛰️ Real-World Visualization: </strong> Mapped slope and elevation data over satellite imagery using Google Earth Pro.</li>
            <li> <strong>🖼️ High-Quality Map Outputs: </strong> Exported final annotated maps as JPGs for reports, presentations, and client sharing.</li>
            <li> <strong>🔄 Consistent Methodology: </strong> Followed a repeatable and reliable workflow for accuracy across multiple studies. </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold ">  Code Structure Overview</h1>
         <div className="bg-gray-900 font-bold text-green-400 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto">
      <pre>
{`No Code`}
      </pre>
    </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Challenges & Solutions</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Challenge:</strong>  Irregular Elevation Data or Noisy DEM<br/>
              <strong>Solution:</strong> Applied data smoothing and pre-processing techniques in ArcGIS to enhance DEM accuracy before slope calculation. Challenge: Difficulty in Isolating Negative Slopes
            </li>
            <li>
             
              <strong>Solution:</strong> Customized slope analysis parameters and used conditional tools in ArcGIS to specifically extract and highlight negative gradient values. Challenge: Complex Data Interpretation for Non-Technical Users
            </li>
             <strong>Solution:</strong> Transferred key data points into Google Earth Pro with clear labels and visual cues, making slope changes easy to understand visually. 
           
            <li>
              <strong>Challenge:</strong>Large Data Handling Across Platforms<br/>
              <strong>Solution:</strong> Organized and structured the dataset in Excel with filters and categories to streamline processing and analysis. 
            </li>
            <li>
              <strong>Challenge:</strong>Maintaining Geospatial Accuracy in Multiple Tools
Solution: Used consistent coordinate systems (WGS 84) and file formats (GeoTIFF, KML) to ensure data integrity during cross-platform transfers. Ask ChatGPT<br/>
              <strong>v fast and bundle efficiently; minimized unused CSS and deferred image loading.</strong> 
            </li>
            <li>
              <strong>Challenge:</strong>Cross-Browser Compatibility<br/>
              <strong>Solution:</strong> Tested the web map on multiple browsers (Chrome, Firefox, Edge) and used standardized HTML, CSS, and JS libraries for consistent behavior.
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            "42.png",
            "43.png",
            "44.png",
            "45.png",
          ].map((src, i) => (
            <div key={i} className="relative w-full h-74 md:h-90 rounded-xl overflow-hidden">
              <img src={src} alt={`Project image ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>
        <section className="mb-24">
          <h2 className="text-3xl mb-6">Review</h2>
          <p className="text-gray-300">
         "Excellent work! The analysis was detailed, accurate, and well-presented. Sadaqat demonstrated strong GIS expertise, especially in identifying and visualizing negative slopes. The final maps were easy to understand and perfectly suited for our planning needs. Highly recommended for any terrain or spatial analysis project."
          </p>
        </section>
      {/* More Project */}
  {/* More Projects */}
        <section>
          <h3 className="text-3xl  font-bold m-10">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/sPBMYWlrLtEBuhJIu1Bkz9TUN4c.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl  font-bold mb-3">
                 GB Land Reform
                </h3>
                <p className="text-gray-400  text-sm">
                 The GB Land Reform Data Collection and Spatial Analysis in Gilgit 2021 project was carried out by Web Collection Technology Private Limited, led by its CEO Sadaqat Ali. The initiative was conducted under the supervision of DS Soni at the Jawari Center for Public Policies to support evidence-based land reform planning
                </p>
                  <div className="flex flex-wrap mt-7 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    GIS based Data Collection
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                    Spatial Analysis
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                  Ortho mozaking
                        </span>   
                    </div>
              </div>
            </div>

 <div className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/qYlZ1n3uAqXRhiOPVfli4GisaA.png"
                className="h-64 w-full object-cover"
                alt=""
              />
              <div className="p-6">
                <h3 className="text-xl  font-bold mb-3">
                  3d modelling using drone imagery for urban planning
                </h3>
                <p className="text-gray-400  text-sm">
                  This project involved creating a high-resolution 3D land model using drone imagery for urban planning purposes. It was executed by Web Collection Technology under the supervision of local government authorities.
                </p>

                  <div className="flex flex-wrap mt-7 gap-2">
                        <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                       Agisoft Metashape
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                       Pix4D
                        </span>
                          <span className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400" >
                      Dji Modify
                        </span>   
                    </div>
              </div>
            </div>
          
          </div>
        </section>


      </main>
      </div>

);

// LatestProject Component
const LatestProject = memo(() => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const renderDetail = () => {
    switch (activeProjectId) {
      case 1:
        return <GBLandReform onBack={() => setActiveProjectId(null)} />;
      case 2:
        return <Drone3DProject onBack={() => setActiveProjectId(null)} />;
      case 3:
        return <WebMappingProject onBack={() => setActiveProjectId(null)} />;
      case 4:
        return <NegativeSlopeProject onBack={() => setActiveProjectId(null)} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      <AnimatePresence mode="wait">
        {!activeProjectId ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center mb-16">
            <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20 text-4xl md:text-5xl font-extrabold text-white text-center"
                      >
                      A Showcase Of My Latest Project
                      </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
              {projects.map((p) => (
                <motion.div
                  key={p.id}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveProjectId(p.id)}
                  className="cursor-pointer bg-[#0f0f0f] rounded-3xl overflow-hidden border-2 h-full"
                >
                  <img src={p.image} alt={p.title} className="h-96 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl mb-3 font-bold">{p.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.badges.map((b, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-white/10 rounded-full text-green-400"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          >
            {renderDetail()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

export default LatestProject;
