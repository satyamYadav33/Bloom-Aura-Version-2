
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Truck, RotateCcw, Droplets, Sun, Wind, ChevronRight, Heart, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
// Fix: Added SectionTitle to the imports from '../components/UI'
import { Button, Badge, SectionTitle } from '../components/UI';
import { ProductCard } from '../components/ProductCard';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'reviews'>('details');

  if (!product) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-4xl font-serif mb-6">Product not found</h2>
      <Link to="/shop"><Button>Back to Shop</Button></Link>
    </div>
  );

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-forest/40 mb-12">
        <Link to="/" className="hover:text-leafy">Home</Link>
        <ChevronRight size={14} />
        <Link to="/shop" className="hover:text-leafy">Shop</Link>
        <ChevronRight size={14} />
        <span className="text-forest/80">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Gallery */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-leafy transition-all opacity-70 hover:opacity-100">
                <img src={product.image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="green">{product.category}</Badge>
              {product.isBestseller && <Badge variant="pink">Bestseller</Badge>}
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-forest mb-4">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-forest/60 font-medium">{product.reviews} Customer Reviews</span>
            </div>
          </div>

          <p className="text-4xl font-bold text-leafy mb-8">${product.price.toFixed(2)}</p>
          
          <p className="text-lg text-forest/70 mb-10 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:row gap-4 mb-12">
            <Button onClick={() => addToCart(product)} className="flex-1 py-4 text-lg">
              <ShoppingCart size={22} /> Add to Cart
            </Button>
            <Button variant="outline" className="w-14 h-14 p-0">
              <Heart size={24} />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 p-8 bg-white rounded-3xl border border-forest/5 mb-12">
            <div className="flex items-center gap-4">
              <div className="bg-leafy/10 p-3 rounded-2xl text-leafy"><Droplets size={24} /></div>
              <div>
                <p className="text-xs text-forest/40 uppercase font-bold tracking-wider">Water</p>
                <p className="font-semibold">{product.water}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-leafy/10 p-3 rounded-2xl text-leafy"><Sun size={24} /></div>
              <div>
                <p className="text-xs text-forest/40 uppercase font-bold tracking-wider">Sunlight</p>
                <p className="font-semibold">{product.sunlight}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-leafy/10 p-3 rounded-2xl text-leafy"><Wind size={24} /></div>
              <div>
                <p className="text-xs text-forest/40 uppercase font-bold tracking-wider">Difficulty</p>
                <p className="font-semibold">{product.careLevel}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-leafy/10 p-3 rounded-2xl text-leafy"><ShieldCheck size={24} /></div>
              <div>
                <p className="text-xs text-forest/40 uppercase font-bold tracking-wider">Clean Air</p>
                <p className="font-semibold">Purifier</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8 border-t border-forest/5">
            <div className="flex items-center gap-3 text-sm text-forest/60">
              <Truck size={18} className="text-leafy" /> Free Shipping on orders over $50
            </div>
            <div className="flex items-center gap-3 text-sm text-forest/60">
              <RotateCcw size={18} className="text-leafy" /> 30-Day Plant Wellness Guarantee
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="mb-24">
        <div className="flex border-b border-forest/10 mb-12">
          {['details', 'care', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-12 py-4 font-serif text-xl relative ${
                activeTab === tab ? 'text-forest' : 'text-forest/30'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-1 bg-leafy" />
              )}
            </button>
          ))}
        </div>
        
        <div className="min-h-[200px]">
          {activeTab === 'details' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl space-y-6 text-forest/70 leading-relaxed">
              <p>The {product.name} is one of our most popular varieties. Known for its unique aesthetic and ability to transform any interior space into a botanical sanctuary.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Native to tropical regions around the globe</li>
                <li>Grown in organic, peat-free soil</li>
                <li>Includes premium nursery pot (upgrade available)</li>
                <li>Approximate height: 12" - 18"</li>
              </ul>
            </motion.div>
          )}
          {activeTab === 'care' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-6">
                 <h3 className="text-2xl font-serif text-forest">Light & Temperature</h3>
                 <p className="text-forest/70">Requires {product.sunlight} levels. Keep away from direct drafts and maintain a temperature between 18°C to 24°C for optimal growth.</p>
               </div>
               <div className="space-y-6">
                 <h3 className="text-2xl font-serif text-forest">Watering Routine</h3>
                 <p className="text-forest/70">Water {product.water}. Ensure the top 2 inches of soil are dry before watering again. Do not allow to sit in standing water.</p>
               </div>
            </motion.div>
          )}
          {activeTab === 'reviews' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-forest/5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-leafy/10 flex items-center justify-center font-bold text-leafy">
                        JD
                      </div>
                      <div>
                        <p className="font-bold">John Doe</p>
                        <p className="text-xs text-forest/40">Verified Buyer • 2 weeks ago</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                  <p className="text-forest/70">Absolutely love my new {product.name}! It arrived in pristine condition and looks even better than the photos. Highly recommend BloomAura!</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section>
          <SectionTitle title="Complete the Look" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
};
