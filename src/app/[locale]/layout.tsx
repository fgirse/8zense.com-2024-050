import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import Navigation from '@/src/components/Navigation/navigation';
import {locales} from '@/src/config';
import '@/src/app/globales.css'
import Footer from '@/src/components/Footer/footer';
import { Metadata } from 'next';
import { Roboto_Condensed, Architects_Daughter } from "next/font/google"

import ScrollToTop from "@/src/components/ScrollToTop";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  const roboto = Roboto_Condensed({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-roboto-condensed"
  });

  const arch_daughter = Architects_Daughter({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--font-architects-daughter"
  });


  





const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocalLayout({
  children,
  params: {locale}
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          {children}
          <ScrollToTop/>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}