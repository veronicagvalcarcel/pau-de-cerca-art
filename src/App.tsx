import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Product,} from './types';
import { PRODUCTS } from './constants';
import { ShowcasePage } from './pages/ShowcasePage';
import { ProductDetail } from './components/ProductDetail';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Camisetas');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState<'showcase' | 'detail'>('showcase');

  // Read product ID from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');
    if (productId) {
      const product = PRODUCTS.find(p => p.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
        setView('detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const getProductUrl = (productId: number) => {
    return `${window.location.pathname}?product=${productId}`;
  };

  const shuffleArray = (array: Product[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

  const filteredProducts =
  activeCategory === 'Todes'
    ? shuffleArray(PRODUCTS.filter(p => p.id !== 4))
    : PRODUCTS.filter(
        p => p.category.toLowerCase() === activeCategory.toLowerCase() && p.id !== 4
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

  const handleImageClick = () => {
    if (!selectedProduct) return;
    
    // Special navigation for linked products
    if (selectedProduct.id === 2) {
      // c2 -> c9
      setSelectedProduct(PRODUCTS.find(p => p.id === 9) || selectedProduct);
    } else if (selectedProduct.id === 9) {
      // c9 -> c2
      setSelectedProduct(PRODUCTS.find(p => p.id === 2) || selectedProduct);
    } else if (selectedProduct.id === 5) {
      // c5 -> c4
      setSelectedProduct(PRODUCTS.find(p => p.id === 4) || selectedProduct);
    } else if (selectedProduct.id === 4) {
      // c4 -> c5
      setSelectedProduct(PRODUCTS.find(p => p.id === 5) || selectedProduct);
    }
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
              onImageClick={handleImageClick}
            />
          )
        )}
      </AnimatePresence>
    </div>
  );
}
