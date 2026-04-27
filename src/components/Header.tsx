import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { CATEGORIES, LOGO_URL } from '../constants';

interface HeaderProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Header = ({ activeCategory, setActiveCategory, isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white-art/90 backdrop-blur-md border-b border-black-art/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={LOGO_URL} 
            alt="Pau de cerca art" 
            referrerPolicy="no-referrer"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-label text-sm font-medium transition-all relative py-1 ${
                activeCategory === cat ? 'text-black-art' : 'text-black-art/50 hover:text-lila'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-lila"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
         <a
          href="https://www.instagram.com/paudecercaart/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-black-art text-white-art px-6 py-2.5 rounded-lg font-label font-semibold text-sm 
          hover:bg-black-art/90 transition-all active:scale-95 "
        >
          Contacto
        </a>
 
          
          <button 
            className="md:hidden p-2 text-black-art"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white-art border-b border-black-art/5 px-6 py-8 flex flex-col gap-6"
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setIsMenuOpen(false);
                }}
                className={`font-label text-lg font-medium text-left ${
                  activeCategory === cat ? 'text-lila' : 'text-black-art'
                }`}
              >
                {cat}
              </button>
            ))}
            <a
            href="https://www.instagram.com/paudecercaart/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-black-art text-white-art px-6 py-3 rounded-lg font-label font-semibold text-center mt-4 block"
          >
            Contacto
          </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
