import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => {
  return (
    <nav className="bg-amber-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* The brand logo should also be a link to the homepage */}
        <Link to="/" className="text-2xl font-bold">
          Carbiee Bakery
        </Link>
        <div className="space-x-4">
          {/* Replace <a> tags with <Link> */}
          <Link to="/" className="hover:text-amber-200">Home</Link>
          <Link to="/menu" className="hover:text-amber-200">Menu</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;