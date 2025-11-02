// src/app/page.js (또는 page.tsx)
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { routing } from '@/i18n/routing';

export default function RootPage() {
  const acceptLanguage = headers().get('accept-language');
  const defaultLocale = routing.defaultLocale || 'ko';

  // 브라우저 언어 감지
  const userLang = acceptLanguage?.split(',')[0].toLowerCase() || '';
  const locale =
    userLang.startsWith('en') ? 'en' :
      userLang.startsWith('ko') ? 'ko' :
        defaultLocale;

  redirect(`/${locale}`);
}
