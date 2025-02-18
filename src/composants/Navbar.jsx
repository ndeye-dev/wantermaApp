import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-gray-200 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold text-[#f1356d] font-bold">
              Wanterma
            </span>
          </a>

          {/* Burger Menu Button (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden  bg-gray-300 p-2 rounded dark:text-white focus:outline-none font-bold"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            <ul className="flex flex-row font-medium space-x-8 rtl:space-x-reverse text-sm">
              <li><a href="#" className="text-gray-600 dark:text-white hover:text-[#f1356d]">Tous</a></li>
              <li><a href="#" className="text-gray-600 dark:text-white hover:text-[#f1356d]">Hommes</a></li>
              <li><a href="#" className="text-gray-600 dark:text-white hover:text-[#f1356d]">Femmes</a></li>
              <li><a href="#" className="text-gray-600 dark:text-white hover:text-[#f1356d]">Enfants</a></li>
              <li><a href="#" className="text-gray-600 dark:text-white hover:text-[#f1356d]">Vente</a></li>
              <li>
                <a href="#" className="text-gray-600 dark:text-white hover:text-[#f1356d]">
                  Chariot <span className="bg-red-600 p-1 text-white rounded-sm">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="#" className="block text-gray-600 dark:text-white hover:text-[#f1356d]">Tous</a></li>
              <li><a href="#" className="block text-gray-600 dark:text-white hover:text-[#f1356d]">Hommes</a></li>
              <li><a href="#" className="block text-gray-600 dark:text-white hover:text-[#f1356d]">Femmes</a></li>
              <li><a href="#" className="block text-gray-600 dark:text-white hover:text-[#f1356d]">Enfants</a></li>
              <li><a href="#" className="block text-gray-600 dark:text-white hover:text-[#f1356d]">Vente</a></li>
              <li>
                <a href="#" className="block text-gray-600 dark:text-white hover:text-[#f1356d]">
                  Chariot <span className="bg-red-600 p-1 text-white rounded-sm">0</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
