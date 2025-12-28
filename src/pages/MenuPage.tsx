import React, { useState } from 'react';
import { BREAD_MENU } from '../menuData';
import QuantityCounter from '../components/QuantityCounter';

const MenuPage = () => {
  const formUrl = "https://docs.google.com/forms/d/e/...";

  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(BREAD_MENU.map(item => [item.id, 0]))
  );

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const totalPrice = BREAD_MENU.reduce((acc, item) => {
    return acc + (item.price * (quantities[item.id] || 0));
  }, 0);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">Our Menu</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BREAD_MENU.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-amber-900">{item.name}</h3>
              <p className="text-gray-700 mt-2 flex-grow text-sm">{item.description}</p>
              
              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-bold text-amber-800">RM{item.price.toFixed(2)}</p>
                
                {/* Pass the state and functions down to the counter */}
                <QuantityCounter 
                  count={quantities[item.id] || 0}
                  onIncrement={() => updateQuantity(item.id, 1)}
                  onDecrement={() => updateQuantity(item.id, -1)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-4 mt-12 bg-amber-800 text-white p-6 rounded-xl shadow-2xl border-2 border-amber-600 max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-amber-200 text-sm uppercase tracking-widest font-bold">Estimated Total</p>
            <p className="text-4xl font-black">RM {totalPrice.toFixed(2)}</p>
          </div>
          <a 
            href={formUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-amber-900 font-bold text-xl py-3 px-8 rounded-lg hover:bg-amber-100 transition-transform hover:scale-105 shadow-lg"
          >
            Checkout
          </a>
        </div>
        <p className="text-xs text-amber-200 italic">
          *Notes to be added.
        </p>
      </div>
    </div>
  );
};

export default MenuPage;