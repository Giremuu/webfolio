import React from 'react';
import { Menu } from 'lucide-react';

function MenuButton() {
  const handleClick = () => {
    if (window.toggleDrawer) window.toggleDrawer();
  };

  return (
    <button
      onClick={handleClick}
      className="text-white p-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}

export default MenuButton;
