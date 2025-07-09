import React, { useState, useEffect } from "react";
import IndiceCard from "../components/IndiceCard";
import AddIndiceModal from "../components/AddIndiceModal";
import { fetchIndice } from "../api/fetchIndice";
import { TrendingUpDown } from "lucide-react";
import { ListPlus } from "lucide-react";


// ? Page d'accueil qui affiche la liste des indices
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [indices, setIndices] = useState(() => {
    const saved = localStorage.getItem("indices");
    return saved ? JSON.parse(saved) : [];
  });

  // sauvegarde les indices a chaque changement
  useEffect(() => {
    localStorage.setItem("indices", JSON.stringify(indices));
  }, [indices]);

  // fonction pour ajouter un nouvel indice  
  const handleAddIndice = async (indice) => {
    try {
      const data = await fetchIndice(indice.symbol);

      const newIndice = {
        nom: indice.nom,
        symbol: indice.symbol,
        desc: indice.desc,
        price: data.regularMarketPrice,
        change: data.regularMarketChange,
      };
      setIndices([...indices, newIndice]);
    } catch (error) {
      alert("Symbole invalide ou erreur API");
    }
  };

  const supprimerIndice = (symbol) => {
    const updated = indices.filter((i) => i.symbol !== symbol);
    setIndices(updated);
  };

  const modifierIndice = (symbol, newNom, newDesc) => {
    const updated = indices.map((i) =>
      i.symbol === symbol
        ? { ...i, nom: newNom, desc: newDesc }
        : i
    );
    setIndices(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-purple-700 p-6 text-white">
      <header className="mb-6 flex justify-center">
        <h1 className="text-4xl font-bold flex items-center font-sans gap-4 drop-shadow-md">
          <TrendingUpDown size={40} color="#613583" strokeWidth={2.5} /> Suivi
          des indices
        </h1>
      </header>

      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-4 justify-center w-max px-6 py-2.5 text-center text-white duration-200 bg-purple-700 border-2 border-purple-700 rounded-full hover:bg-transparent hover:border-purple-700 text-lg"
      >
        <ListPlus size={30} color="#ffffff" strokeWidth={2.5} /> Ajouter un
        indice
      </button>

      <div className="grid md:grid-cols-2 my-5 lg:grid-cols-3 gap-4">
        {indices.map((i, index) => (
          <IndiceCard
            key={index}
            nom={i.nom}
            symbol={i.symbol}
            price={i.price || "N/A"}
            change={i.change || 0}
            desc={i.desc}
            onDelete={supprimerIndice}
            onEdit={modifierIndice}
          />
        ))}
      </div>

      {showModal && (
        <AddIndiceModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddIndice}
        />
      )}
      <footer className="text-center text-sm opacity-80 mt-10">
        © 2025 - Projet suivi indices par Yassine
      </footer>
    </div>
  );
}
