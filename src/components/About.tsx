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
          "El arte de lo cercano y lo cotidiano."
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed opacity-80 mb-16"
        >
          Cada pieza es una exploración de la sencillez. Pau de cerca nace de la necesidad de llevar el arte fuera de los marcos y volcarlo en objetos que habitan nuestro día a día. Ilustraciones hechas a mano, producidas con mimo y consciencia.
        </motion.p>

        {/* Icons */}
        <div className="flex justify-center gap-12">
          <motion.div whileHover={{ scale: 1.2 }} className="text-black-art">
            <Brush size={32} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-lila">
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