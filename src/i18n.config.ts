import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en-us", "de-DE", "fr-FR"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "en-us": "🇺🇸 English",
  "de-DE": "🇩🇪 Deutsch",
  "fr-FR": "🇫🇷 French",
};

export const { Link, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });