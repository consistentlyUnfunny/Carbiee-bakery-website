// src/menuData.ts


export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string; // This will be the path to an image in your `public` folder
}

export const BREAD_MENU: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Sourdough',
    description: 'A rustic loaf with a chewy crust and a soft, tangy interior.',
    price: 15.00,
    image: '/images/sourdough.jpg' // Path relative to the `public` folder
  },
  {
    id: 2,
    name: 'Japanese Milk Bread',
    description: 'Incredibly soft, fluffy, and sweet. Perfect for toast or sandwiches.',
    price: 12.00,
    image: '/images/milk-bread.jpeg'
  },
  {
    id: 3,
    name: 'Whole Wheat Loaf',
    description: 'A hearty and healthy loaf made with 100% whole wheat flour.',
    price: 10.00,
    image: '/images/whole-wheat.png'
  }
];