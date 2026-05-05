import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Megaphone, 
  Leaf, 
  Sparkles,
  LayoutGrid,
  Mail
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, LOGO_URL } from '../constants';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
  onImageClick?: () => void;
}

const getRelatedProductId = (productId: number): number | null => {
  const links: Record<number, number> = {
    2: 9,  // c2 blanca -> c9 negra
    9: 2,  // c9 negra -> c2 blanca
    5: 4,  // c5 delantera -> c4 trasera
    4: 5,  // c4 trasera -> c5 delantera
  };
  return links[productId] || null;
};

const renderDescriptionWithLink = (description: string, productId: number) => {
  const relatedId = getRelatedProductId(productId);
  if (!relatedId) return description;

  const getProductUrl = (id: number) => {
    return `${window.location.pathname}?product=${id}`;
  };

  // Handle "Clica aquí o en la imagen"
  if (description.includes('Clica aquí o en la imagen')) {
    const parts = description.split('Clica aquí o en la imagen');
    return (
      <>
        {parts[0]}
        <a
          href={getProductUrl(relatedId)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lila hover:text-lila/80 underline transition-colors"
        >
          Clica aquí
        </a>
        {' o en la '}
        <a
          href={getProductUrl(relatedId)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lila hover:text-lila/80 underline transition-colors"
        >
          imagen
        </a>
        {parts[1]}
      </>
    );
  }

  // Handle "Clica en la imagen" alone
  if (description.includes('Clica en la imagen')) {
    const parts = description.split('Clica en la imagen');
    return (
      <>
        {parts[0]}
        <a
          href={getProductUrl(relatedId)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lila hover:text-lila/80 underline transition-colors"
        >
          Clica en la imagen
        </a>
        {parts[1]}
      </>
    );
  }

  // Handle "Clica aquí" alone
  if (description.includes('Clica aquí')) {
    const parts = description.split('Clica aquí');
    return (
      <>
        {parts[0]}
        <a
          href={getProductUrl(relatedId)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-lila hover:text-lila/80 underline transition-colors"
        >
          Clica aquí
        </a>
        {parts[1]}
      </>
    );
  }

  return description;
};

export const ProductDetail = ({ product, onBack, onNavigate, onImageClick }: ProductDetailProps) => {
  const relatedId = getRelatedProductId(product.id);

  const handleImageClickWithNewTab = () => {
    if (relatedId) {
      const getProductUrl = (id: number) => {
        return `${window.location.pathname}?product=${id}`;
      };
      window.open(getProductUrl(relatedId), '_blank');
    } else if (onImageClick) {
      onImageClick();
    }
  };
  return (
    <motion.div
      key="detail"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-screen bg-surface"
    >
      {/* Detail Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md px-6 md:px-12 h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 text-black-art hover:bg-black-art/5 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Pau de cerca art" 
              referrerPolicy="no-referrer"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 max-w-2xl mx-auto px-6 w-full">
        {/* Product Gallery / Image */}
        <section className="relative mb-10 group">
          <div 
            onClick={handleImageClickWithNewTab}
            className={`aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white-art shadow-2xl shadow-black-art/5 ${
              [2, 9, 5, 4].includes(product.id) ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => onNavigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white-art/80 backdrop-blur-md rounded-full shadow-lg text-black-art transition-all hover:scale-110 hover:shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => onNavigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white-art/80 backdrop-blur-md rounded-full shadow-lg text-black-art transition-all hover:scale-110 hover:shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-center">
            <div className="flex gap-2 max-w-full flex-wrap justify-center">
              {PRODUCTS.map((p) => (
                <div 
                  key={p.id}
                  className={`h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                    product.id === p.id ? 'w-8 bg-black-art' : 'w-1.5 bg-black-art/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product Info */}
        <section className="mb-12">
          <div className="flex justify-between items-baseline mb-2">
            <h2 className="text-4xl md:text-5xl text-black-art">{product.name}</h2>
          </div>
          <p className="text-lila font-label font-semibold tracking-wider mb-8">
            {product.collection}
          </p>
          <p className="text-lg md:text-xl leading-relaxed opacity-80 mb-10">
            {renderDescriptionWithLink(product.description, product.id)}
          </p>

          {/* Contact Button */}
          <a 
            href="https://instagram.com/paudecercaart"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-black-art text-white-art py-5 px-8 rounded-full font-label font-bold text-lg hover:scale-[0.98] transition-transform shadow-xl shadow-black-art/10 mb-12"
          >
            <Megaphone size={24} />
            Consultar por Instagram
          </a>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white-art/50 p-6 rounded-2xl border border-black-art/5">
              <h3 className="text-sm font-label font-bold text-black-art/40 uppercase tracking-widest mb-2">Material</h3>
              <p className="text-lg text-black-art">{product.material}</p>
            </div>
            <div className="bg-white-art/50 p-6 rounded-2xl border border-black-art/5">
              <h3 className="text-sm font-label font-bold text-black-art/40 uppercase tracking-widest mb-2">Medidas</h3>
              <p className="text-lg text-black-art whitespace-pre-line">
               {product.measures}
                </p>
            </div>
          </div>

          <div className="bg-lila/10 p-6 rounded-2xl border border-lila/20 flex items-center gap-4">
            <div className="p-3 bg-lila/20 rounded-xl text-lila">
              <Leaf size={24} />
            </div>
            <div>
              <h3 className="text-sm font-label font-bold text-lila uppercase tracking-widest mb-0.5">Sostenible</h3>
              <p className="text-black-art/70">Producido de forma ética con materiales orgánicos.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-white-art/90 backdrop-blur-md rounded-full px-10 py-4 flex justify-around items-center shadow-2xl border border-black-art/5 md:hidden">
      <button 
        onClick={onBack}
        className="flex flex-col items-center gap-1 text-black-art/40 hover:text-black-art transition-colors"
      >
        <LayoutGrid size={24} />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Escaparate</span>
      </button>

      <a
        href="https://www.instagram.com/paudecercaart/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 text-black-art/40 hover:text-black-art transition-colors"
      >
        <Mail size={24} />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Contacto</span>
      </a>
    </nav>
    </motion.div>
  );
};
