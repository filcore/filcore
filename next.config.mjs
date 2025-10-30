/** @type {import('next').NextConfig} */
const nextConfig = {
  // React Strict Mode 활성화
  // 개발 중 잠재적 문제를 콘솔에 경고하고 React의 안전성을 높임
  reactStrictMode: true,

  // Next.js 기본 헤더 "X-Powered-By: Next.js" 제거
  // 공격자가 사용 중인 프레임워크 정보를 알 수 없게 하여 보안 강화
  poweredByHeader: false,

  // 모든 페이지에 전역 헤더 적용
  async headers() {
    return [
      {
        source: "/(.*)", // 모든 경로에 적용
        headers: [
          // HSTS(HTTP Strict Transport Security)
          // 브라우저에 HTTPS만 사용하도록 지시, 하위 도메인 포함, preload 등록 가능
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },

          // 클릭재킹 방지
          // 페이지가 iframe으로 다른 사이트에 삽입되는 것을 차단
          { key: "X-Frame-Options", value: "DENY" },

          // MIME 타입 스니핑 방지
          // 브라우저가 파일 유형을 추측하지 않고 서버가 지정한 Content-Type을 따르도록 강제
          { key: "X-Content-Type-Options", value: "nosniff" },

          // referrer 정책
          // 외부 사이트로 이동할 때 Referer 헤더에 URL 정보 노출 최소화
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // 브라우저 권한 정책
          // geolocation, microphone, camera 같은 권한 사용 차단
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },

          // 콘텐츠 보안 정책(CSP)
          // 외부 스크립트, 스타일, 이미지 등 로드 가능한 소스를 제한하여 XSS 공격 방지
          // 'unsafe-inline' 추가 → React Hydration, Turbopack, GSAP 등 inline script 허용
          // connect-src에 외부 API 도메인 추가 → Iconify/Unisvg/Simplesvg API 요청 허용
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " + // 기본은 자기 사이트 리소스만 허용
              "script-src 'self' 'unsafe-inline'; " + // 스크립트는 자기 사이트 + inline 허용
              "style-src 'self' 'unsafe-inline'; " + // 스타일은 자기 사이트 + inline 허용
              "img-src 'self' data:; " + // 이미지 자기 사이트 + data URI 허용
              "connect-src 'self' https://api.iconify.design https://api.unisvg.com https://api.simplesvg.com; " + // 외부 API 허용
              "font-src 'self'; " + // 폰트 자기 사이트만
              "frame-ancestors 'none'; " + // iframe 포함 금지
              "base-uri 'self'; " + // <base> URL 자기 사이트만
              "form-action 'self';", // 폼 제출 URL 자기 사이트만
          },
        ],
      },
    ];
  },
};

export default nextConfig;
