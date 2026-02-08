// src/components/ProductCard.jsx
import { useAtomValue } from 'jotai';
import { pricesAtom } from '../store/atoms';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const prices = useAtomValue(pricesAtom); 
  
  const price = prices[product.slug];
  let displayPrice = 'Contact for Pricing';
  if (price) {
    displayPrice = `R${price}`;
  } else if (product.startingPrice) {
    displayPrice = `From: R${product.startingPrice}`;
  }

  const handleOrderClick = () => {
    let message = `Hi, I'm interested in the ${product.name}`;
    if (product.details) message += ` (${product.details})`;
    message += `. Could you please share more details?`;
    
    const url = `https://wa.me/27726722902?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/20 transform hover:-translate-y-1">
      <figure className="relative h-72 w-full overflow-hidden">
        {product.imagePath ? (
          <img 
            src={product.imagePath} 
            alt={product.name} 
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/400x300?text=Image+Unavailable";
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#FFFDF7] text-[#D4AF37] font-medium">
            <span>Image Coming Soon</span>
          </div>
        )}
        {product.details && (
          <div className="absolute top-3 right-3 bg-[#BE123C] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
            {product.details}
          </div>
        )}
      </figure>
      
      <div className="card-body p-6 flex flex-col justify-between bg-white">
        <div>
          <h2 className="card-title text-2xl font-serif font-bold text-[#4A0404] mb-2">
            {product.name}
            {product.isAddOn && <div className="badge badge-outline border-[#D4AF37] text-[#D4AF37] text-xs ml-2">Add-on</div>}
          </h2>
          
          <p className="text-[#854D0E] text-sm leading-relaxed mb-4 font-body opacity-90">{product.description}</p>
        </div>
        
        <div>
           <div className="text-2xl font-serif font-bold text-[#D4AF37] mb-6 drop-shadow-sm">
             {displayPrice}
           </div>

          <div className="card-actions justify-end w-full">
            <button 
              onClick={handleOrderClick}
              className="btn w-full bg-[#25D366] hover:bg-[#128C7E] text-white border-none gap-2 shadow-lg hover:shadow-xl transition-all btn-lg normal-case rounded-full font-bold"
            >
              <FaWhatsapp className="text-2xl" />
              Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
