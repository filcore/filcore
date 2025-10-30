"use client";
import React from "react";
import { useProductStore } from "@/store/productStore";
import { Icon } from "@iconify/react";

export default function ProductDetailLayer() {
  const { selectedProduct, clearSelectedProduct } = useProductStore();

  if (!selectedProduct) return null;

  return (
    <div
      className="prdLayerBg fixed z-50 bg-black/30 backdrop-blur-sm top-0 left-0 inset-0 flex items-center justify-center px-5 md:px-0"
      onClick={clearSelectedProduct}
    >
      <div
        className="container mx-auto relative bg-white rounded-4xl p-10 grid grid-cols-2 gap-15 max-w-6xl min-h-80"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="closePrdDetail absolute top-5 right-5 z-30 cursor-pointer"
          onClick={clearSelectedProduct}
        >
          <Icon icon="ri:close-large-fill" width="24" height="24" />
        </button>

        <div className="grid grid-cols-1 gap-5 place-content-start">
          <div className="text-3xl font-black flex items-center gap-2">
            {selectedProduct.name}
            {selectedProduct.badge && (
              <span className="bg-[#54a8c7] text-white text-sm px-2 py-1 rounded-full">
                {selectedProduct.badge}
              </span>
            )}
          </div>
          <div>
            {selectedProduct.surface && <p>Surface area : {selectedProduct.surface}</p>}
            {selectedProduct.size && <p>Hollow fiber Size (OD/ID) : {selectedProduct.size}</p>}
            {selectedProduct.flow && <p>Initial Flow rate : {selectedProduct.flow}</p>}
            {selectedProduct.desc && <p>{selectedProduct.desc}</p>}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={selectedProduct.detailsImg}
            alt={selectedProduct.name}
            className="max-h-[600px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
