import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

const timelineData = [
  {
    year: "2019",
    title: "Baccalauréat",
    description: "Obtention du Bac filière STI2D (Sciences et Technologies de l’Industrie et du Développement Durable)."
  },
  {
    year: "2019-2020",
    title: "Fac en développement",
    description: "Première année à l’université en Informatique (licence abandonnée pour se réorienter en BTS)."
  },
  {
    year: "2023-2025",
    title: "BTS SIO",
    description: "BTS Services Informatiques aux Organisations, option SISR (infrastructure réseau et cybersécurité)."
  },
  {
    year: "2025-2026",
    title: "Licence Cybersécurité",
    description: "Licence professionnelle en cybersécurité en alternance."
  },
  {
    year: "2026-2028",
    title: "Master Cybersécurité",
    description: "Master en cybersécurité avec spécialisation en défense des systèmes d’information."
  }
];

const diplomas = {
  bac: {
    icon: "🧱",
    title: "BAC STI2D",
    location: "Académie de Nantes — 2022",
    mention: "Mention Assez Bien",
    specialties: "Mathématiques, Numérique",
    status: "Obtenu",
    skills: [
      "Logique algorithmique",
      "Travail en projet",
      "Culture technologique"
    ]
  },
  fac: {
    icon: "📚",
    title: "Fac de développement",
    location: "Université - 2019/2020",
    mention: "Réorientation",
    specialties: "HTML/CSS, algo",
    status: "1 an (abandonnée)",
    skills: [
      "Introduction à la programmation",
      "Découverte HTML/CSS et C",
      "Réorientation réfléchie"
    ]
  },
  bts: {
    icon: "🛠️",
    title: "BTS SIO (SISR)",
    location: "2023–2025",
    mention: "Infrastructure & Cybersécurité",
    specialties: "Linux, réseau, scripts",
    status: "En cours",
    skills: [
      "Linux, réseau, cybersécurité",
      "Scripts Bash / PowerShell",
      "Gestion d'infrastructure"
    ]
  },
  licence: {
    icon: "🔐",
    title: "Licence Cybersécurité",
    location: "2025–2026",
    mention: "Pro en alternance",
    specialties: "Pentest, sécurité SI",
    status: "Prévue",
    skills: [
      "Analyse de vulnérabilités",
      "Pentest web / infra",
      "Sécurité SI & conformité"
    ]
  },
  master: {
    icon: "🏛️",
    title: "Master Cybersécurité",
    location: "2026–2028",
    mention: "Défense des SI",
    specialties: "Threat hunting, cyberdéfense, gouvernance",
    status: "Objectif",
    skills: [
      "Threat hunting avancé",
      "Gestion des risques",
      "Gouvernance cybersécurité"
    ]
  }
};

function Education() {
  const [selectedKey, setSelectedKey] = useState("bac");
  const selectedDiploma = diplomas[selectedKey];

  return (
    <PageWrapper>
      <main className="px-10 py-20 flex flex-col lg:flex-row gap-16">
        {/* Timeline à gauche */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <span role="img" aria-label="graduation cap">🎓</span> My Education
          </h1>
          <div className="relative border-l-2 border-purple-400 pl-6 space-y-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-4 top-1 w-3 h-3 bg-purple-400 rounded-full" />
                <h3 className="text-xl font-semibold text-white">
                  {item.year} – {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carte diplômes + boutons */}
        <div className="flex-1 flex flex-col justify-between">
          <motion.div
            key={selectedKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-gray-900 border border-purple-600 rounded-xl p-6 shadow-lg w-full h-full"
          >
            <h3 className="text-4xl font-bold text-purple-400 mb-6 flex items-center gap-3">
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block"
              >
                {selectedDiploma.icon}
              </motion.span>
              {selectedDiploma.title}
            </h3>
            <p className="text-lg text-gray-300 mb-2">📍 {selectedDiploma.location}</p>
            <p className="text-lg text-gray-300 mb-2">🏅 {selectedDiploma.mention}</p>
            <p className="text-lg text-gray-300 mb-2">📘 {selectedDiploma.specialties}</p>
            <p className="text-xl font-semibold text-green-400 mt-4">✅ {selectedDiploma.status}</p>

            <div className="mt-6">
              <h4 className="text-purple-400 font-semibold text-lg mb-2">🧠 Acquis :</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {selectedDiploma.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {Object.keys(diplomas).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-4 py-2 rounded-full border text-base ${
                  selectedKey === key
                    ? "bg-purple-500 text-white"
                    : "border-purple-400 text-purple-400 hover:bg-purple-700 hover:text-white"
                } transition`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}

export default Education;
