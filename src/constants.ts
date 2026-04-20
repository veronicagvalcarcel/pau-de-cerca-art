import { Product } from './types';

// 🧩 Helper para generar productos
const createProducts = (
  count: number,
  prefix: string,
  folder: string,
  baseData: Omit<Product, 'id' | 'image'>
): Product[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    ...baseData,
    image: `/escaparate/${folder}/${prefix}${i + 1}.webp`,
  }));
};

// 🖼️ Prints - 12
const prints = createProducts(12, 'p', 'prints', {
  name: 'Print artístico',
  category: 'prints',
  collection: 'Colección General',
  price: '20€',
  description: 'Ilustración original impresa en alta calidad.',
  material: 'Papel premium',
  measures: 'A4 / A3',
});

// 👕 Camisetas - 15
const camisetas = createProducts(15, 'c', 'camisetas', {
  name: 'Camiseta ilustrada',
  category: 'camisetas',
  collection: 'Colección General',
  price: '30€',
  description: 'Camiseta con diseño original.',
  material: '100% algodón',
  measures: 'S, M, L, XL',
});

// 👜 Totebags - 11
const totebags = createProducts(11, 't', 'totebags', {
  name: 'Totebag ilustrada',
  category: 'totebags',
  collection: 'Colección General',
  price: '25€',
  description: 'Bolsa de tela resistente con ilustración.',
  material: 'Algodón',
  measures: '38x42cm',
});

// 🔢 Unimos todo y aseguramos IDs únicos
export const PRODUCTS: Product[] = [
  ...prints,
  ...camisetas,
  ...totebags,
].map((product, index) => ({
  ...product,
  id: index + 1,
}));

// 📂 Categorías
export const CATEGORIES = ['Todes', 'Prints', 'Camisetas', 'Totebags'];

// 🧠 Logo
export const LOGO_URL =
  "https://storage.googleapis.com/static.antigravity.dev/paudecercaart/logo.png";