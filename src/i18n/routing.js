import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 지원할 모든 언어
  locales: ['ko', 'en'],
  // 기본값
  defaultLocale: 'ko',
});
