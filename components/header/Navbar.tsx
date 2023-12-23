"use client";

import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container relative m-auto p-3 flex justify-between items-center">
      <h1 className="font-xl font-bold text-sky-800">.Dev</h1>
      <nav className={isOpen ? ("flex") : (" hidden md:flex")}>
      <div className="w-full flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
        <div >
            <input type="search" className="w-full h-12 px-4 py-1 border-2 rounded-l-lg  text-gray-800  focus:border-gray-800  focus:outline-none duration-200 "
                placeholder="البحث عن منتج" x-model="search" />
        </div>
        <div>
            <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg ">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    </div>

      </nav>
      <div className="flex items-center gap-3">
      <CiShoppingCart size={30} className='cursor-pointer' />
      <IoPersonCircleOutline size={30} className='cursor-pointer' />
        <button className="flex md:hidden justify-center items-center" onClick={toggleNavbar}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("hidden") : ("flex")}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("flex") : ("hidden")}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

      </div>
    </div>
  );
}
export default Navbar;