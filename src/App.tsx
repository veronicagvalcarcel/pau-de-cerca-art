import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Product,} from './types';
import { PRODUCTS } from './constants';
import { ShowcasePage } from './pages/ShowcasePage';
import { ProductDetail } from './components/ProductDetail';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Todes');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<'showcase' | 'detail'>('showcase');

  const shuffleArray = (array: Product[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

  const filteredProducts =
  activeCategory === 'Todes'
    ? shuffleArray(PRODUCTS)
    : PRODUCTS.filter(
        p => p.category.toLowerCase() === activeCategory.toLowerCase()
      );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView('showcase');
    setSelectedProduct(null);
  };

  const navigateProduct = (direction: 'prev' | 'next') => {
    if (!selectedProduct) return;
    const currentIndex = PRODUCTS.findIndex(p => p.id === selectedProduct.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (nextIndex >= PRODUCTS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = PRODUCTS.length - 1;
    
    setSelectedProduct(PRODUCTS[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-lila/30 bg-surface">
      <AnimatePresence mode="wait">
        {view === 'showcase' ? (
          <ShowcasePage
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            filteredProducts={filteredProducts}
            onProductClick={handleProductClick}
          />
        ) : (
          selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onBack={handleBack}
              onNavigate={navigateProduct}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
}
