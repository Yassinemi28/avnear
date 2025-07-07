import React, { useState } from "react";
import IndiceCard from "./components/IndiceCard";
import AddIndiceModal from "./components/AddIndiceModal";

function App() {
  const [indices, setIndices] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddIndice = (indice) => {
    setIndices([...indices, indice]);
    // ➔ Ici tu appelleras ton API Node pour valider le symbole avant l'ajout
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 p-6 text-white">
      <header className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          📈 Suivi des indices
        </h1>
      </header>

      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 px-4 py-2 rounded mb-6 hover:bg-green-600"
      >
        ➕ Ajouter un indice
      </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {indices.map((i, index) => (
          <IndiceCard
            key={index}
            name={i.name}
            symbol={i.symbol}
            price={i.price || "N/A"}
            change={i.change || 0}
          />
        ))}
      </div>

      {showModal && (
        <AddIndiceModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddIndice}
        />
      )}
    </div>
  );
}

export default App;
