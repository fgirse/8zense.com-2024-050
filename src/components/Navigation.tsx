"use client";

import Image from "next/image";
import { useState } from "react";

import LogoEZ from "@/src/components/EZLogo";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

//import todoImage from "@/public/assets/icons/";
//import calendarImage from "@/public/assets/icons/calendar.svg";
//import remindersImage from "@/public/assets/icons/icon-reminders.svg";
//import planningImage from "@/public/assets/icons/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    link: "./",
    children: [
      {
        label: "Features",
        link: "#section-features",
      },
      {
        label: "How it works",
        link: "#section-itworks",
      },
      {
        label: "References",
        link: "#section-projRef",
      },
      {
        label: "Testimonials",
        link: "#section-testimonials",
      },
    ],
  },
  {
    label: "About",
    link: "./about",
  },
  {
    label: "Galerie",
    link: "./gallery",
  },
  {
    label: "Kontakt",
    link: "./contact",
  },

  {
    label: "Impressum",
    link: "./impressum",
    children: [
      {
        label: "Datenschutz",
        link: "#",
      },
      {
        label: "Cookies",
        link: "#",
      },
      {
        label: "Rechtliches",
        link: "#",
      },
      {
        label: "frei",
        link: "#",
      },
    ],
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-1 text-3xl text-neutral-800 uppercase">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-12">
        {/* logo */}
        <Link href="/" className="ml-7">
          <div className=" flex-row items-center justify-center gap-x-4 md:flex">
            <div className="ml-5 mr-1 relative  w-9 hover:translate-x-2 hover:translate-y-2 hover:bg-slate-500">
              <LogoEZ />
            </div>

            <h1 className="md:hover:text-zenseCreme hidden text-slate-400 md:mr-6  md:block md:scale-125 md:text-lg md:hover:translate-x-2 md:hover:translate-y-2 xl:text-xl">
              8zenSe.com
            </h1>
          </div>
        </Link>

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all"
            >
              <p className="text-4xl py-1 px-2 flex cursor-pointer items-center  xl:text-[1.66rem] gap-2 font-black  text-neutral-800 hover:border-b-4  hover:border-neutral-800   ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8 bg-red-300 text-neutral-100 hover:text-black"
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      {/*<section className=" hidden md:flex items-center gap-8 ">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>*/}

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl text-neutral-800 md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="z-10 fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[99%] bg-red-800 px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-slate-100 hover:bg-slate-300/70 rounded-xl hover:text-slate-800 text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Login
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>*/}
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 py-3 px-1 border-b-2 w-full h-12 text-neutral-100 hover:bg-slate-200 hover:text-black text-[2.33rem] ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1 rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center py-1 pl-6 pr-8 text-2xl text-neutral-300 hover:text-black "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
