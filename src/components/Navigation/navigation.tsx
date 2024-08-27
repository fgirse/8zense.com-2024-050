/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jIco0pmlXZZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/src/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/src/components/ui/sheet"
import { Button } from "@/src/components/ui/button"
import * as collapsible from "@/src/components/ui/collapsible"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import LogoEZ from"@/public/assets/images/LogoEZ990.svg";
import Switcher from '@/src/components/LocaleSwitcher'
export default function Component() {
  return (
    <header className="flex h-20 w-full bg-gradient to b from bg-slate-50 to transparence shrink-0 items-center px-4 md:px-6">
      <Link href="#" className="mr-6 hidden 2xl:flex" prefetch={false}>
        <Image src={LogoEZ} alt="Logo" className="h-16 w-16" />
        <span className="sr-only">8zense.com</span>
      </Link>
      <NavigationMenu className="hidden 2xl:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] p-2">
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">wer wir sind</div>
                    
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">was wir tun</div>
                    
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    prefetch={false}
                  >
                    <div className="text-sm font-medium leading-none group-hover:underline">unsere Geschichte</div>
                    
                  </Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
    Kontakt
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="#"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Impressum
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="2xl:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-red-900" side="left">
        <Link href="#" className="mr-6 hidden 2xl:flex" prefetch={false}>
        <Image src={LogoEZ} alt="Logo" className="h-16 w-16" />
        <span className="sr-only">8zense.com</span>
      </Link>
          <div className="bg-red-900 px-3 text-slate-300 grid gap-2 py-6">
            <Link href="/" className="flex w-full items-center py-2 text-2xl font-semibold hover:font-black hover:border-b-2 hover:border-spacing-12" prefetch={false}>
              Home
            </Link>
            <collapsible.Collapsible className="grid gap-4">
              <collapsible.CollapsibleTrigger className="flex w-full items-center text-2xl font-semibold [&[data-state=open]>svg]:rotate-90">
                About <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </collapsible.CollapsibleTrigger>
              <collapsible.CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-muted p-6">
                  <Link href="/about" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">Wer wir sind</div>
                
                
                  </Link>
                  <Link href="/about" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                    <div className="text-sm font-medium leading-none group-hover:underline">Was wir tun</div>
                    
                  </Link>
                  <Link href="/en/about" className="group grid h-auto w-full justify-start gap-1" prefetch={false}>
                  <div className="text-sm font-medium leading-none group-hover:underline">Was wir tun</div>
                  </Link>
                </div>
              </collapsible.CollapsibleContent>
            </collapsible.Collapsible>
            <Link href="/contact" className="flex w-full items-center py-2 text-2xl font-semibold hover:font-black hover:border-b-2 hover:border-spacing-12" prefetch={false}>
              Contact
            </Link>
            <Link href="/impressum" className="flex w-full items-center py-2 text-2xl font-semibold hover:font-black" prefetch={false}>
              Impressum
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Switcher/> 
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