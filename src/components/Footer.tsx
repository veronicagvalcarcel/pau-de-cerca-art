import { motion } from 'motion/react';
import { Brush, Leaf, Heart, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <section className="bg-white-art py-32 border-t border-black-art/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl italic mb-12"
        >
          "El arte de lo cercano y lo cotidiano."
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed opacity-80 mb-16"
        >
          Cada pieza es una exploración de la sencillez. Pau de cerca nace de la necesidad de llevar el arte fuera de los marcos y volcarlo en objetos que habitan nuestro día a día. Ilustraciones hechas a mano, producidas con mimo y consciencia.
        </motion.p>
        
        <div className="flex justify-center gap-12 mb-16">
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

        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://instagram.com/paudecercaart" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black-art/60 hover:text-black-art transition-colors font-label font-medium"
          >
            <Instagram size={20} />
            @paudecercaart
          </a>
          <p className="text-xs font-label text-black-art/30 tracking-widest uppercase">
            © 2024 PAU DE CERCA ART. TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>
      </div>
    </section>
  );
};
