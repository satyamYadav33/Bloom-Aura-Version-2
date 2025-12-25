
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button, SectionTitle } from '../components/UI';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-leafy/10 p-12 rounded-full mb-8">
          <ShoppingBag size={80} className="text-leafy" />
        </div>
        <h2 className="text-4xl font-serif mb-4">Your cart is empty</h2>
        <p className="text-forest/60 mb-10 max-w-md">Looks like you haven't added any green friends to your space yet. Let's find some together!</p>
        <Link to="/shop"><Button>Browse Collection</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle title="Your Shopping Cart" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-[30px] shadow-sm border border-forest/5"
              >
                <div className="w-full sm:w-40 aspect-square rounded-2xl overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-leafy font-bold uppercase tracking-wider mb-1">{item.category}</p>
                      <h3 className="text-2xl font-serif text-forest mb-2">{item.name}</h3>
                      <p className="text-forest/50 text-sm">SKU: BA-00{item.id}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center gap-4 bg-forest/5 px-4 py-2 rounded-full">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-leafy transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-leafy transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="text-xl font-bold text-forest">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <Link to="/shop" className="inline-flex items-center gap-2 text-forest hover:text-leafy transition-colors mt-8">
            <ArrowLeft size={18} /> Continue Shopping
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-10 rounded-[40px] shadow-xl sticky top-32 border border-forest/5">
            <h3 className="text-2xl font-serif text-forest mb-8">Order Summary</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-forest/60">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-forest/60">
                <span>Shipping</span>
                <span>{totalPrice > 50 ? 'FREE' : '$9.99'}</span>
              </div>
              <div className="flex justify-between text-forest/60">
                <span>Estimated Tax</span>
                <span>${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="pt-6 border-t border-forest/10 flex justify-between items-end">
                <span className="text-lg font-medium text-forest">Total</span>
                <span className="text-3xl font-bold text-leafy">
                  ${(totalPrice > 50 ? totalPrice + (totalPrice * 0.08) : totalPrice + 9.99 + (totalPrice * 0.08)).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Coupon Code" 
                  className="w-full bg-forest/5 border border-forest/10 rounded-full px-6 py-4 outline-none focus:border-leafy text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-forest text-white px-6 rounded-full text-xs font-bold hover:bg-leafy transition-all">
                  Apply
                </button>
              </div>
              <Link to="/checkout" className="block w-full">
                <Button className="w-full py-5 text-lg shadow-leafy/20 shadow-lg">Proceed to Checkout</Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-forest/10 space-y-4">
              <p className="text-xs text-forest/40 text-center flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-leafy" /> Secure Checkout & Payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShieldCheck = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
