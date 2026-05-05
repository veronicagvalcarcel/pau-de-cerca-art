import { motion } from 'framer-motion';
import { Brush, Leaf, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section className="bg-white-art py-32 mb-20 border-t border-black-art/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl italic mb-12"
        >
          ·Pau de cerca ·art·
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed opacity-80 mb-16"
        >
          Es un proyecto autogestionado y autodidacta que surge de la curiosidad por las artes manuales y artesanales. Detrás estoy yo, Pau, la persona que da forma a cada diseño y a cada pieza. Me gusta crear, sea cual sea el resultado, disfrutando y aprendiendo del proceso, y explorar desde una mirada social y disidente. Este proyecto es más que un proyecto… es una forma de expresión y de búsqueda.
        </motion.p>

        {/* Icons */}
        <div className="flex justify-center gap-12">
          <motion.div whileHover={{ scale: 1.2 }} className="text-black-art">
            <Brush size={32} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-black-art">
            <Leaf size={32} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-black-art">
            <Heart size={32} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};