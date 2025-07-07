import React from "react";

export default function IndiceCard({ name, symbol, price, change }) {
  const isPositive = change >= 0;

  return (
    <div className="bg-blue-900 text-white p-4 rounded shadow hover:scale-105 transition transform">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-sm text-gray-300">{symbol}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{price}</p>
          <p className={isPositive ? "text-green-400" : "text-red-400"}>
            {isPositive ? "🔼" : "🔽"} {change}
          </p>
        </div>
      </div>
    </div>
  );
}
