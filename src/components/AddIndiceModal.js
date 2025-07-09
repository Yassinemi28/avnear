import React, { useState } from "react";


// ? Composant qui affiche la fenêtre modale pour ajouter un nouvel indice
export default function AddIndiceModal({ onClose, onAdd }) {
  const [nom, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [desc, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // ! verifie que le nom et le symbole ne sont pas vides
    if (!nom || !symbol) {
      alert("Nom et symbole sont obligatoires");
      return;
    }

    // Appelle la fonction onAdd passée en props pour ajouter l'indice
    onAdd({ nom, symbol, desc });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-purple-700 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Ajouter un indice
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-sm mt-4 bg-purple-900 bg-opacity-50 p-2 border-2 border-transparent duration-200 hover:border-yellow-300 focus:border-yellow-300 rounded"
            required
          />
          <input
            type="text"
            placeholder="Symbole"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full text-sm mt-4 bg-purple-900 bg-opacity-50 p-2 border-2 border-transparent duration-200 hover:border-yellow-300 focus:border-yellow-300 rounded"
            required
          />
          <textarea
            placeholder="Description (facultatif)"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-sm mt-4 bg-purple-900 bg-opacity-50 p-2 border-2 border-transparent duration-200 hover:border-yellow-300 focus:border-yellow-300 rounded"
          ></textarea>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-purple-900 border-transparent w-1/3 hover:border-red-600 rounded-full hover:bg-transparent duration-200 border-2 text-lg px-4 py-2 text-white hover:text-red-600 font-bold"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-green-600 border-transparent w-full px-4 py-2 rounded-full text-white hover:border-green-600 hover:bg-transparent border-2 duration-200 hover:text-green-600 font-bold"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
