"use client";
import React from "react";
import { useProductStore } from "@/store/productStore"; // @ alias 사용

export default function Accessories() {
  const products = [
    { name: "4 housing", desc: "Nipple size: ¼ inch" },
    { name: "6inch housing", desc: "Nipple size: ¼ inch" },
    { name: "11 housing", desc: "Nipple size: ¼ inch" },
    { name: "21mm" },
    { name: "35A" },
    { name: "40mm" },
    { name: "87mm" },
  ];


  const { setSelectedProduct } = useProductStore();

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
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
