import {ReactNode} from 'react';
import './globales.css';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: '8zenSe.com',
  description: 'LandingPage for startup, Interiore Design, Innenarchitektur, Desing Beton-Möbel ',
  icons: {icon : "/assets/images/LogoEZ990.svg"}
}


type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children
}
