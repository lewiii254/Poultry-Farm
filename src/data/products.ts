import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Day-Old Broiler Chicks',
    category: 'chicks',
    price: 120,
    discountPrice: 100,
    description: 'Healthy day-old broiler chicks from our carefully selected breeds. These chicks are vaccinated against common diseases and ready to be raised in your farm or backyard. Perfect for meat production with fast growth rates.',
    shortDescription: 'Vaccinated day-old broiler chicks for meat production.',
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
    name: 'Day-Old Layer Chicks',
    category: 'chicks',
    price: 130,
    discountPrice: 110,
    description: 'Premium day-old layer chicks from high-performing egg-laying breeds. Fully vaccinated and ready for raising. These chicks are perfect for starting your egg production business.',
    shortDescription: 'Vaccinated day-old layer chicks for egg production.',
    images: [
      'https://images.pexels.com/photos/583677/pexels-photo-583677.jpeg',
      'https://images.pexels.com/photos/1405930/pexels-photo-1405930.jpeg'
    ],
    stock: 40,
    featured: true,
    tags: ['layer', 'day-old', 'vaccinated']
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
    description: 'Premium kienyeji (indigenous) eggs from our traditional breed hens. These eggs have that authentic taste and rich, orange yolks that you cannot find in commercial eggs. Perfect for special dishes where egg flavor is important.',
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
    name: 'Fresh Whole Broiler (1.5kg)',
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
    name: 'Kienyeji Chicken (1.2kg)',
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
    name: 'Premium Chicken Feed (10kg)',
    category: 'products',
    price: 1200,
    description: 'High-quality chicken feed formulated for optimal nutrition and health. Contains the perfect balance of proteins, vitamins, and minerals for healthy growth and egg production.',
    shortDescription: 'Premium chicken feed for optimal growth and health.',
    images: [
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg',
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg'
    ],
    stock: 40,
    tags: ['feed', 'nutrition', 'health']
  },
  {
    id: '8',
    name: 'Modern Chicken Coop',
    category: 'products',
    price: 12000,
    discountPrice: 10500,
    description: 'Modern, well-ventilated chicken coop suitable for 8-12 chickens. Features nesting boxes, roosting perches, and a secure run area. Made from durable materials for long-lasting use.',
    shortDescription: 'Modern chicken coop with nesting boxes and secure run.',
    images: [
      'https://images.pexels.com/photos/8533272/pexels-photo-8533272.jpeg',
      'https://images.pexels.com/photos/8533272/pexels-photo-8533272.jpeg'
    ],
    stock: 5,
    featured: true,
    tags: ['housing', 'equipment']
  },
  {
    id: '9',
    name: 'Automatic Chicken Feeder',
    category: 'products',
    price: 2500,
    discountPrice: 2200,
    description: 'Automatic chicken feeder with 5kg capacity. Reduces waste and keeps feed clean and dry. Perfect for busy farmers who want to ensure their chickens are fed regularly.',
    shortDescription: 'Automatic 5kg capacity chicken feeder.',
    images: [
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg',
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg'
    ],
    stock: 15,
    featured: true,
    tags: ['equipment', 'automatic']
  },
  {
    id: '10',
    name: 'Chicken Waterer (10L)',
    category: 'products',
    price: 1500,
    description: 'Automatic chicken waterer with 10-liter capacity. Features an innovative design that keeps water clean and prevents spillage. Ensures your chickens always have access to fresh water.',
    shortDescription: 'Automatic 10L waterer for clean, fresh water supply.',
    images: [
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg',
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg'
    ],
    stock: 20,
    tags: ['equipment', 'waterer']
  },
  {
    id: '11',
    name: 'Premium Chicken Cuts Pack',
    category: 'chicken',
    price: 850,
    discountPrice: 800,
    description: 'Assorted pack of premium chicken cuts including breasts, thighs, wings, and drumsticks. All pieces are cleaned and individually packed for convenience. Perfect for families who enjoy variety.',
    shortDescription: 'Assorted pack of fresh chicken cuts.',
    images: [
      'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg',
      'https://images.pexels.com/photos/6294228/pexels-photo-6294228.jpeg'
    ],
    stock: 30,
    featured: true,
    tags: ['cuts', 'fresh', 'assorted']
  },
  {
    id: '12',
    name: 'Poultry Health Kit',
    category: 'products',
    price: 2800,
    discountPrice: 2500,
    description: 'Complete poultry health kit containing essential vitamins, minerals, and basic medications. Includes a guide for common poultry health issues and their treatment.',
    shortDescription: 'Essential health kit for poultry care.',
    images: [
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg',
      'https://images.pexels.com/photos/8774487/pexels-photo-8774487.jpeg'
    ],
    stock: 25,
    featured: true,
    tags: ['health', 'medicine', 'care']
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