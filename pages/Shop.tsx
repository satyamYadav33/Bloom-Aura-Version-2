
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Search } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Category } from '../types';
import { SectionTitle } from '../components/UI';

export const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'lowToHigh' | 'highToLow' | 'popular'>('popular');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return b.rating - a.rating;
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle 
        title="Our Complete Collection" 
        subtitle="Bring nature home with our premium selection of plants and flowers."
      />

      {/* Filters Toolbar */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 sticky top-24 bg-cream/90 backdrop-blur-md z-30 py-4 border-b border-forest/10">
        <div className="flex flex-wrap items-center gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat 
                ? 'bg-leafy text-white shadow-lg' 
                : 'bg-white text-forest hover:bg-forest hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="relative flex-1 lg:min-w-[300px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40" size={18} />
            <input 
              type="text" 
              placeholder="Search plants..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-forest/10 rounded-full py-3 pl-12 pr-6 outline-none focus:border-leafy transition-colors"
            />
          </div>
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-forest/10 hover:border-leafy transition-colors">
              <SlidersHorizontal size={18} />
              <span className="text-sm font-medium">Sort By</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-forest/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-40">
              <button onClick={() => setSortOrder('popular')} className="w-full text-left px-6 py-3 text-sm hover:bg-leafy/10 transition-colors">Popularity</button>
              <button onClick={() => setSortOrder('lowToHigh')} className="w-full text-left px-6 py-3 text-sm hover:bg-leafy/10 transition-colors">Price: Low to High</button>
              <button onClick={() => setSortOrder('highToLow')} className="w-full text-left px-6 py-3 text-sm hover:bg-leafy/10 transition-colors">Price: High to Low</button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProducts.length === 0 && (
        <div className="text-center py-40">
          <SectionTitle 
            title="No plants found" 
            subtitle="Try adjusting your filters or search query to find what you're looking for."
            centered
          />
          <button 
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="text-leafy font-bold underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};
