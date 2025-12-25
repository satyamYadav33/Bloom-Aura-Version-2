
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, Truck, User, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button, SectionTitle } from '../components/UI';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2500);
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-6 py-24 text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-leafy/10 rounded-full flex items-center justify-center mx-auto mb-8 text-leafy"
        >
          <CheckCircle size={64} />
        </motion.div>
        <h2 className="text-4xl font-serif text-forest mb-4">Your Garden is on its way!</h2>
        <p className="text-forest/60 mb-12">Thank you for your order #BA-92831. We've sent a confirmation email to your inbox.</p>
        <Link to="/"><Button className="w-full">Return Home</Button></Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle title="Checkout" centered />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          {/* Form Sections */}
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-forest/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-leafy text-white flex items-center justify-center font-bold">1</div>
              <h3 className="text-2xl font-serif text-forest">Shipping Details</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1 space-y-2">
                <label className="text-sm font-medium text-forest/60">First Name</label>
                <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="John" />
              </div>
              <div className="col-span-2 sm:col-span-1 space-y-2">
                <label className="text-sm font-medium text-forest/60">Last Name</label>
                <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="Doe" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium text-forest/60">Email Address</label>
                <input type="email" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="john@example.com" />
              </div>
              <div className="col-span-2 space-y-2">
                <label className="text-sm font-medium text-forest/60">Shipping Address</label>
                <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="123 Nature St" />
              </div>
              <div className="col-span-2 sm:col-span-1 space-y-2">
                <label className="text-sm font-medium text-forest/60">City</label>
                <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="Greenville" />
              </div>
              <div className="col-span-2 sm:col-span-1 space-y-2">
                <label className="text-sm font-medium text-forest/60">Zip Code</label>
                <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="12345" />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-forest/5">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-leafy text-white flex items-center justify-center font-bold">2</div>
              <h3 className="text-2xl font-serif text-forest">Payment Information</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 border-2 border-leafy rounded-2xl bg-leafy/5">
                <CreditCard className="text-leafy" />
                <span className="font-medium text-forest">Credit / Debit Card</span>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-forest/60">Card Number</label>
                <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="**** **** **** 1234" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-forest/60">Expiry Date</label>
                  <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-forest/60">CVV</label>
                  <input type="text" className="w-full bg-forest/5 border border-forest/10 rounded-2xl px-6 py-4 outline-none focus:border-leafy" placeholder="123" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-10 rounded-[40px] shadow-xl sticky top-32 border border-forest/5">
            <h3 className="text-2xl font-serif text-forest mb-8">Summary</h3>
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-forest/60">{item.name} x {item.quantity}</span>
                  <span className="font-bold text-forest">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-6 border-t border-forest/10 flex justify-between items-end">
                <span className="text-lg font-medium text-forest">Payable Amount</span>
                <span className="text-3xl font-bold text-leafy">${(totalPrice * 1.08).toFixed(2)}</span>
              </div>
            </div>
            <Button 
              onClick={handlePayment} 
              disabled={isProcessing}
              className="w-full py-5 text-lg"
            >
              {isProcessing ? 'Processing...' : 'Complete Purchase'}
            </Button>
            <p className="text-center text-xs text-forest/40 mt-6">By clicking, you agree to our Terms & Privacy Policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
