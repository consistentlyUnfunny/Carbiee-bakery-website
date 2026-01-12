export interface MenuItem {
  id: number;
  name: string;
  nameZh: string; 
  description: string;
  price: number;
  image: string;
}

export const BREAD_MENU: MenuItem[] = [
  {
    id: 1,
    name: 'Double Matcha Cream Cheese & Red Bean Sourdough Volcano Baguette',
    nameZh: '双重抹茶红豆乳酪天然酵母火山法包',
    description: '',
    price: 10.00,
    image: '/images/doublematcha.jpeg'
  },
  {
    id: 2,
    name: 'Dark Chocolate & Orange Peel Rum-Soaked Cream Cheese Sourdough Volcano Baguette',
    nameZh: '黑巧橙皮浸朗姆酒乳酪天然酵母火山法包',
    description: '',
    price: 10.00,
    image: '/images/darkchoco.jpeg'
  },
  {
    id: 3,
    name: 'Tom Yum Prawn Paste Crab Stick Corn & Cheese Natural-Leavened Focaccia',
    nameZh: '冬阴功虾滑蟹柳玉米芝士天然酵母佛卡夏',
    description: '',
    price: 10.00,
    image: '/images/tomyumprawn.jpeg'
  },
  {
    id: 4,
    name: 'Japanese Curry Mashed Potato New Orleans Chicken Fillet & Cheese Natural-Leavened Focaccia',
    nameZh: '日式咖喱土豆泥奥尔良鸡柳芝士天然酵母佛卡夏',
    description: '',
    price: 10.00,
    image: '/images/japanesecurry.jpeg'
  },
  {
    id: 5,
    name: 'Strawberry Cream Cheese Brownie Soft European Bread',
    nameZh: '草莓乳酪布朗尼软欧包',
    description: '',
    price: 10.00,
    image: '/images/strawberrycreamcheese.jpeg'
  },
  {
    id: 6,
    name: 'Black Sesame Mochi Soft European Bread',
    nameZh: '黑芝麻奶酥麻薯软欧包',
    description: '',
    price: 10.00,
    image: '/images/blacksesamemochi.jpeg'
  },
  {
    id: 7,
    name: 'Soy Milk Peanut Bagel',
    nameZh: '豆乳花生贝果',
    description: '',
    price: 10.00,
    image: '/images/soymilkpeanut.jpeg'
  },
  {
    id: 8,
    name: 'Earl Grey Milk Cream Cheese Molten Dark Chocolate Bagel',
    nameZh: '伯爵奶酥流心黑巧贝果',
    description: '',
    price: 10.00,
    image: '/images/earlgraymilk.jpeg'
  },
  {
    id: 9,
    name: 'Black Truffle Mushroom Mi Pang Du',
    nameZh: '黑松露蘑菇米胖嘟',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/blacktruffle.jpeg'
  },
  {
    id: 10,
    name: 'Pistachio Cream Cheese Mi Pang Du',
    nameZh: '开心果乳酪米胖嘟',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/pistacio.jpeg'
  },
  {
    id: 11,
    name: 'Strawberry Cream Cheese Dundun',
    nameZh: '草莓乳酪脆墩墩',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/strawberrydundun.jpeg'
  },
  {
    id: 12,
    name: 'Matcha Yuzu Cream Cheese Dundun',
    nameZh: '抹茶柚子乳酪脆墩墩',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/matchadundun.jpeg'
  },
  {
    id: 13,
    name: 'Chicken Floss Xiao Bei',
    nameZh: '肉松小贝',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/chickenflossxiaobei.jpeg'
  },
  {
    id: 14,
    name: 'Matcha Rice Pudding',
    nameZh: '抹茶米布丁',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/matcharicepudding.jpeg'
  },
  {
    id: 15,
    name: 'Matcha Crepe Roll Cake',
    nameZh: '抹茶毛巾卷',
    description: 'Self-pickup / Grab / Lalamove',
    price: 10.00,
    image: '/images/matchacreperoll.jpeg'
  }
];