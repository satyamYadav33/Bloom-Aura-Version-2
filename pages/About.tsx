
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Globe } from 'lucide-react';
import { SectionTitle } from '../components/UI';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <SectionTitle 
              title="Our Botanical Story" 
              subtitle="It started with a single monstera leaf and a dream to bring nature's calm into every modern home."
            />
            <p className="text-lg text-forest/70 mb-8 leading-relaxed">
              BloomAura was founded in 2021 by a team of plant enthusiasts and landscape architects. 
              We believe that living with plants isn't just about decoration—it's about a lifestyle of wellness, 
              patience, and connection to the natural world.
            </p>
            <p className="text-lg text-forest/70 mb-8 leading-relaxed">
              Every plant in our collection is handpicked from sustainable nurseries, acclimated in our 
              state-of-the-art greenhouse, and delivered with the care it deserves.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="rounded-[60px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1000" alt="BloomAura Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-y border-forest/10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Heart className="text-leafy" />, title: "Grown with Love", desc: "Every plant is nurtured by experts." },
            { icon: <Leaf className="text-leafy" />, title: "Eco-Friendly", desc: "100% biodegradable packaging." },
            { icon: <Users className="text-leafy" />, title: "Community Driven", desc: "Supporting local plant parents." },
            { icon: <Globe className="text-leafy" />, title: "Global Species", desc: "Rare varieties from across the world." },
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <div className="bg-leafy/10 p-6 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif text-forest">{item.title}</h3>
              <p className="text-forest/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto mb-24">
        <SectionTitle title="Our Mission" centered />
        <p className="text-2xl font-serif italic text-forest/80 leading-relaxed">
          "To cultivate a greener world, one room at a time, by providing access to healthy plants and the knowledge to make them thrive."
        </p>
      </section>
    </div>
  );
};
