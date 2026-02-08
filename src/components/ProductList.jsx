import { useAtomValue } from 'jotai';
import { productsAtom } from '../store/atoms';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = useAtomValue(productsAtom);

  return (
    <div id="products" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Our Collection
          <span className="block text-lg font-normal text-gray-500 mt-2">Thoughtfully Wrapped for You</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
