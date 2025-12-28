import React from 'react';

// Define what data this component needs to receive
interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

// src/components/QuantityCounter.tsx
const QuantityCounter = ({ count, onIncrement, onDecrement }: Props) => {
  return (
    <div className="inline-flex items-center bg-stone-50 rounded-2xl p-1 border border-stone-100">
      <button 
        onClick={onDecrement}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm text-stone-400 hover:text-stone-800 transition-all"
      >
        −
      </button>
      
      <span className="w-10 text-center font-medium text-stone-800">
        {count}
      </span>

      <button 
        onClick={onIncrement}
        className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white hover:shadow-sm text-stone-400 hover:text-stone-800 transition-all"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;