import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-toy-red flex items-center justify-center">
              <span className="text-white font-bubblegum text-xl">TP</span>
            </div>
            <span className="font-bubblegum text-2xl bg-gradient-to-r from-toy-red via-toy-blue to-toy-green bg-clip-text text-transparent">
              Toy Palace
            </span>
          </Link>
          
          <div className={`hidden md:flex space-x-8`}>
            <Link to="/categories" className="font-quicksand font-bold hover:text-toy-blue transition-colors">Categories</Link>
            <Link to="/new-arrivals" className="font-quicksand font-bold hover:text-toy-green transition-colors">New Arrivals</Link>
            <Link to="/sale" className="font-quicksand font-bold hover:text-toy-yellow transition-colors">Sale</Link>
            <Link to="/contact" className="font-quicksand font-bold hover:text-toy-purple transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-toy-blue text-white hover:bg-toy-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-toy-yellow text-white hover:bg-toy-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t">
            <Link 
              to="/categories" 
              className="block py-2 font-quicksand font-bold hover:text-toy-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/new-arrivals" 
              className="block py-2 font-quicksand font-bold hover:text-toy-green"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link 
              to="/sale" 
              className="block py-2 font-quicksand font-bold hover:text-toy-yellow"
              onClick={() => setIsMenuOpen(false)}
            >
              Sale
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 font-quicksand font-bold hover:text-toy-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;