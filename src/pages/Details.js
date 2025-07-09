import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIndice } from "../api/fetchIndice"; 
import { ArrowLeft } from 'lucide-react';


// ? Composant qui affiche le detail complet d'un indice
export default function Details() {
  const { symbol } = useParams(); // recupere le symbole depui l'url
  const [data, setData] = useState("");

  useEffect(() => {
    // ! on appelle la fonction fetchIndice pour avoir les infos
    fetchIndice(symbol)
      .then((res) => {
        console.log(res); // pour tester
        setData(res);
      })
      .catch((err) => console.error(err));
  }, [symbol]);


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-purple-700 p-10 text-white">
      <header className="mb-6 flex justify-center">
        <h1 className="text-4xl font-bold flex items-center font-sans gap-4 drop-shadow-md">
          Détails de {symbol.toUpperCase()}
        </h1>
      </header>

      <div className="bg-purple-800 bg-opacity-60 rounded-xl p-6 max-w-md mx-auto space-y-4 shadow-lg">
        <p>
          <strong>Prix actuel :</strong> {data.regularMarketPrice}
        </p>
        <p>
          <strong>Changement :</strong> {data.regularMarketChange}
        </p>
        <p>
          <strong>Volume :</strong> {data.regularMarketVolume}
        </p>
        <p>
          <strong>Ouverture :</strong> {data.regularMarketOpen}
        </p>
        <p>
          <strong>Plus haut du jour :</strong> {data.regularMarketDayHigh}
        </p>
        <p>
          <strong>Plus bas du jour :</strong> {data.regularMarketDayLow}
        </p>
        <p>
          <strong>Description :</strong> {data.longName || "Aucune description"}
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <a href="/" className="flex items-center gap-4 justify-center w-max px-6 py-2.5 text-center text-white duration-200 bg-purple-700 border-2 border-purple-700 rounded-full hover:bg-transparent hover:border-purple-700 text-lg">
          <ArrowLeft  size={40} color="#613583" strokeWidth={2.5} /> Retour à la liste
        </a>
      </div>
    </div>
  );
}
