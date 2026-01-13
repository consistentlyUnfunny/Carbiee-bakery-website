import React, { useState } from 'react';
import { BREAD_MENU } from '../menuData';
// import QuantityCounter from '../components/QuantityCounter'; // Commented out for future V2 use

const MenuPage = () => {
  // Your Google Form URL for V2 ordering
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeveHun2VawlYRo1XQjaiCDjWSK6Gd7VffKIbJt5cq1RmT8-A/viewform?usp=header";

  /* commented for future use
  
  // State to hold all quantities: { [id]: quantity }
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    Object.fromEntries(BREAD_MENU.map(item => [item.id, 0]))
  );

  // Update quantity function ensuring count doesn't go below zero
  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  // Live Total Price Calculation
  const totalPrice = BREAD_MENU.reduce((acc, item) => {
    return acc + (item.price * (quantities[item.id] || 0));
  }, 0);
  */

  return (
    <div className="pb-24 bg-[#FAF9F6]"> {/* Reduced padding since the floating bar is removed */}
      
      {/* Header Section */}
      <div className="text-center mb-16 pt-8">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-3 tracking-tight">
          Carbiee's Selection
        </h2>
        <p className="text-stone-500 italic font-light tracking-wide">
          Handcrafted with patience and the finest ingredients
        </p>
      </div>
      
      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
        {BREAD_MENU.map((item) => (
          <div 
            key={item.id} 
            className="group bg-white rounded-[3rem] border border-stone-100 p-4 transition-all duration-700 hover:shadow-2xl hover:shadow-stone-200/40 flex flex-col h-full"
          >
            {/* Image Container with Hover Zoom */}
            <div className="overflow-hidden rounded-[2.2rem] relative aspect-[4/3] shadow-inner">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
              />
              <div className="absolute top-5 right-5 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-stone-800 shadow-sm border border-white/30">
                RM {item.price.toFixed(2)}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow text-center">
              {/* Bilingual Title Block */}
              <div className="mb-4">
                <h3 className="text-xl font-serif text-stone-800 mb-1 leading-tight px-2">
                  {item.name}
                </h3>
                <p className="text-sm font-light text-stone-400 tracking-widest uppercase">
                  {item.nameZh}
                </p>
              </div>

              {/* Description Section */}
              <p className="text-stone-500 text-xs leading-relaxed flex-grow italic font-light px-4">
                {item.description}
              </p>
              
              {/* COUNTER SECTION - COMMENTED OUT FOR VIEW-ONLY VERSION
              <div className="mt-8 flex flex-col items-center">
                <QuantityCounter 
                  count={quantities[item.id] || 0}
                  onIncrement={() => updateQuantity(item.id, 1)}
                  onDecrement={() => updateQuantity(item.id, -1)}
                />
              </div>
              */}
            </div>
          </div>
        ))}
      </div>

      {/* NEW: Static Call-to-Action Section at the Bottom */}
      <div className="mt-20 text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-stone-400 text-sm italic mb-6">
            Ready to taste our handcrafted breads? <br/>
            Click below to place your order via our official form.
          </p>
          <a 
            href={formUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-stone-900 text-amber-50 py-5 px-12 rounded-[2rem] font-bold text-lg uppercase tracking-widest hover:bg-stone-800 transition-all duration-300 shadow-xl hover:scale-105 inline-block"
          >
            Place Your Order
          </a>
          <p className="mt-8 text-[11px] text-stone-400 leading-relaxed italic font-light">
            * Our team will contact you via WhatsApp once the form is submitted to finalize payment and delivery.
          </p>
        </div>
      </div>

      {/* FLOATING CHECKOUT BAR - COMMENTED OUT FOR VIEW-ONLY VERSION
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl z-50">
        <div className="bg-stone-900/90 backdrop-blur-3xl text-white p-7 rounded-[2.8rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
          <div className="flex justify-between items-center mb-5">
            <div className="pl-3">
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500 font-bold mb-1">
                Estimated Total
              </p>
              <p className="text-4xl font-light tracking-tighter">
                <span className="text-stone-600 text-2xl mr-1.5 font-sans">RM</span>
                {totalPrice.toFixed(2)}
              </p>
            </div>
            
            <a 
              href={formUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className={`py-4 px-12 rounded-2xl font-bold transition-all duration-500 shadow-xl text-sm uppercase tracking-widest ${
                totalPrice > 0 
                ? "bg-amber-50 text-stone-900 hover:bg-white hover:scale-105 active:scale-95" 
                : "bg-stone-800 text-stone-600 cursor-not-allowed opacity-40"
              }`}
            >
              Checkout
            </a>
          </div>
          
          <div className="px-3 pt-4 border-t border-white/5">
            <p className="text-[11px] text-stone-500 leading-relaxed italic font-light text-center">
              * Total price is for reference only. Please confirm your final selection in the Google Form. 
              Our team will contact you via WhatsApp to finalize your artisanal loaf. Thank you!
            </p>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default MenuPage;