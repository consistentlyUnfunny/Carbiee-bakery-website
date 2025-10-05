// In a new file, e.g., src/components/MenuPage.tsx

import React from 'react';
import { BREAD_MENU } from '../menuData'; // Import the menu data

const MenuPage = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeveHun2VawlYRo1XQjaiCDjWSK6Gd7VffKIbJt5cq1RmT8-A/viewform?usp=header"
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Loop over the menu data and create a card for each item */}
        {BREAD_MENU.map((item) => (
            <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <p className="text-lg font-semibold text-amber-800 mt-4">
                RM{item.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Order Now button at the bottom */}
      <div className="text-center mt-12">
        <a 
          href={formUrl}
          target="_blank" // Opens the form in a new tab
          rel="noopener noreferrer"
          className="bg-amber-800 text-white font-bold text-xl py-3 px-10 rounded-lg hover:bg-amber-900 transition-colors"
        >
          Place Your Order Now
        </a>
      </div>
    </div>
  );
};

export default MenuPage;