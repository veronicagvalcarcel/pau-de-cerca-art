import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group cursor-pointer ${index % 2 === 1 ? 'md:mt-16' : ''}`}
      onClick={() => onClick(product)}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white-art/30 shadow-2xl shadow-black-art/5 mb-8 relative">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black-art/0 group-hover:bg-black-art/5 transition-colors duration-500" />
      </div>
      <div className="text-center">
        <h3 className="text-3xl mb-1">{product.name}</h3>
        <p className="text-black-art/60 text-sm font-body">{product.collection}</p>
      </div>
    </motion.div>
  );
};
