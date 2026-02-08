import Lottie from "lottie-react";
import wavingGirlAnimation from "../assets/waving-girl.json";
import { motion } from "framer-motion";

const WavingGirl = () => {
  const whatsappUrl = "https://wa.me/27726722902?text=Hi%2C%20I%20have%20a%20question%20about%20Blissful%20Bundles";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-4 right-4 z-50 cursor-pointer w-24 h-24 sm:w-32 sm:h-32 hover:scale-110 transition-transform"
      onClick={() => window.open(whatsappUrl, "_blank")}
    >
      <div className="relative w-full h-full">
        {/* Tooltip on hover */}
        <div className="absolute -top-10 right-0 bg-white px-3 py-1 rounded-full shadow-lg text-sm font-medium text-primary whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none group-hover:opacity-100">
          Chat with us! 👋
        </div>
        <Lottie 
          animationData={wavingGirlAnimation} 
          loop={true} 
          className="w-full h-full drop-shadow-xl"
        />
      </div>
    </motion.div>
  );
};

export default WavingGirl;
