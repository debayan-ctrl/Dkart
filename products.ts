import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation.',
    rating: 4.8,
    reviews: 127,
    inStock: true,
    featured: true,
    tags: ['wireless', 'noise-cancelling', 'premium']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 249.99,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ['fitness', 'smartwatch', 'health']
  },
  {
    id: '3',
    name: 'Luxury Leather Handbag',
    price: 189.99,
    originalPrice: 259.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    description: 'Elegant handcrafted leather handbag perfect for any occasion.',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ['luxury', 'leather', 'handbag']
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 899.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    description: 'Capture life\'s moments with this professional-grade camera featuring 4K video recording.',
    rating: 4.7,
    reviews: 203,
    inStock: true,
    tags: ['camera', 'professional', '4k']
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 159.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    description: 'Stay stylish with these designer sunglasses featuring UV protection.',
    rating: 4.5,
    reviews: 78,
    inStock: true,
    tags: ['sunglasses', 'designer', 'fashion']
  },
  {
    id: '6',
    name: 'Minimalist Desk Lamp',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1246945/pexels-photo-1246945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    description: 'Illuminate your workspace with this sleek, adjustable LED desk lamp.',
    rating: 4.4,
    reviews: 92,
    inStock: true,
    tags: ['lamp', 'led', 'minimalist']
  },
  {
    id: '7',
    name: 'Organic Cotton T-Shirt',
    price: 29.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    description: 'Comfortable and sustainable organic cotton t-shirt in various colors.',
    rating: 4.3,
    reviews: 234,
    inStock: true,
    tags: ['organic', 'cotton', 'sustainable']
  },
  {
    id: '8',
    name: 'Bluetooth Speaker',
    price: 69.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    description: 'Portable Bluetooth speaker with rich bass and 12-hour battery life.',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    tags: ['bluetooth', 'speaker', 'portable']
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home',
  'Sports',
  'Beauty'
];