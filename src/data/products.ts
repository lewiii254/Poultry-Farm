import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Day-Old Chicks',
    category: 'chicks',
    price: 120,
    discountPrice: 100,
    description: 'Healthy day-old chicks from our carefully selected breeds. These chicks are vaccinated against common diseases and ready to be raised in your farm or backyard. We offer a variety of breeds suitable for different purposes, whether you\'re looking for layers or broilers.',
    shortDescription: 'Healthy, vaccinated day-old chicks for your farm or backyard.',
    images: [
      'https://images.pexels.com/photos/583677/pexels-photo-583677.jpeg',
      'https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg'
    ],
    stock: 50,
    featured: true,
    tags: ['broiler', 'day-old', 'vaccinated']
  },
  {
    id: '2',
    name: 'Two-Week Old Chicks',
    category: 'chicks',
    price: 200,
    description: 'Two-week old chicks that have passed the critical early stage. These chicks have been properly vaccinated and are growing well. Perfect for those who want to skip the most delicate period of chick raising while still enjoying the experience of raising chickens from a young age.',
    shortDescription: 'Vaccinated two-week old chicks, perfect for beginners.',
    images: [
      'https://images.pexels.com/photos/583677/pexels-photo-583677.jpeg',
      'https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg'
    ],
    stock: 30,
    tags: ['broiler', 'vaccinated']
  },
  {
    id: '3',
    name: 'Fresh Farm Eggs (Tray of 30)',
    category: 'eggs',
    price: 450,
    discountPrice: 420,
    description: 'Free-range, farm-fresh eggs from our happy, healthy hens. Each tray contains 30 eggs of mixed sizes, predominantly large. Our hens are fed a natural diet supplemented with quality grains to ensure the best taste and nutrition in every egg.',
    shortDescription: 'Farm-fresh eggs from free-range hens, tray of 30.',
    images: [
      'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg',
      'https://images.pexels.com/photos/6294361/pexels-photo-6294361.jpeg'
    ],
    stock: 100,
    featured: true,
    tags: ['free-range', 'organic']
  },
  {
    id: '4',
    name: 'Kienyeji Eggs (Tray of 30)',
    category: 'eggs',
    price: 600,
    description: 'Premium kienyeji (indigenous) eggs from our traditional breed hens. These eggs have that authentic taste and rich, orange yolks that you can\'t find in commercial eggs. Perfect for special dishes where egg flavor is important.',
    shortDescription: 'Traditional kienyeji eggs with rich flavor, tray of 30.',
    images: [
      'https://images.pexels.com/photos/7129154/pexels-photo-7129154.jpeg',
      'https://images.pexels.com/photos/6294361/pexels-photo-6294361.jpeg'
    ],
    stock: 50,
    tags: ['kienyeji', 'indigenous', 'premium']
  },
  {
    id: '5',
    name: 'Whole Broiler Chicken (1.5kg)',
    category: 'chicken',
    price: 650,
    description: 'Fresh, whole broiler chicken raised on our farm. Each chicken weighs approximately 1.5kg and is cleaned and ready for cooking. Our broilers are raised in a clean environment and fed a balanced diet for the best quality meat.',
    shortDescription: 'Fresh whole broiler chicken, approx 1.5kg, cleaned and ready to cook.',
    images: [
      'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg',
      'https://images.pexels.com/photos/6294228/pexels-photo-6294228.jpeg'
    ],
    stock: 25,
    featured: true,
    tags: ['broiler', 'fresh', 'whole']
  },
  {
    id: '6',
    name: 'Free-Range Kienyeji Chicken (1.2kg)',
    category: 'chicken',
    price: 950,
    description: 'Traditional kienyeji chicken raised free-range on our farm. These chickens have a superior taste and firmer texture compared to commercial broilers. Perfect for traditional dishes where authentic chicken flavor is desired.',
    shortDescription: 'Traditional free-range kienyeji chicken with authentic flavor.',
    images: [
      'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg',
      'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg'
    ],
    stock: 15,
    tags: ['kienyeji', 'free-range', 'traditional']
  },
  {
    id: '7',
    name: 'Organic Chicken Feed (10kg)',
    category: 'products',
    price: 1200,
    description: 'Premium organic chicken feed formulated for optimal nutrition and health. This balanced feed contains the right mix of proteins, carbohydrates, vitamins, and minerals to keep your chickens healthy and productive. Suitable for layers and broilers.',
    shortDescription: 'Premium organic chicken feed for healthy, productive birds.',
    images: [
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg',
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg'
    ],
    stock: 40,
    tags: ['organic', 'feed', 'nutrition']
  },
  {
    id: '8',
    name: 'Chicken Coop (Medium)',
    category: 'products',
    price: 12000,
    discountPrice: 10500,
    description: 'Well-designed medium-sized chicken coop suitable for 8-12 chickens. This durable coop includes nesting boxes, roosting perches, and a secure run area to protect your chickens from predators. Made from treated wood and galvanized wire mesh for longevity.',
    shortDescription: 'Medium-sized chicken coop for 8-12 birds, with nesting boxes and secure run.',
    images: [
      'https://images.pexels.com/photos/8533272/pexels-photo-8533272.jpeg',
      'https://images.pexels.com/photos/8533272/pexels-photo-8533272.jpeg'
    ],
    stock: 5,
    featured: true,
    tags: ['housing', 'coop', 'equipment']
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};