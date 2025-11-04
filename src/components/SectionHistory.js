"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation"; // 현재 URL에서 locale 감지
import { useTranslations } from "next-intl";

const historyData = [
  {
    year: "2020 ~",
    content: {
      ko: [
        "2025. 07. 방콕 Thaiwater 전시회 참가",
        "2025. 03. 암스테르담 Aquatech 2025 전시회 참가",
        "2024. 10. 호치민 Vietwater 전시회 참가",
        "2023. 11. 암스테르담 Aquatech 2023 전시회 참가",
        "2022. 12. 쿠알라룸푸르 Asiawater 2022 전시회 참가",
        "2020. 09. 필코아 확장이전"
      ],
      en: [
        "Jul 2025. Participated in Thaiwater Exhibition, Bangkok",
        "Mar 2025. Participated in Aquatech 2025 Exhibition, Amsterdam",
        "Oct 2024. Participated in Vietwater Exhibition, Ho Chi Minh City",
        "Nov 2023. Participated in Aquatech 2023 Exhibition, Amsterdam",
        "Dec 2022. Participated in Asiawater 2022 Exhibition, Kuala Lumpur",
        "Sep 2020. Relocated and expanded FILCORE headquarters",
      ]
    }
  },
  {
    year: "2018 ~ 2019",
    content: {
      ko: [
        "2019. 11. 암스테르담 Aquatech 2019 전시회 참가",
      ],
      en: [
        "Nov 2019. Participated in Aquatech Amsterdam 2019",
      ]
    }
  },
  {
    year: "2016 ~ 2017",
    content: {
      ko: [
        "2017. 11. 암스테르담 Aquatech 2017 전시회 참가",
        "2017. 06. 특허등록(No. 10-1748358) ‘폴리설폰 중공사 분리막의 제조방법 및 이에 의해 제조된 폴리설폰 중공사 분리막’",
        "2016. 01. 바이러스 제거용 중공사막 제품 출시 및 판매."
      ],
      en: [
        "Nov 2017. Participated in Aquatech Amsterdam 2017",
        "Jun 2017. Patent registered (No. 10-1748358) for polysulfone hollow fiber membrane manufacturing method",
        "Jan 2016. Released and sold virus-removing hollow fiber membrane products"
      ]
    }
  },
  {
    year: "2012 ~ 2015",
    content: {
      ko: [
        "2015. 12. 바이러스 제거용 중공사막 개발 완료 (UF membrane).",
        "2015. 11. 암스테르담 Aquatech 2015 전시회 참가",
        "2015. 04. 라스베가스 Aquatech 전시회 참가",
        "2014. 12. 삼백만불 수출의 탑 수상",
        "2013. 12. 백만불 수출의 탑 수상",
        "2013. 12. ISO14001:2004 인증획득 (Certification No. GK-1594-EC)",
        "2013. 11. 암스테르담 Aquatech 2013 전시회 참가",
        "2013. 07. 자카르타 Indowater 2013 참가",
        "2012. 07. NSF/ANSI Standard 42번 인증 (UF element/module) (No. C0070416/7-01)"
      ],
      en: [
        "Dec 2015. Completed development of virus-removing hollow fiber membrane (UF membrane)",
        "Nov 2015. Participated in Aquatech Amsterdam 2015",
        "Apr 2015. Participated in Aquatech Las Vegas 2015",
        "Dec 2014. Awarded Export Tower for 3 million USD",
        "Dec 2013. Awarded Export Tower for 1 million USD",
        "Dec 2013. ISO14001:2004 Certification obtained (No. GK-1594-EC)",
        "Nov 2013. Participated in Aquatech Amsterdam 2013",
        "Jul 2013. Participated in Indowater Jakarta 2013",
        "Jul 2012. NSF/ANSI Standard 42 certification (UF element/module) (No. C0070416/7-01)"
      ]
    }
  },
  {
    year: "2010 ~ 2011",
    content: {
      ko: [
        "2010. 11. 수출 유망 중소기업 지정 (No. 2010 Kyeonggi-255)",
        "2010. 09. ISO9001:2008 인증 획득 (ICR : Registration No.Q470910)",
        "2010. 01. 중공사막 해외 진출"
      ],
      en: [
        "Nov 2010. Designated as Promising Exporting SME (No. 2010 Kyeonggi-255)",
        "Sep 2010. ISO9001:2008 Certification obtained (ICR: No. Q470910)",
        "Jan 2010. Expanded overseas with hollow fiber membrane products",
      ]
    }
  },
  {
    year: "2008 ~ 2009",
    content: {
      ko: [
        "2009. 12. 제 3차 설비 증설.",
        "2008. 10. “기업부설연구소” 설립 (KOITA)",
        "2008. 08. 벤처기업 인정 (No. 20080202602)",
        "2008. 05. 특허출원(No. 10-2008-0051065) ‘중공사 분리막 포팅용 유로장치 및 이를 포함하는 원심포팅 시스템’",
        "2008. 02. 특허출원(No. 10-2008-13448) ‘수투과성이 우수한 폴리설폰 중공사막 및 이의 제조방법’"
      ],
      en: [
        "Dec 2009. Completed the 3rd facility expansion",
        "Oct 2008. Established Corporate R&D Lab (KOITA)",
        "Aug 2008. Recognized as a Venture Company (No. 20080202602)",
        "May 2008. Patent applied (No. 10-2008-0051065) for hollow fiber membrane potting system",
        "Feb 2008. Patent applied (No. 10-2008-13448) for highly water-permeable polysulfone hollow fiber membrane"
      ]
    }
  },
  {
    year: "2007",
    content: {
      ko: [
        "2007. 09. Product Launching",
        "2007. 08. 제품양산 test 및 시제품 생산",
        "2007. 01. ㈜필코아 설립"
      ],
      en: [
        "Sep 2007. Product Launching",
        "Aug 2007. Mass production test and prototype production",
        "Jan 2007. Filcore Co., Ltd. established"
      ]
    }
  }
];

export default function SectionHistory() {
  // ✅ 'Section1Hero' 네임스페이스의 번역 텍스트를 불러옴
  const t = useTranslations("SectionHistory");

  const [activeYear, setActiveYear] = useState("2020 ~");
  const refs = useRef({});

  // URL에서 locale 추출 (예: /en/page → en)
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] || "ko";

  const toggleYear = (year) => {
    setActiveYear(year);
  };

  useEffect(() => {
    historyData.forEach((item) => {
      const el = refs.current[item.year];
      if (!el) return;
      const height = el.scrollHeight; // 실제 컨텐츠 높이

      if (item.year === activeYear) {
        gsap.to(el, {
          height: height + 18,
          duration: 1,
          ease: "power2.out",
          paddingTop: "1rem",
          paddingBottom: "1rem"
        });
      } else {
        gsap.to(el, {
          height: 0,
          duration: 1,
          ease: "power2.out",
          paddingTop: 0,
          paddingBottom: 0
        });
      }
    });
  }, [activeYear]);

  return (
    <section id='sectionHistory' className="section sectionHistory min-h-screen bg-zinc-50 flex items-center justify-center py-20 md:py-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-25 place-items-start px-5 md:px-0">
        {/* 왼쪽 텍스트 */}
        <div className="grid grid-cols-1 gap-2 text-2xl col-span-1">
          <div className="text-5xl font-black mb-5">History.</div>
          <div className="text-lg md:text-xl">{t("subtitle")}</div>
          <div className="text-xl md:text-2xl font-light">
            {t("description")}
          </div>
        </div>

        {/* 오른쪽 아코디언 */}
        <div className="col-span-2 grid grid-cols-1 gap-4 w-full">
          {historyData.map((item) => (
            <div key={item.year} className="w-full">
              {/* 년도 버튼 */}
              <div
                className="cursor-pointer text-2xl font-black bg-gray-200 p-3"
                onClick={() => toggleYear(item.year)}
              >
                {item.year}
              </div>

              {/* 내용 */}
              <div
                ref={(el) => (refs.current[item.year] = el)}
                className="overflow-hidden h-0"
              >
                <div className="text-lg bg-zinc-50 p-3 space-y-2">
                  {item.content[locale]?.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
