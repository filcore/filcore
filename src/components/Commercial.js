"use client";
import React from "react";
import { useProductStore } from "@/store/productStore"; // @ alias 사용

export default function Commercial() {
  const products = [
    {
      name: "10 inch (Popular)",
      surface: "1.4㎡",
      size: "590/390㎛",
      flow: "6.0ℓ/min (Under Press 0.1 Mpa)",
      badge: "commercial",
    },
    {
      name: "10 inch (Premium)",
      surface: "1.40㎡",
      size: "590/390㎛",
      flow: "6.0ℓ/min (Under Press 0.1 Mpa)",
      badge: "commercial",
    },
    {
      name: "20 inch",
      surface: "4.13㎡",
      size: "590/390㎛",
      flow: "9.0ℓ/min (Under pressure 0.1Mpa)",
      badge: "commercial",
    },
    {
      name: "20 inch (in)",
      surface: "5.064㎡",
      size: "590/390㎛",
      flow: "Flow test is required (Under development)",
      badge: "industrial",
    },
  ];

  const { setSelectedProduct } = useProductStore();

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
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
