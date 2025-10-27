"use client";
import { Icon } from '@iconify/react';
import React, { useState } from "react";

export default function Purifier() {
  const [selectedProduct, setSelectedProduct] = useState(null); // 선택된 상품 상태

  const products = [
    {
      id: "KO1819-A",
      img: "/prds/KO1819-A-.png",
      detailsImg: "/prds/KO1819-A.png",
      surface: "0.18㎡",
      size: "590/390㎛",
      flow: "1.8ℓ/min (Under Press 0.1 Mpa)"
    },
    {
      id: "KO1819-B",
      img: "/prds/KO1819-B-.png",
      detailsImg: "/prds/KO1819-B.png",
      surface: "0.20㎡",
      size: "600/400㎛",
      flow: "2.0ℓ/min (Under Press 0.1 Mpa)"
    },
    // 추가 상품도 같은 방식으로
  ];

  return (
    <>
      {/* 상품 리스트 */}
      <div className="grid grid-cols-5 gap-5">
        {products.map((prd) => (
          <div
            key={prd.id}
            className="group relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelectedProduct(prd)} // 클릭 시 선택
          >
            <img src={prd.img} alt={prd.id} />
            <div className="bg-zinc-700 p-2 text-white text-center transition-colors duration-300 group-hover:bg-zinc-900">
              {prd.id}
            </div>
          </div>
        ))}
      </div>

      {/* 상세 레이어 */}
      {selectedProduct && (
        <div
          className='prdLayerBg absolute z-50 bg-white/30 backdrop-blur-sm top-0 left-0 inset-0 pt-[60px] flex items-center justify-center'
          onClick={() => setSelectedProduct(null)} // 레이어 바깥 클릭 시 닫기
        >
          <div
            className='container mx-auto relative bg-white rounded-4xl p-10 grid grid-cols-2 gap-15 max-w-6xl'
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 이벤트 전파 방지
          >
            <button
              className='closePrdDetail absolute top-5 right-5 z-30 cursor-pointer'
              onClick={() => setSelectedProduct(null)} // 닫기 버튼
            >
              <Icon icon="ri:close-large-fill" width="24" height="24" />
            </button>

            {/* 상품 정보 */}
            <div className='grid grid-cols-1 gap-5 place-content-start'>
              <div className='text-3xl font-black'>{selectedProduct.id}</div>
              <div>
                <p>Surface area : {selectedProduct.surface}</p>
                <p>Hollow fiber Size (OD/ID) : {selectedProduct.size}</p>
                <p>Initial Flow rate : {selectedProduct.flow}</p>
              </div>
            </div>

            {/* 이미지 */}
            <div className='flex justify-center items-center'>
              <img src={selectedProduct.detailsImg} alt={selectedProduct.id} className="max-h-[600px] object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* 상태 확인용 */}
      <pre>{JSON.stringify(selectedProduct, null, 2)}</pre>
    </>
  );
}
