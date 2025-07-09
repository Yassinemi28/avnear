import React, { useState } from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

// ? Composant qui affiche une carte d'indice boursier
export default function IndiceCard({
  nom,
  symbol,
  price,
  change,
  desc,
  onDelete,
  onEdit,
}) {
  const isPositive = change >= 0;
  const [modif, setEditMode] = useState(false);
  const [newNom, setNewName] = useState(nom);
  const [newDesc, setNewDescription] = useState(desc);

  // fonction pour sauvegarder les modifs
  const handleSave = () => {
    onEdit(symbol, newNom, newDesc);
    setEditMode(false);
  };

  return (
    <div className="bg-purple-700 bg-opacity-40 hover:bg-opacity-80 border-2  hover:scale-105 border-purple-700 rounded-xl p-6 duration-200 shadow hover:shadow-purple-900">
      <Link to={`/indice/${symbol}`}>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">{nom}</p>
            <p className="text-sm text-gray-300">{symbol}</p>
          </div>
          <div className="text-right w-1/4">
            <p className="text-2xl font-bold">{price}</p>
            <p className="flex items-center justify-between gap-2">
              {isPositive ? (
                <TrendingUp size={40} color="#33d17a" strokeWidth={2.5} />
              ) : (
                <TrendingDown size={40} color="#e01b24" strokeWidth={2.5} />
              )}
              {change}
            </p>
          </div>
        </div>
      </Link>

      {desc && (
        <p className="mt-2 text-sm bg-purple-900 bg-opacity-50 p-2 rounded">
          {desc}
        </p>
      )}

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onDelete(symbol)}
          className="bg-red-600 border-transparent px-4 py-2 rounded-full text-white hover:border-red-600 hover:bg-transparent border-2 duration-200 hover:text-red-600 font-bold"
        >
          Supprimer
        </button>

        <button
          onClick={() => setEditMode(!modif)}
          className="bg-yellow-600 border-transparent px-4 py-2 rounded-full text-white hover:border-yellow-600 hover:bg-transparent border-2 duration-200 hover:text-yellow-600 font-bold"
        >
          {modif ? "Annuler" : "Modifier"}
        </button>
      </div>

      {modif && (
        <div className="mt-3 space-y-2">
          <input
            type="text"
            value={newNom}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nom"
            className="w-full text-sm mt-4 bg-purple-900 bg-opacity-50 p-2 border-2 border-transparent duration-200 hover:border-yellow-300 rounded"
          />
          <input
            type="text"
            value={newDesc}
            placeholder="Disc"
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full text-sm bg-purple-900 bg-opacity-50 p-2 border-2 border-transparent duration-200 hover:border-yellow-300 rounded"
          />
          <button
            onClick={handleSave}
            className="bg-green-600 px-3 py-1 rounded text-white"
          >
            Sauvegarder
          </button>
        </div>
      )}
    </div>
  );
}
