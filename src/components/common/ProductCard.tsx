import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative pb-[75%] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.discountPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Sale
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="text-sm text-amber-600 font-medium mb-1 capitalize">
            {product.category}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex justify-between items-end">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-gray-900 font-bold">
                    KSh {product.discountPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm line-through ml-2">
                    KSh {product.price.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span className="text-gray-900 font-bold">
                  KSh {product.price.toLocaleString()}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center bg-amber-500 text-white p-2 rounded-full transition-colors hover:bg-amber-600"
              aria-label="Add to cart"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;