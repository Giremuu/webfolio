//////////////////////////////////////////////////////////////////////////////////////////////////
//  Title : Webfolio Giremu
//  Author : Giremu
//  Start : June 2025
//  Objective : Create an online portfolio presenting my profile, technical skills and interests, to boost my credibility with recruiters and companies in the sector.
//  Technologies :
//     - React 19.1.0
//     - PostCSS 8.5.6
//     - TailWindCSS 3.4.1
//     - Github 
//////////////////////////////////////////////////////////////////////////////////////////////////

import { motion } from 'framer-motion';
import { Link, Routes, Route } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import MenuDrawer from './components/MenuDrawer';

import Education from './pages/Education';
import Experience from './pages/Experience';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import AI from './pages/AI';
import Japan from './pages/Japan';
import Game from './pages/Game';

function App() {
  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <motion.main
              className="flex flex-col items-center justify-center px-4 py-24 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                Bienvenue sur mon portfolio
              </h2>
              <p className="text-gray-400 max-w-2xl text-lg">
                Étudiant aimant BEAUCOUP de choses diverses et variées comme les systèmes informatiques, les jeux vidéos, le Japon, la cybersécurité ou encore l'intelligence artificielle !
              </p>
            </motion.main>

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
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-3xl font-bold">Qui suis-je techniquement ?</h3>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <Link to="/education" className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-blue-400 hover:border-blue-400 transition w-full text-center">
                    Education
                  </Link>
                  <Link to="/experience" className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-purple-400 hover:border-purple-400 transition w-full text-center">
                    Experience
                  </Link>
                  <Link to="/tools" className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-green-400 hover:border-green-400 transition w-full text-center">
                    Tools
                  </Link>
                  <Link to="/projects" className="px-4 py-2 rounded-lg font-medium border border-white text-white hover:text-pink-400 hover:border-pink-400 transition w-full text-center">
                    Projects
                  </Link>
                </div>
              </motion.div>
            </section>

            <section className="z-10 relative bg-gray-950 border-t border-b border-gray-800 text-white py-6 px-6 md:px-10 mt-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-center md:text-left text-lg font-medium">
                Envie de collaborer, discuter ou juste poser une question ?
              </p>
              <a
                href="mailto:giremu.jp@gmail.com"
                className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition"
              >
                Me contacter
              </a>
            </div>
          </section>


            <section className="bg-black py-20 px-6">
              <div className="z-10 relative max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                  Mes passions autres :
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    className="bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img src="/images/IAPFP.jpg" alt="IA !" className="h-48 w-full object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">L'intelligence artificielle</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Analyse d’une API vulnérable, exploitation XSS/IDOR, documentation des findings.
                      </p>
                      <Link to="/ai" className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-center">
                        Voir plus
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    className="z-10 relative bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img src="/images/JaponPFP.jpg" alt="Japon !" className="h-48 w-full object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Le Japon</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Application React + Firebase intégrant une IA conversationnelle en front.
                      </p>
                      <Link to="/japan" className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-center">
                        Voir plus
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    className="z-10 relative bg-gray-900 rounded-xl overflow-hidden shadow-md flex flex-col"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <img src="/images/JeuxPFP.jpg" alt="Les jeux !" className="h-48 w-full object-cover" />
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Les jeux vidéos</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Mon dashboard gamifié en Solo Leveling IRL pour suivre mes objectifs et XP.
                      </p>
                      <Link to="/game" className="mt-auto px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-center">
                        Voir plus
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
           </PageWrapper>
          }
        />

        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/game" element={<Game />} />
      </Routes>

      {/* ✅ Drawer global en dehors du routing */}
      <MenuDrawer />
    </>
  );
}

export default App;
