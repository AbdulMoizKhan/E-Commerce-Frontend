import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  function handleLogout() {
    localStorage.removeItem('accessToken');
    localStorage.setItem('isLoggedIn', 'false'); 
    setIsLoggedIn(false);
  }

  return (
    <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80">
      <div className="flex flex-wrap items-center justify-between text-blue-gray-900">
        <Link to="/" className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
          Black Purl
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/products" className="flex items-center">
                  SALE
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/products" className="flex items-center">
                  NEW ARRIVALS
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/products" className="flex items-center">
                  PRODUCTS
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                <Link to="/checkout" className="flex items-center">
                  CART
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-1">
            {isLoggedIn ? (
              <Link to="/" className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button" onClick={handleLogout}>
                <span>Log Out</span>
              </Link>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button">
                  <span>Log In</span>
                </Link>
                <Link to="/register" className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block" type="button">
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
          <button className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button" onClick={toggleSidebar}>
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      {isSidebarOpen && (
          <div className="fixed inset-0 z-40 backdrop-blur-sm bg-opacity-50" onClick={toggleSidebar}></div>
        )}
        <div className={`fixed bg-white top-0 right-0 z-40  w-[40%] flex h-full flex-col items-center justify-start p-6 lg:hidden transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button className="absolute top-4 right-4 text-gray-900" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul className="fixed basis-full flex-wrap flex flex-col items-center gap-y-4 mt-5">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-gray-900">
                <Link to="/products" className="flex items-center" onClick={toggleSidebar}>
                  SALE
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-gray-900">
                <Link to="/products" className="flex items-center" onClick={toggleSidebar}>
                  NEW ARRIVALS
                </Link>
              </li>
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-gray-900">
              <Link to="/products" className="flex items-center" onClick={toggleSidebar}>
                PRODUCTS
              </Link>
            </li>
            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-gray-900">
              <Link to="/checkout" className="flex items-center" onClick={toggleSidebar}>
                CART
              </Link>
            </li>
            {isLoggedIn ? (
              <Link to="/" className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => { handleLogout(); toggleSidebar(); }}>
                <span>Log Out</span>
              </Link>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={toggleSidebar}>
                  <span>Log In</span>
                </Link>
                <Link to="/register" className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={toggleSidebar}>
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;
