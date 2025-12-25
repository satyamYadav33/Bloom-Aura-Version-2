
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button, SectionTitle } from '../components/UI';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <SectionTitle 
        title="Get in Touch" 
        subtitle="Have questions about plant care or an existing order? Our team is here to help your garden thrive."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-forest/5">
              <div className="bg-leafy/10 p-4 rounded-2xl w-fit mb-6 text-leafy"><Mail size={24} /></div>
              <h4 className="font-serif font-bold text-xl mb-2">Email Us</h4>
              <p className="text-forest/60 text-sm">hello@bloomaura.com</p>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-forest/5">
              <div className="bg-leafy/10 p-4 rounded-2xl w-fit mb-6 text-leafy"><Phone size={24} /></div>
              <h4 className="font-serif font-bold text-xl mb-2">Call Us</h4>
              <p className="text-forest/60 text-sm">+1 (555) 000-1234</p>
            </div>
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-forest/5 col-span-2">
              <div className="bg-leafy/10 p-4 rounded-2xl w-fit mb-6 text-leafy"><MapPin size={24} /></div>
              <h4 className="font-serif font-bold text-xl mb-2">Our Greenhouse</h4>
              <p className="text-forest/60 text-sm">742 Evergreen Terrace, Botanical District, FL 33101</p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-serif text-forest">Follow the Bloom</h4>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center hover:bg-leafy transition-all"><Instagram /></a>
              <a href="#" className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center hover:bg-leafy transition-all"><Facebook /></a>
              <a href="#" className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center hover:bg-leafy transition-all"><Twitter /></a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
          <form className="bg-forest p-10 md:p-14 rounded-[60px] text-white space-y-6 shadow-2xl">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Full Name</label>
              <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-leafy text-white" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Email Address</label>
              <input type="email" className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-leafy text-white" placeholder="jane@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60">Message</label>
              <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-leafy text-white resize-none" placeholder="Tell us about your green goals..." required />
            </div>
            <Button variant="primary" className="w-full py-5 text-lg bg-leafy hover:bg-white hover:text-forest transition-colors">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Embedded Map Dummy */}
      <section className="mb-24">
        <div className="w-full h-[500px] bg-forest/5 rounded-[60px] overflow-hidden relative shadow-inner">
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
               <MapPin size={48} className="text-leafy mx-auto mb-4" />
               <p className="font-serif text-2xl text-forest">Our Flagship Store Location</p>
               <p className="text-forest/50">Interactive map would load here in production.</p>
             </div>
           </div>
           {/* Mock Map Background */}
           <div className="w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000')] bg-cover" />
        </div>
      </section>
    </div>
  );
};
