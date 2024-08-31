import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const locales = ['en-us','de-DE', 'fr-FR'];
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});