import { FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#FFFDF7] text-[#4A0404] border-t border-[#D4AF37]/20">
      <div className="flex flex-col items-center gap-6">
        
        {/* Warm Message */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-serif font-bold text-[#D4AF37]">Thank You</h3>
          <p className="font-body text-lg max-w-md mx-auto italic">
            "Your support makes our day extra special."
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 text-4xl my-4">
          <a href="https://instagram.com/blissful_bundles.za" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition-transform drop-shadow-sm hover:drop-shadow-md" aria-label="Instagram">
            <FaInstagram />
          </a> 
          <a href="https://wa.me/27726722902" target="_blank" rel="noreferrer" className="text-[#25D366] hover:scale-110 transition-transform drop-shadow-sm hover:drop-shadow-md" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        {/* Navigation Links (Simple Row) */}
        <div className="flex gap-6 font-serif font-medium text-lg">
           <a href="#products" className="hover:text-[#D4AF37] transition-colors">Bundles</a>
           <a href="https://wa.me/27726722902" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>

        {/* Bottom Details */}
        <div className="text-sm font-body opacity-80 mt-4 space-y-1">
          <p className="font-bold flex items-center justify-center gap-1 text-base">
            Made with <FaHeart className="text-[#BE123C] animate-pulse" /> by Blissful Bundles
          </p> 
          <p className="text-[#D4AF37] font-semibold tracking-wide">Valentine's Offer Valid Until: 12 Feb 2026</p>
          <p className="text-xs mt-4 opacity-50">Copyright © 2026 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
