import React from 'react';
import MenuButton from './MenuButton';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-10 py-6 flex items-center justify-between border-b border-gray-800 bg-gray-950 bg-opacity-95 backdrop-blur-md text-lg md:text-xl shadow-lg">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-400 leading-tight">
          Gwilherm LE GALLIC
        </h1>
        <p className="text-base text-gray-500 -mt-1">Alias : Giremu</p>
      </div>

      <div className="flex items-center gap-6">
        <MenuButton />

        <div className="flex items-center gap-2">
          <img
            src="/images/flag-en.png"
            alt="English"
            className="w-8 h-6 object-cover rounded-sm cursor-pointer border border-white hover:opacity-80 transition"
          />
          <img
            src="/images/flag-jp.png"
            alt="Japanese"
            className="w-8 h-6 object-cover rounded-sm cursor-pointer border border-white hover:opacity-80 transition"
          />
        </div>

        <div className="text-right hidden md:block">
          <p className="text-base text-gray-400">Depuis</p>
          <p className="text-2xl font-bold text-white leading-none">2004</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
