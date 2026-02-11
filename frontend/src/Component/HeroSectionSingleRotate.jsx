const HeroSectionSingleImage = () => {
  return (
    <section id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/moo.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Left Text + Button */}
      <div className="relative md:w-1/2 text-center md:text-left space-y-6 z-10">
        <button className="px-6 py-2 bg-gray-600 border-2 border-green-600 text-[15px] text-white font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-2xl">
Web Collection Technology
        </button>
        <h1 className="text-4xl font-extrabold text-white leading-tight">
Smater Mapping & Environmental Insights with Geospatial AI
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed">

We design sophisticated digital solutions that transform complex data into actionable insights.
        </p>
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-2xl">
        View
        </button>
      </div>

      {/* Right Image with rotation + hover glow */}
      <div className="relative md:w-1/2 flex justify-center mt-14 md:mt-0 z-10">
        <img id="img"
          src="any.png"
          alt="earth"
          className="w-65 h-65 md:w-96 md:h-96 rounded-full object-cover  border-2 border-green-400 transition-shadow duration-500"
          style={{
            animation: "spin 20s linear infinite",
          }}
        />
        <div className="absolute bottom-0 w-80 h-6 md:w-96 md:h-8 bg-green-400/50 rounded-full blur-3xl"></div>
      </div>

      {/* Inline keyframes + hover shadow */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        #img {
          box-shadow: 0 0 40px 15px rgba(0, 255, 0, 0.5); /* green glow */
        }
      `}</style>
    </section>
  );
};

export default HeroSectionSingleImage;
