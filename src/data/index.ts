export const colors = {
  royalBlue: {
    DEFAULT: '#002366',
    light: '#1A3C80',
    dark: '#00143D',
  },
  brightOrange: {
    DEFAULT: '#FF8C00',
    light: '#FFA500',
    dark: '#E67E00',
  },
  black: {
    DEFAULT: '#0A0A0A',
    rich: '#050505',
    soft: '#1F1F1F',
  },
  white: {
    DEFAULT: '#FFFFFF',
    off: '#F5F5F5',
    smoke: '#F0F0F0',
  }
};

export const products = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    price: '₹1,29,900*',
    storage: '128GB | 256GB | 512GB | 1TB',
    image: 'https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?auto=format&fit=crop&q=80&w=800',
    badge: 'Flagship',
    specs: ['A18 Pro Chip', '48MP Triple Camera', 'ProMotion Display'],
    colors: ['Titanium Gray', 'White', 'Black'],
  },
  {
    id: 'samsung-s25-ultra',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    price: '₹1,24,999*',
    storage: '256GB | 512GB | 1TB',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800',
    badge: 'Popular',
    specs: ['Snapdragon 8 Gen 4', '200MP Camera', 'S-Pen Included'],
    colors: ['Titanium Black', 'Cream', 'Violet'],
  },
  {
    id: 'oneplus-13',
    name: 'OnePlus 13',
    brand: 'OnePlus',
    price: '₹64,999*',
    storage: '128GB | 256GB',
    image: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=800',
    badge: 'Fastest',
    specs: ['Hasselblad Camera', '150W SuperVOOC', 'Amoled Display'],
    colors: ['Evergreen', 'Volcanic Black'],
  },
  {
    id: 'nothing-phone-3',
    name: 'Nothing Phone (3)',
    brand: 'Nothing',
    price: '₹44,999*',
    storage: '128GB | 256GB',
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800',
    badge: 'Unique',
    specs: ['Glyph Interface', 'Symmetry Design', 'Nothing OS'],
    colors: ['White', 'Dark Gray'],
  }
];

export const offers = [
  {
    title: 'Exchange Bonus',
    description: 'Get up to ₹10,000 extra value on your old smartphone.',
    code: 'EXCHANGE10',
    color: 'bg-blue-600',
  },
  {
    title: 'No Cost EMI',
    description: 'Available on all major bank credit cards (up to 24 months).',
    code: 'EMI_OFFER',
    color: 'bg-orange-500',
  },
  {
    title: 'Bank Cashback',
    description: 'Instant discount of ₹5,000 with HDFC & ICICI Cards.',
    code: 'BANK5K',
    color: 'bg-indigo-600',
  }
];

export const reviews = [
  {
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Best place to buy genuine iPhones in town. The staff is very helpful and knowledgeable.',
    image: 'https://i.pravatar.cc/150?u=rahul',
  },
  {
    name: 'Anjali Gupta',
    rating: 5,
    text: 'Got my Samsung S24 Ultra at a great price with an amazing exchange deal. Highly recommended!',
    image: 'https://i.pravatar.cc/150?u=anjali',
  }
];

export const brands = [
  { name: 'Apple', logo: '/brands/apple.svg' },
  { name: 'Samsung', logo: '/brands/samsung.svg' },
  { name: 'OnePlus', logo: '/brands/oneplus.svg' },
  { name: 'Vivo', logo: '/brands/vivo.svg' },
  { name: 'Oppo', logo: '/brands/oppo.svg' },
  { name: 'Xiaomi', logo: '/brands/xiaomi.svg' },
  { name: 'Nothing', logo: '/brands/nothing.svg' },
  { name: 'Motorola', logo: '/brands/motorola.svg' },
  { name: 'Realme', logo: '/brands/realme.svg' },
];
