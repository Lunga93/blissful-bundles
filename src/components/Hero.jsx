import { motion } from 'framer-motion';
import { FaHeart, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero min-h-screen relative overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/WhatsApp Video 2026-02-08 at 21.54.13.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability - Lighter/Warmer tint */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-black/20 to-transparent z-0"></div>

      <div className="hero-content text-center z-10 text-white w-full max-w-4xl">
        <div className="w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md text-[#FFFDF7] rounded-full font-bold mb-8 text-sm uppercase tracking-widest shadow-lg border border-[#D4AF37]/50">
              <FaHeart className="text-[#BE123C] animate-pulse" /> Valentine's Day Special
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-[#FFFDF7] drop-shadow-2xl mb-6 tracking-tight leading-tight">
              Blissful Bundles
            </h1>
            
            <p className="text-3xl md:text-4xl text-[#D4AF37] font-serif italic mb-10 drop-shadow-lg tracking-wide">
              "Thoughtfully Wrapped"
            </p>
            
            <p className="py-6 text-xl md:text-2xl text-gray-100 leading-relaxed mb-12 drop-shadow-md font-light max-w-2xl mx-auto">
              Curated handmade eternal roses, luxury chocolates, and fine wines. 
              <br/><span className="text-[#F472B6] font-medium">Limited slots available.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#products" 
                className="btn btn-lg rounded-full px-12 py-4 bg-[#D4AF37] hover:bg-[#B89628] text-[#4A0404] border-none shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] transition-all font-serif font-bold text-lg"
              >
                Explore Bundles
              </a>
              <a 
                href="https://wa.me/27726722902" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline btn-lg rounded-full px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-[#4A0404] hover:border-white transition-all font-serif font-bold text-lg"
              >
                Custom Request
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a href="#products" className="text-white/80 hover:text-[#D4AF37] transition-colors drop-shadow-lg">
          <FaChevronDown size={32} />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
