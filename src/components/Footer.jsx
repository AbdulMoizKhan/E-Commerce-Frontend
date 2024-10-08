import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Our Products</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/products/trousers" className="hover:text-white transition">Trousers</Link>
            </li>
            <li>
              <Link to="/products/shirts" className="hover:text-white transition">Shirts</Link>
            </li>
            <li>
              <Link to="/products/t-shirts" className="hover:text-white transition">T-Shirts</Link>
            </li>
            <li>
              <Link to="/products/ties" className="hover:text-white transition">Ties</Link>
            </li>
            <li>
              <Link to="/products/denims" className="hover:text-white transition">Denims</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
          <ul className="flex gap-6">
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm.5 12h-2V10H7V8h1.5V7a2.5 2.5 0 0 1 2.5-2.5H12v2h-1.5A.5.5 0 0 0 10 7v1h2l-.5 2h-1.5v4z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10S15.523 0 10 0zm4.5 14.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM15 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.25c7.546 0 11.66-6.248 11.66-11.65 0-.178 0-.356-.013-.532A8.287 8.287 0 0 0 20 4.458a8.17 8.17 0 0 1-2.357.646 4.115 4.115 0 0 0 1.804-2.272 8.186 8.186 0 0 1-2.605.996 4.104 4.104 0 0 0-7.003 3.736A11.646 11.646 0 0 1 1.42 3.147a4.094 4.094 0 0 0 1.27 5.467 4.082 4.082 0 0 1-1.854-.513v.051a4.104 4.104 0 0 0 3.292 4.008 4.074 4.074 0 0 1-1.852.07 4.103 4.103 0 0 0 3.83 2.843A8.231 8.231 0 0 1 1 16.29a11.588 11.588 0 0 0 6.29 1.839" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter to receive the latest updates and offers!</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-800 w-full max-w-full text-white border border-gray-700 focus:outline-none focus:border-white"
            />
            <button className="bg-blue-600 px-4 py-2 text-white rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
