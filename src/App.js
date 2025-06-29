import { useEffect } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiRootme } from 'react-icons/si';
import { motion } from 'framer-motion';

function App() {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const handleMouseMove = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-black text-white font-sans relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Halo lumineux autour du curseur */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-96 h-96 rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.30) 0%, transparent 80%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      

<header className="w-full px-10 py-10 flex items-center justify-between border-b border-gray-800 bg-gray-950 text-lg md:text-xl">
  <div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 leading-tight">
      Gwilherm LE GALLIC
    </h1>
    <p className="text-base text-gray-500 -mt-1">Alias : Giremu</p>
  </div>

  <div className="flex items-center gap-10">
    <button
      disabled
      className="px-6 py-2 rounded-lg text-gray-600 border border-gray-600 cursor-not-allowed text-base"
    >
      Home
    </button>
    <div className="text-right">
      <p className="text-base text-gray-400">Depuis</p>
      <p className="text-3xl font-bold text-white leading-none">2004</p>
    </div>
  </div>
</header>

<main className="flex flex-col items-center justify-center px-4 py-24 text-center">
  <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
    Bienvenue sur mon portfolio
  </h2>
  <p className="text-gray-400 max-w-2xl text-lg">
    Étudiant aimant BEAUCOUP de choses diverses et variées comme les systèmes informatiques, les jeux vidéos, le Japon, la cybersécurité ou encore l'intelligence artificielle !
  </p>
</main>

<section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-y-10 gap-x-10 max-w-[1400px] mx-auto w-full">
  <div className="w-full md:w-1/2 max-w-sm rounded-xl overflow-hidden shadow-lg">
    <img
      src="/images/pfpTemp.jpg"
      alt="Cyber thème"
      className="object-cover w-full h-full rounded-xl"
    />
  </div>

<motion.div
  className="flex flex-col items-start gap-6 text-left w-full md:w-1/2"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
>
  <h3 className="text-3xl font-bold">Qui suis-je techniquement ?</h3>

  <div className="grid grid-cols-2 gap-4 w-full">
    <button className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-blue-400 hover:border-blue-400 transition w-full">
      Parcours scolaire
    </button>
    <button className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-purple-400 hover:border-purple-400 transition w-full">
      Parcours professionnel
    </button>
    <button className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-green-400 hover:border-green-400 transition w-full">
      Outils
    </button>
    <button className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-pink-400 hover:border-pink-400 transition w-full">
      Projets
    </button>
  </div>
</motion.div>

</section>

<section className="bg-gray-950 border-t border-b border-gray-800 text-white py-6 px-6 md:px-10 mt-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-center md:text-left text-lg font-medium">
      Envie de collaborer, discuter ou juste poser une question ?
    </p>
    <a href="mailto:giremu.jp@gmail.com" className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
      Me contacter
    </a>
  </div>
</section>

<section className="bg-black py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      Mes passions autres :
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


{/* Card 1 */}
<motion.div
  className="bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
>
  <img src="/images/IAPFP.jpg" alt="IA !" className="h-48 w-full object-cover" />
  <div className="p-6 flex flex-col justify-between flex-1">
    <h4 className="text-xl font-bold text-white mb-2">L'intelligence artificielle</h4>
    <p className="text-gray-400 text-sm mb-4">
      Analyse d’une API vulnérable, exploitation XSS/IDOR, documentation des findings.
    </p>
    <button className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
      Voir plus
    </button>
  </div>
</motion.div>

{/* Card 2 */}
<motion.div
  className="bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
>
  <img src="/images/JaponPFP.jpg" alt="Japon !" className="h-48 w-full object-cover" />
  <div className="p-6 flex flex-col justify-between flex-1">
    <h4 className="text-xl font-bold text-white mb-2">Le Japon</h4>
    <p className="text-gray-400 text-sm mb-4">
      Application React + Firebase intégrant une IA conversationnelle en front.
    </p>
    <button className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
      Voir plus
    </button>
  </div>
</motion.div>

{/* Card 3 */}
<motion.div
  className="bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
>
  <img src="/images/JeuxPFP.jpg" alt="Les jeux !" className="h-48 w-full object-cover" />
  <div className="p-6 flex flex-col justify-between flex-1">
    <h4 className="text-xl font-bold text-white mb-2">Les jeux vidéos</h4>
    <p className="text-gray-400 text-sm mb-4">
      Mon dashboard gamifié en Solo Leveling IRL pour suivre mes objectifs et XP.
    </p>
    <button className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
      Voir plus
    </button>
  </div>
</motion.div>


    </div>
  </div>
</section>

<footer className="bg-gray-950 border-t border-gray-800 text-white px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-lg">
  <div className="flex items-center gap-5 text-2xl">
    <span className="text-white text-base md:text-lg">Me retrouver ici :</span>
    <a href="https://www.root-me.org/Giremu?lang=fr#cad2eb1ef5d8301460a58aa7742537b5" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition">
      <SiRootme />
    </a>
    <a href="https://github.com/Giremuu" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition">
      <FaGithub />
    </a>
    <a href="mailto:giremu.jp@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full border border-white hover:bg-white hover:text-black transition">
      <FaEnvelope />
    </a>
  </div>

  <p className="text-sm md:text-base text-gray-400 text-center md:text-right">
    © 2025 — Conception & développement par Gwilherm “Giremu” Le Gallic.<br />
    Certaines images utilisées appartiennent à leurs auteurs respectifs.
  </p>
</footer>

    </motion.div>
  );
}

export default App;
