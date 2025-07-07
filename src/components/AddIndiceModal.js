import React, { useState } from "react";

export default function AddIndiceModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !symbol) {
      alert("Nom et symbole sont obligatoires");
      return;
    }
    onAdd({ name, symbol, description });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white">Ajouter un indice</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            type="text"
            placeholder="Symbole"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <textarea
            placeholder="Description (facultatif)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
          ></textarea>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 px-4 py-2 rounded text-white"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
