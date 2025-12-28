import React from 'react';

// Define what data this component needs to receive
interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityCounter = ({ count, onIncrement, onDecrement }: Props) => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-amber-50 rounded-full py-2 px-4 border border-amber-200">
      <button 
        onClick={onDecrement}
        className="text-amber-900 font-bold text-xl hover:text-amber-600 transition-colors w-6"
      >
        −
      </button>
      
      <span className="text-lg font-semibold text-amber-900 w-6 text-center">
        {count}
      </span>

      <button 
        onClick={onIncrement}
        className="text-amber-900 font-bold text-xl hover:text-amber-600 transition-colors w-6"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;