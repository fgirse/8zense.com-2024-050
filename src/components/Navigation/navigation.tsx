
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jIco0pmlXZZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/src/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet"
import { Button } from "@/src/components/ui/button"
import * as collapsible from "@/src/components/ui/collapsible"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import LogoEZ from"@/public/assets/images/LogoEZ990.svg";
import LocaleSwitcher from '@/src/components/localewitcher'
//import revealLinks from '@/src/components/RevealLinks' 
import { Locale } from "@/src/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link"




export default function Navigation() {
  
  const locale = useLocale() as Locale;

  const t = useTranslations('Navigation')

  return (
    <header className="flex w-full bg-gradient to b from bg-neutral-100 to transparence shrink-0 items-center px-2 md:px-3">
     <div className="flex justify-between items-center bg-neutral-100 w-full">
     <Link href="/" className="mr-6 flex" prefetch={false}>  
        <div className="w-20 h-20">
        <Image src={LogoEZ} alt="Logo" width="60" height="60" /></div>
        <span className="sr-only">8zense.com</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
        <NavigationMenuLink asChild>
            <Link
              href="/"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md uppercase bg-neutral-200 hover:bg-neutral-300 px-4 py-2 text-sm  lg:text-[1.33rem] font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
               {t('home')}
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-neutral-200 hover:bg-neutral-300 uppercase lg:text-[1.33rem] font-black">{t('about')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="bg-slade-700 grid w-[400px] p-2 text-[2.3rem]">
                <NavigationMenuLink asChild>
                  <Link
                    href="/about/whoweare"
                    className=" group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-2xl lg:text-2xl font-black transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">  {t('whoweare')}</div>
                    
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about/whatwedo"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm lg:text-[1.33rem] font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-3xl lg:text-[1.33rem] font-black leading-none group-hover:underline">  {t('whatwedo')}</div>
                    
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about/ourhistory"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm lg:text-[1.33rem] font-black transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm lg:text-[1.33rem] font-black leading-none group-hover:underline">  {t('ourhistory')}</div>
                    
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 uppercase text-sm lg:text-[1.33rem] font-black bg-neutral-200 hover:bg-neutral-300 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
            {t('contact')}
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/impressum"
              className="hover:border-white hover:border-2                                                                                                                                                                                                       group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 uppercase  text-sm lg:text-[1.33rem] font-black bg-neutral-200 hover:bg-neutral-300 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
               {t('impressum')}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
        <div className="hidden lg:block lg:ml-12">
        <LocaleSwitcher locale={"en-us"}/>
        </div>
      </NavigationMenu>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="2xl:hidden mr-5">
            <MenuIcon className="h-8 w-8 text-slade-500" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
      
        <SheetContent className="bg-red-900" side="left">
        <Link href="/" className="mr-6 hidden 2xl:flex" prefetch={false}>
        <Image src={LogoEZ} alt="Logo" className="h-16 w-16" />
        <span className="text-blue-800">8zense.com</span>
      </Link>
          <div className="bg-red-900 px-3 text-slate-300 grid gap-2 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-[3.2322¨] font-semibold hover:font-black hover:border-b-2 hover:border-spacing-12" prefetch={false}>
              Home
            </Link>
            <collapsible.Collapsible className="grid gap-4">
              <collapsible.CollapsibleTrigger className="flex w-full items-center text-[3.23222rem] font-semibold [&[data-state=open]>svg]:rotate-90">
                {t("about")} <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </collapsible.CollapsibleTrigger>
              <collapsible.CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-slade-400   p-6">
                  <Link href="/about/whoweare" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm lg:text-[3.23222rem] font-medium leading-none group-hover:underline">   {t('whoweare')}</div>
                
              
                  </Link>
                  <Link href="/about/whatwedo" className="group grid text-[3.23222rem] h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">   {t('whatwedo')}</div>
                    
                  </Link>
                  <Link href="/about/ourhistory" className="group grid text-[3.23222rem] h-auto w-full justify-start gap-1" prefetch={false}>
                  <div className="text-sm font-medium leading-none group-hover:underline">   {t('ourhistory')}</div>
                  </Link>
                </div>
              </collapsible.CollapsibleContent>
            </collapsible.Collapsible>
            <Link href="/contact" className="flex w-full items-center py-2 text-2xl font-semibold hover:font-black hover:border-b-2 hover:border-spacing-12" prefetch={false}>
            {t('contact')}
            </Link>
            <Link href="/impressum" className="flex w-full items-center py-2 text-2xl font-semibold hover:font-black" prefetch={false}>
            {t('impressum')}
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="mr-5 md: lg:hidden">
      <LocaleSwitcher locale={"en-us"}/>
      </div> 
    </header>
  )
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}