
import "@/src/app/[locale]/globals.css";
import { locales } from "@/src/i18n.config";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import useTextDirection from "@/src/_hooks/useTextDirection";

import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';

import {ReactNode} from 'react';
import Navigation from '@/src/components/Navigation/navigation';

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
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const dir = useTextDirection();
  const messages = getMessages();
  return (
    <html lang={locale}  className='h-full' suppressHydrationWarning dir={dir}>
      <body className={clsx(roboto.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider>
          <Navigation />

          <div className="max-w-7xl mx-auto">{children}</div>
          <ScrollToTop/>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


