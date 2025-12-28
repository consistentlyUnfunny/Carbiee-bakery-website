import React, { useState } from 'react';
import { BREAD_MENU } from '../menuData';
import QuantityCounter from '../components/QuantityCounter';

const MenuPage = () => {
  // Your Google Form URL
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeveHun2VawlYRo1XQjaiCDjWSK6Gd7VffKIbJt5cq1RmT8-A/viewform?usp=header";

  // State to hold all quantities
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(BREAD_MENU.map(item => [item.id, 0]))
  );

  // Update quantity function
  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  // Live Total Calculation
  const totalPrice = BREAD_MENU.reduce((acc, item) => {
    return acc + (item.price * (quantities[item.id] || 0));
  }, 0);

  return (
    <div className="pb-80"> {/* Added padding bottom so the sticky bar doesn't hide content */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-stone-800 mb-2">Carbiee's Selection</h2>
        <p className="text-stone-500 italic font-light">Handcrafted with patience and the finest ingredients</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BREAD_MENU.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-[2.5rem] border border-stone-100 p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200/60 flex flex-col h-full"
          >
            {/* Image Container with Zoom Effect */}
            <div className="overflow-hidden rounded-[2rem] relative aspect-[4/3]">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-stone-800 shadow-sm border border-white/20">
                RM {item.price.toFixed(2)}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-2xl font-serif text-stone-800 mb-3">{item.name}</h3>
              <p className="text-stone-500 text-sm leading-relaxed flex-grow italic font-light">
                {item.description}
              </p>
              
              <div className="mt-8 flex flex-col items-center">
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

      {/* Floating Checkout Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl z-50">
        <div className="bg-stone-900/90 backdrop-blur-2xl text-white p-6 rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="pl-2">
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-bold mb-1">
                Estimated Total
              </p>
              <p className="text-4xl font-light">
                <span className="text-stone-500 text-2xl mr-1">RM</span>
                {totalPrice.toFixed(2)}
              </p>
            </div>
            
            <a 
              href={formUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className={`py-4 px-10 rounded-2xl font-bold transition-all duration-500 shadow-lg ${
                totalPrice > 0 
                ? "bg-amber-100 text-stone-900 hover:bg-white hover:scale-105 active:scale-95" 
                : "bg-stone-800 text-stone-600 cursor-not-allowed opacity-50"
              }`}
            >
              Checkout
            </a>
          </div>
          
          <div className="px-2 py-3 border-t border-white/5">
            <p className="text-[16px] text-stone-400 leading-relaxed italic font-light text-center">
              * Total price is for reference only. Please confirm your selection in the Google Form. 
              Our staff will contact you via WhatsApp to finalize payment and delivery. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;