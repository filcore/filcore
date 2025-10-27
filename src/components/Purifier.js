"use client";
import React from "react";
import { useProductStore } from "@/store/productStore"; // @ alias 사용

export default function Purifier() {
  const products = [
    { name: "KO1819-A", surface: "0.18㎡", size: "590/390㎛", flow: "1.8ℓ/min (Under Press 0.1 Mpa)", badge: null },
    { name: "KO3014-CC", surface: "0.30㎡", size: "590/390㎛", flow: "1.8ℓ/min (Under Press 0.1 bar)", badge: null },
    { name: "KO3818-CC", surface: "0.38㎡", size: "590/390㎛", flow: "2.1ℓ/min (Under Press 0.1 Mpa)", badge: null },
    { name: "KO5830-OS", surface: "0.58㎡", size: "590/390㎛", flow: "3.0ℓ/min (Under Press 0.1 Mpa)", badge: null },
    { name: "KO32158-A", surface: "0.32㎡", size: "590/390㎛", flow: "1.9ℓ/min (Under Press 0.1 bar)", badge: null },
    { name: "KO40158-A", surface: "0.40㎡", size: "590/390㎛", flow: "2.3ℓ/min (Under Press 0.1 Mpa)", badge: null },
    { name: "KO0606-AP", surface: "0.06㎡", size: "590/390㎛", flow: "0.7ℓ/min (Under Press 0.1 Mpa)", badge: 'portable' },
    { name: "KO1112-N", surface: "0.11㎡", size: "460/300㎛", flow: "0.4~0.6ℓ/min (Gravity)", badge: 'portable' },
    { name: "KO1112-E", surface: "0.11㎡", size: "460/300㎛", flow: "1.4ℓ/min (Under pressure 0.1Mpa)", badge: 'portable' },
  ];

  const { setSelectedProduct } = useProductStore();

  return (
    <div className="grid grid-cols-5 gap-5">
      {products.map((prd) => {
        const img = `/prds/${prd.name}-.png`;
        return (
          <div
            key={prd.name}
            className="group relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelectedProduct({ ...prd, img, detailsImg: `/prds/${prd.name}.png` })}
          >
            <img src={img} alt={prd.name} />
            <div className="bg-zinc-700 p-2 text-white text-center transition-colors duration-300 group-hover:bg-zinc-900">
              <span>{prd.name}</span>
              {prd.badge && (
                <span className="bg-[#54a8c7] text-white text-xs px-2 py-0.5 rounded-full ml-3">
                  {prd.badge}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
