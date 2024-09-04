import Navigation from "@/src/components/Navigation/navigation";
import Footer from "@/src/components/Footer/footer";
import ScrollToTop from "@/src/components/ScrollToTop"
import "@/src/app/[locale]/globals.css";
import { locales } from "@/src/i18n.config";
import useTextDirection from '@/src/_hooks/useTextDirection';
import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale
} from 'next-intl/server';
import {ReactNode} from 'react';
import {routing} from  '@/src/i18n/routing';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return routing.locales.map((locale: any) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
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
          <ScrollToTop />
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}