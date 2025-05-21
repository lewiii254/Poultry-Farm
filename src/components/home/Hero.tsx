import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-amber-50">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Content */}
        <div className="w-full md:w-1/2 md:pr-12 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Farm Fresh <span className="text-amber-600">Poultry</span> Products
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            From our farm to your table. We provide fresh, healthy, and ethically raised poultry products delivered right to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/category/chicks"
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md transition-colors hover:bg-amber-700 inline-flex items-center"
            >
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-white text-amber-600 font-medium rounded-md border border-amber-600 transition-colors hover:bg-amber-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <img
            src="https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg" 
            alt="Fresh farm eggs"
            className="rounded-lg shadow-xl w-full max-w-lg mx-auto"
          />
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -left-4 bg-amber-500 h-16 w-16 rounded-full opacity-70 hidden md:block"></div>
          <div className="absolute -top-4 -right-4 bg-amber-500 h-8 w-8 rounded-full opacity-70 hidden md:block"></div>
        </div>
      </div>
      
      {/* Curved design at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 40"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,40L1320,40C1200,40,960,40,720,40C480,40,240,40,120,40L0,40Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;