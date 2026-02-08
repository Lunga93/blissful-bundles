// src/components/Testimonials.jsx
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, image: '/assets/customer_testimonial_1.jpeg', alt: 'Customer Review 1' },
  { id: 2, image: '/assets/customer_testimonial_2.jpeg', alt: 'Customer Review 2' },
  { id: 3, image: '/assets/customer_testimonial_3.jpeg', alt: 'Customer Review 3' },
  { id: 4, image: '/assets/customer_testimonial_4.jpeg', alt: 'Customer Review 4' },
  { id: 5, image: '/assets/customer_testimonial_5.jpeg', alt: 'Customer Review 5' },
];

const Testimonials = () => {
  return (
    <div className="py-24 px-4 bg-[#FFFDF7]">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-4 text-[#4A0404]">
          Love Notes
        </h2>
        <p className="text-center text-[#D4AF37] font-serif italic text-xl mb-16">
          "What our customers are saying"
        </p>
        
        {/* Horizontal Scroll / Carousel Container */}
        <div className="relative">
            <div className="flex overflow-x-auto gap-8 pb-10 px-4 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="snap-center shrink-0 w-[80vw] md:w-96 relative group"
                >
                  <motion.div 
                    className="rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all duration-500 relative bg-white aspect-[3/4]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.alt} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                  </motion.div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
