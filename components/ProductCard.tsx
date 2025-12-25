
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Badge } from './UI';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestseller && <Badge variant="pink">Bestseller</Badge>}
          <Badge>{product.category}</Badge>
        </div>
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Link to={`/product/${product.id}`} className="bg-white text-forest p-3 rounded-full hover:bg-leafy hover:text-white transition-colors shadow-md">
            <Eye size={20} />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="bg-leafy text-white p-3 rounded-full hover:bg-forest transition-colors shadow-md"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="hover:text-leafy transition-colors">
            <h3 className="text-xl font-serif font-bold text-forest">{product.name}</h3>
          </Link>
          <span className="text-xl font-bold text-leafy">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="text-yellow-400 fill-yellow-400" size={16} />
          <span className="text-sm font-medium text-forest/70">{product.rating} ({product.reviews} reviews)</span>
        </div>

        <p className="text-forest/60 text-sm line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};
