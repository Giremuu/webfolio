import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiRootme } from 'react-icons/si';

function Footer() {
  return (
    <footer className="z-10 relative bg-gray-950 border-t border-gray-800 text-white px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-lg">
      <div className="flex items-center gap-5 text-2xl">
        <span className="text-white text-base md:text-lg">Me retrouver ici :</span>
        <a
          href="https://www.root-me.org/Giremu?lang=fr#cad2eb1ef5d8301460a58aa7742537b5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
        >
          <SiRootme />
        </a>
        <a
          href="https://github.com/Giremuu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:giremu.jp@gmail.com"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="/CV_Giremu.pdf"
          download
          className="ml-4 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition text-base"
        >
          Télécharger le CV
        </a>
      </div>

      <p className="text-sm md:text-base text-gray-400 text-center md:text-right">
        © 2025 — Conception & développement par Gwilherm “Giremu” Le Gallic.<br />
        Certaines images utilisées appartiennent à leurs auteurs respectifs.
      </p>
    </footer>
  );
}

export default Footer;
