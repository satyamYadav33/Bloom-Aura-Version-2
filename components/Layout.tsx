
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Menu, X, Leaf, Instagram, Facebook, Twitter, Mail, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const LeafAnimation = () => {
  const leaves = Array.from({ length: 8 });
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -100, x: Math.random() * 100 + "%", rotate: 0 }}
          animate={{
            y: "110vh",
            x: `${(Math.random() - 0.5) * 20 + (i * 12)}%`,
            rotate: 360,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
          className="absolute opacity-10"
        >
          <Leaf className="text-leafy" size={24 + Math.random() * 24} />
        </motion.div>
      ))}
    </div>
  );
};

export const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Leaf className="text-leafy group-hover:rotate-45 transition-transform duration-500" size={32} />
          <span className="text-2xl font-serif font-bold text-forest tracking-tight">BloomAura</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-medium transition-colors hover:text-leafy ${
                location.pathname === link.path ? 'text-leafy' : 'text-forest'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-forest hover:text-leafy transition-colors">
            <Search size={22} />
          </button>
          <Link to="/cart" className="relative group">
            <ShoppingCart size={22} className="text-forest group-hover:text-leafy transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-leafy text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden text-forest" onClick={() => setIsMenuOpen(true)}>
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif font-bold text-forest">BloomAura</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={30} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map(link => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-serif text-forest hover:text-leafy transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-forest/10">
              <p className="text-forest/60 mb-6 font-serif">Stay Connected</p>
              <div className="flex gap-6">
                <Instagram size={24} />
                <Facebook size={24} />
                <Twitter size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC = () => (
  <footer className="bg-forest text-white pt-24 pb-12 mt-24">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Leaf className="text-leafy" size={32} />
          <span className="text-2xl font-serif font-bold tracking-tight">BloomAura</span>
        </div>
        <p className="text-white/60 max-w-xs">
          Bringing nature into your space with handpicked premium plants and exquisite bouquets.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-leafy hover:border-leafy transition-all">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-leafy hover:border-leafy transition-all">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-leafy hover:border-leafy transition-all">
            <Twitter size={18} />
          </a>
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-xl font-serif font-semibold">Shop Categories</h4>
        <ul className="space-y-4 text-white/60">
          <li><Link to="/shop" className="hover:text-leafy transition-colors">Indoor Plants</Link></li>
          <li><Link to="/shop" className="hover:text-leafy transition-colors">Outdoor Plants</Link></li>
          <li><Link to="/shop" className="hover:text-leafy transition-colors">Floral Bouquets</Link></li>
          <li><Link to="/shop" className="hover:text-leafy transition-colors">Gifting Succulents</Link></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-xl font-serif font-semibold">Quick Links</h4>
        <ul className="space-y-4 text-white/60">
          <li><Link to="/about" className="hover:text-leafy transition-colors">Our Story</Link></li>
          <li><Link to="/contact" className="hover:text-leafy transition-colors">Contact Us</Link></li>
          <li><a href="#" className="hover:text-leafy transition-colors">Shipping Policy</a></li>
          <li><a href="#" className="hover:text-leafy transition-colors">FAQ</a></li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-xl font-serif font-semibold">Join the Bloom List</h4>
        <p className="text-white/60">Subscribe for plant care tips and exclusive offers.</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Your email" 
            className="bg-white/10 border border-white/20 rounded-l-full px-6 py-3 w-full outline-none focus:border-leafy transition-colors"
          />
          <button className="bg-leafy text-white px-6 py-3 rounded-r-full hover:bg-white hover:text-forest transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 text-center text-white/40 text-sm">
      <p>&copy; 2024 BloomAura Store. All Rights Reserved. Crafted with love for nature.</p>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative min-h-screen">
    <LeafAnimation />
    <Navbar />
    <main className="relative z-10 pt-24 min-h-[calc(100vh-80px)]">
      {children}
    </main>
    <Footer />
  </div>
);
