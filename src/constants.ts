import { Product } from './types';

// 🧩 BASES COMPARTIDAS
const CAMISETA_BASE = {
  category: 'camisetas',
  material: '100% algodón',
  measures: `S 48x69
M 50x71
L 54x73
XL 58x75
XXL 62x77
3XL 66x79
4XL 70x81

Medidas aproximadas (+/- 2.5 cm).
Axila a axila = ancho.
Hombro a cintura = largo.`,
};

const PRINT_BASE = {
  category: 'prints',
  material: 'Impresión a color en cartulina blanca',
  measures: 'A5 y A4',
};

const TOTE_BASE = {
  category: 'totebags',
  material: 'algodón',
  measures: '38x42 cm',
};

// 🧩 FACTORIES

const createCamiseta = (
  id: number,
  name: string,
  collection: string,
  description: string,
  file: string
): Product => ({
  id,
  name,
  collection,
  description,
  image: `/escaparate/camisetas/${file}`,
  ...CAMISETA_BASE,
});

const createPrint = (
  id: number,
  name: string,
  collection: string,
  description: string,
  file: string
): Product => ({
  id,
  name,
  collection,
  description,
  image: `/escaparate/prints/${file}`,
  ...PRINT_BASE,
});

const createTotebag = (
  id: number,
  name: string,
  collection: string,
  description: string,
  file: string
): Product => ({
  id,
  name,
  collection,
  description,
  image: `/escaparate/totebags/${file}`,
  ...TOTE_BASE,
});

// 👕 CAMISETAS
const camisetas: Product[] = [
  createCamiseta(
    1,
    'FUCK TERFS',
    'FUCK TERFS',
    'Camiseta negra con estampado central de calavera blanca fumando y letras rojas con la frase “fuck TERFS”.',
    'c1.webp'
  ),
  createCamiseta(
    2,
    'La seguridad florece en la ternura',
    'La seguridad florece en la ternura',
    'Camiseta blanca con estampado central de margarita y letras de colores naranja, rosa y blanco con la frase "la seguridad florece en la ternura". Clica aquí o en la imagen para ver la camiseta en color negro.',
    'c2.webp'
  ),
  createCamiseta(
    3,
    'Cuidar la herida',
    'Cuidar la herida',
    'Camiseta negra con estampado en lado izquierdo de tirita en color azul y rosa con el símbolo transfeminista y la frase "cuidar la herida" en letras blancas.',
    'c3.webp'
  ),
  createCamiseta(
    4,
    'Eat the rich (parte trasera)',
    'Eat the rich',
    'Camiseta negra con estampado central de persona con la boca abierta en colores rojo y morado y llamas de fuego en los ojos, con la frase "eat the rich" en la parte central de la boca con letras moradas. Esta es la parte trasera. Clica aquí o en la imagen para ver la parte delantera.',
    'c4.webp'
  ),
  createCamiseta(
    5,
    'Eat the rich (parte delantera)',
    'Eat the rich',
    'Camiseta negra con estampado en lado izquierdo de cara de persona en colores rojo y morado y llamas de fuego en los ojos, con la frase "eat the rich" debajo en los mismos colores. Clica aquí o en la imagen para ver la parte trasera.',
    'c5.webp'
  ),
  createCamiseta(
    6,
    'ENBY',
    'ENBY',
    'Camiseta negra con estampado central en color blanco con la palabra "ENBY" (acortamiento de "non-binary" o no binarie).',
    'c6.webp'
  ),
  createCamiseta(
    7,
    'Rabia gorda',
    'Rabia gorda',
    'Camiseta negra con estampado central de ballena en colores azul y blanco y la frase "contra la gordofobia, rabia gorda" en color blanco.',
    'c7.webp'
  ),
  createCamiseta(
    8,
    'Gender binary',
    'Gender binary',
    'Camiseta negra con estampado central con la frase "Gender binary: a horror story" en color rojo.',
    'c8.webp'
  ),
  createCamiseta(
    9,
    'La seguridad florece en la ternura',
    'La seguridad florece en la ternura',
    'Camiseta negra con estampado central de margarita y letras de colores naranja, rosa y blanco con la frase "la seguridad florece en la ternura". Clica aquí o en la imagen para ver la camiseta en color blanco.',
    'c9.webp'
  ),
  createCamiseta(
    10,
    'La plaga eres tú',
    'La plaga eres tú',
    'Camiseta negra con estampado central de una paloma y una rata con la frase "la plaga eres tú, especulador" en color rosa.',
    'c10.webp'
  ),
  createCamiseta(
    11,
    'La vida está en el barrio',
    'La vida está en el barrio',
    'Camiseta negra con estampado central de color blanco. El diseño se divide en 4 viñetas: 1. Arriba a la izquierda el dibujo de una radio rodeada de la frase "la radio en la ventana". 2. Arriba a la derecha el dibujo de una bolsa de plástico rodeada de la frase "comprar en el mercado". 3. Abajo a la izquierda el dibujo de unos geranios rodeado de la frase "los geranios en el balcón". 4. Abajo a la derecha el dibujo de una barra de pan rodeada de la frase "comerse una barra de pan". Por último, en el centro aparece el dibujo de unas cuerdas con cuatro pinzas colgadas y con la frase "la vida está en el barrio".',
    'c11.webp'
  ),
];

// 🖼️ PRINTS
const prints: Product[] = [
  createPrint(
    101,
    'Eat the rich',
    'Eat the rich',
    'Lámina impresa en papel blanco con ilustración de persona con la boca abierta en colores rojo y morado y llamas de fuego en los ojos, con la frase "eat the rich" en la parte central de la boca con letras moradas.',
    'p1.webp'
  ),
  createPrint(
    102,
    'Habitar la rabia',
    'Habitar la rabia',
    'Lámina impresa en papel blanco con ilustración de una casa y la frase "Habitar la rabia" en la parte inferior en color azul oscuro, con una llama de fuego de colores amarillo, rojo y naranja en el centro de la casa.',
    'p2.webp'
  ),
  createPrint(
    103,
    'Gender binary',
    'Gender binary',
    'Lámina impresa en papel blanco con la frase "Gender binary: a horror story" en color rojo.',
    'p3.webp'
  ),
  createPrint(
    104,
    'Llora Brota',
    'Llora Brota',
    'Lámina impresa en papel blanco con ilustración en color rojo de persona dentro de una lágrima que brota en una planta, con las palabras "Llora Brota".',
    'p4.webp'
  ),
  createPrint(
    105,
    'Cuidar la herida',
    'Cuidar la herida',
    'Lámina impresa en papel blanco con ilustración de tirita en color azul y rosa con el símbolo transfeminista y la frase "cuidar la herida" en letras negras.',
    'p5.webp'
  ),
  createPrint(
    106,
    'FCK TRFS',
    'FCK TRFS',
    'Lámina impresa en papel blanco con ilustración de calavera negra fumando y letras rojas con la frase "fuck TERFS".',
    'p6.webp'
  ),
  createPrint(
    107,
    'Kemar el cistema juntes',
    'Kemar el cistema juntes',
    'Lámina impresa en papel blanco con ilustración de dos cerillas, una en color azul y rosa y otra en color morado y amarillo, con la frase "kemar el cistema juntes" en color negro.',
    'p7.webp'
  ),
  createPrint(
    108,
    'Rabia gorda',
    'Rabia gorda',
    'Lámina impresa en papel blanco con ilustración de ballena en color azul y la frase "contra la gordofobia, rabia gorda" en color negro.',
    'p8.webp'
  ),
  createPrint(
    109,
    'La seguridad florece en la ternura',
    'La seguridad florece en la ternura',
    'Lámina impresa en papel blanco con ilustración de margarita y letras de colores naranja, rosa y blanco con la frase "la seguridad florece en la ternura".',
    'p9.webp'
  ),
  createPrint(
    110,
    'La plaga eres tú',
    'La plaga eres tú',
    'Lámina impresa en papel blanco con ilustración de una paloma y una rata en color negro con la frase "la plaga eres tú, especulador" en color rosa.',
    'p10.webp'
  ),
  createPrint(
    111,
    'La vida está en el barrio',
    'La vida está en el barrio',
    'Lámina impresa en papel blanco con ilustración en color negro. El diseño se divide en 4 viñetas: 1. Arriba a la izquierda el dibujo de una radio rodeada de la frase "la radio en la ventana". 2. Arriba a la derecha el dibujo de una bolsa de plástico rodeada de la frase "comprar en el mercado". 3. Abajo a la izquierda el dibujo de unos geranios rodeado de la frase "los geranios en el balcón". 4. Abajo a la derecha el dibujo de una barra de pan rodeada de la frase "comerse una barra de pan". Por último, en el centro aparece el dibujo de unas cuerdas con cuatro pinzas colgadas y con la frase "la vida está en el barrio".',
    'p11.webp'
  ),
];

// 👜 TOTEBAGS
const totebags: Product[] = [
  createTotebag(
    201,
    'Rabia gorda',
    'Rabia gorda',
    'Tote bag negra con estampado central de ballena en colores azul y blanco y la frase "contra la gordofobia, rabia gorda" en color blanco.',
    't1.webp'
  ),
  createTotebag(
    202,
    'FCK TRFS',
    'FCK TRFS',
    'Tote bag negra con estampado central de calavera blanca fumando y letras rojas con la frase "fuck TERFS".',
    't2.webp'
  ),
  createTotebag(
    203,
    'ENBY',
    'ENBY',
    'Tote bag negra con estampado central en color blanco con la palabra "ENBY" (acortamiento de "non-binary" o no binarie).',
    't3.webp'
  ),
  createTotebag(
    204,
    'Eat the rich',
    'Eat the rich',
    'Tote bag blanca con estampado central de persona con la boca abierta en colores rojo y morado y llamas de fuego en los ojos, con la frase "eat the rich" en la parte central de la boca con letras moradas.',
    't4.webp'
  ),
  createTotebag(
    205,
    'Gender binary',
    'Gender binary',
    'Tote bag blanca con estampado central con la frase "Gender binary: a horror story" en color rojo.',
    't5.webp'
  ),
  createTotebag(
    206,
    'La seguridad florece en la ternura',
    'La seguridad florece en la ternura',
    'Tote bag blanca con estampado central de margarita y letras de colores naranja, rosa y blanco con la frase "la seguridad florece en la ternura".',
    't6.webp'
  ),
  createTotebag(
    207,
    'La plaga eres tú',
    'La plaga eres tú',
    'Tote bag negra con estampado central de una paloma y una rata con la frase "la plaga eres tú, especulador" en color rosa.',
    't7.webp'
  ),
  createTotebag(
    208,
    'La vida está en el barrio',
    'La vida está en el barrio',
    'Tote bag negra con estampado central en color blanco. El diseño se divide en 4 viñetas:1. Arriba a la izquierda el dibujo de una radio rodeada de la frase "la radio en la ventana". 2. Arriba a la derecha el dibujo de una bolsa de plástico rodeada de la frase "comprar en el mercado". 3. Abajo a la izquierda el dibujo de unos geranios rodeado de la frase "los geranios en el balcón". 4. Abajo a la derecha el dibujo de una barra de pan rodeada de la frase "comerse una barra de pan". Por último, en el centro aparece el dibujo de unas cuerdas con cuatro pinzas colgadas y con la frase "la vida está en el barrio".',
    't8.webp'
  ),
];

// 🔢 EXPORT FINAL
export const PRODUCTS: Product[] = [
  ...prints,
  ...camisetas,
  ...totebags,
];

// 📂 CATEGORÍAS
export const CATEGORIES = ['Camisetas', 'Prints', 'Totebags', 'Todes'];

// 🧠 LOGO
export const LOGO_URL = '/logos/logo.webp';