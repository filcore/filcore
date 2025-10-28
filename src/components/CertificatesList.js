"use client";
import React from "react";
import { useProductStore } from "@/store/productStore"; // @ alias 사용

export default function CertificatesList() {
  const products = [
    { name: "ISO14001" },
    { name: "ISO9001" },
    { name: "CERTIFICATE of PATENT" },
    { name: "NSF CERTIFICATE", desc: 'NSF/ANSI 42' },
  ];


  const { setSelectedProduct } = useProductStore();

  return (
    <div className="grid grid-cols-4 gap-5">
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
