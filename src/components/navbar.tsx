import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

// src/components/Navbar.tsx
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif tracking-tight text-stone-800 hover:text-amber-700 transition-colors">
          Carbiee <span className="font-light italic">Bakery</span>
        </Link>
        <div className="flex gap-8 items-center text-sm uppercase tracking-widest font-medium text-stone-600">
          <Link to="/" className="hover:text-amber-700 transition-colors">Menu</Link>
          <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;