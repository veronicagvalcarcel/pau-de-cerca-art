import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { InstagramFeed } from '../components/InstagramFeed';
import { Footer } from '../components/Footer';
import { Product } from '../types';
import { CATEGORIES, LOGO_URL } from '../constants';
import { About } from '../components/About';

interface ShowcasePageProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  filteredProducts: Product[];
  onProductClick: (product: Product) => void;
}

export const ShowcasePage = ({
  activeCategory,
  setActiveCategory,
  isMenuOpen,
  setIsMenuOpen,
  filteredProducts,
  onProductClick
}: ShowcasePageProps) => {
  return (
    <motion.div
      key="showcase"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      <Header 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />

      <main className="flex-grow pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <img 
              src={LOGO_URL} 
              alt="Pau de cerca art" 
              referrerPolicy="no-referrer"
              className="w-full max-w-[280px] md:max-w-[500px] h-auto object-contain"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto"
          >
            Bienvenide, encuentra tu próxima pieza favorita.
          </motion.p>
        </section>
        <About />
        
        {/* Filter Bar */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full font-label font-semibold text-sm transition-all border ${
                  activeCategory === cat 
                    ? 'bg-lila border-lila text-black-art shadow-lg shadow-lila/20' 
                    : 'bg-white-art/20 border-black-art/10 text-black-art hover:bg-white-art/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index} 
                  onClick={onProductClick} 
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
        <InstagramFeed />
        <Footer />
      </main>
    </motion.div>
  );
};
