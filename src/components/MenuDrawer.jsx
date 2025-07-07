import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const stickerPool = [
  '/images/sticker/sticker1.png',
  '/images/sticker/sticker2.png',
  '/images/sticker/sticker3.png',
  '/images/sticker/sticker4.png',
  '/images/sticker/sticker5.png'
];

function MenuDrawer() {
  const [open, setOpen] = useState(false);
  const [selectedSticker, setSelectedSticker] = useState(null);

  useEffect(() => {
    window.toggleDrawer = () => setOpen((prev) => !prev);
    window.closeDrawer = () => setOpen(false);
  }, []);

  useEffect(() => {
    const randomSticker = stickerPool[Math.floor(Math.random() * stickerPool.length)];
    setSelectedSticker(randomSticker);
  }, [open]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/education', label: 'Education' },
    { to: '/experience', label: 'Experience' },
    { to: '/tools', label: 'Tools' },
    { to: '/projects', label: 'Projects' },
    { to: '/ai', label: 'AI' },
    { to: '/japan', label: 'Japan' },
    { to: '/game', label: 'Game' },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          <motion.aside
            className="fixed top-0 left-0 h-full w-64 bg-gray-950 bg-opacity-95 backdrop-blur-md border-r border-gray-800 p-6 flex flex-col shadow-2xl z-[9999]"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Navigation</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-purple-400 transition text-lg border-b border-gray-800 pb-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {selectedSticker && (
              <div className="mt-auto flex justify-center pt-8">
                <img
                  src={selectedSticker}
                  alt="Random Sticker"
                  className="w-24 h-24 object-contain opacity-90 hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MenuDrawer;