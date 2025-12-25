
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle, Button } from '../components/UI';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-leafy/5 -z-10 rounded-l-[100px] hidden lg:block" />
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-2 bg-leafy/10 text-leafy rounded-full text-sm font-bold tracking-widest uppercase mb-6">
          Premium Botanical Collection
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-forest mb-8 leading-tight">
          Breath Life <br />
          <span className="italic text-leafy">Into Your Space</span>
        </h1>
        <p className="text-lg text-forest/70 mb-10 max-w-lg leading-relaxed">
          BloomAura brings you closer to nature. Discover our handpicked selection of indoor plants, 
          exotic flowers, and designer bouquets delivered straight to your door.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/shop">
            <Button className="w-full sm:w-auto">
              Shop Now <ArrowRight size={20} />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="w-full sm:w-auto">
              Our Story
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 flex items-center gap-8 border-t border-forest/10 pt-8">
          <div>
            <p className="text-3xl font-serif font-bold text-forest">15k+</p>
            <p className="text-sm text-forest/50">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-forest">250+</p>
            <p className="text-sm text-forest/50">Plant Species</p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-forest">4.9/5</p>
            <p className="text-sm text-forest/50">Avg. Rating</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="relative z-10 rounded-[60px] overflow-hidden border-8 border-white shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1000" 
            alt="Beautiful Plant Display" 
            className="w-full aspect-[4/5] object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-[240px] hidden sm:block">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-leafy/20 p-3 rounded-2xl">
              <Leaf className="text-leafy" />
            </div>
            <p className="font-serif font-bold text-forest">Pure Oxygen</p>
          </div>
          <p className="text-sm text-forest/60">Our plants are grown with love to provide maximum air purification.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { icon: <Truck size={32} />, title: "Free Shipping", desc: "On all orders over $50 within the mainland." },
    { icon: <Shield size={32} />, title: "Secure Payment", desc: "100% secure payment systems with SSL encryption." },
    { icon: <Heart size={32} />, title: "Gift Packaging", desc: "Every plant comes in premium sustainable packaging." },
    { icon: <Leaf size={32} />, title: "Expert Care", desc: "Get detailed care guides for every plant you buy." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="bg-leafy/10 p-6 rounded-full text-leafy mb-2">{f.icon}</div>
            <h3 className="text-xl font-serif font-bold text-forest">{f.title}</h3>
            <p className="text-forest/60 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: 'Indoor Plants', img: 'https://images.unsplash.com/photo-1545241047-6083a3684587', color: 'bg-green-100' },
    { name: 'Bouquets', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9', color: 'bg-pink-100' },
    { name: 'Succulents', img: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a', color: 'bg-blue-100' },
    { name: 'Outdoor', img: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322', color: 'bg-yellow-100' },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Browse by Category" 
          subtitle="Whether you're looking for a low-light survivor or a vibrant bouquet, we have it all."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <Link key={i} to="/shop">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.name}</h3>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-leafy transition-colors">
                    <span>Shop Collection</span> <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bestsellers = () => {
  const bestsellers = PRODUCTS.filter(p => p.isBestseller).slice(0, 4);

  return (
    <section className="py-24 bg-forest/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle title="Our Bestsellers" />
          <Link to="/shop">
            <Button variant="outline" className="hidden sm:flex mb-12">View All Products</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sarah Johnson", text: "The Fiddle Leaf Fig arrived in perfect condition. The packaging was so thoughtful!", avatar: "https://picsum.photos/100/100?random=1" },
    { name: "Mark Wilson", text: "Best bouquet I've ever ordered. The roses stayed fresh for over two weeks!", avatar: "https://picsum.photos/100/100?random=2" },
    { name: "Elena Garcia", text: "BloomAura's customer service helped me pick the right low-light plant for my office.", avatar: "https://picsum.photos/100/100?random=3" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="What Our Community Says" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((r, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-[40px] shadow-sm flex flex-col items-center text-center"
            >
              <img src={r.avatar} className="w-20 h-20 rounded-full mb-6 border-4 border-leafy/10" alt={r.name} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => <Heart key={idx} className="text-pinky fill-pinky" size={16} />)}
              </div>
              <p className="text-forest/70 italic mb-6 leading-relaxed">"{r.text}"</p>
              <h4 className="font-serif font-bold text-lg">{r.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Features />
      <Categories />
      <Bestsellers />
      <Testimonials />
      
      {/* Newsletter */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            whileInView={{ scale: [0.95, 1] }}
            className="bg-forest rounded-[60px] p-12 md:p-24 relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10"><Leaf size={160} /></div>
            <div className="absolute bottom-0 left-0 p-12 opacity-10"><Leaf size={160} /></div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Join the Green Club</h2>
            <p className="text-white/70 mb-12 max-w-xl mx-auto">
              Get exclusive early access to new collections, plant care workshops, and 15% off your first order.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:row gap-4">
              <input 
                type="email" 
                placeholder="hello@yourgarden.com" 
                className="bg-white/10 border border-white/20 rounded-full px-8 py-4 w-full outline-none focus:border-leafy text-white placeholder:text-white/30"
                required
              />
              <Button variant="primary" className="bg-leafy hover:bg-white hover:text-forest transition-colors">
                Subscribe Now
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
