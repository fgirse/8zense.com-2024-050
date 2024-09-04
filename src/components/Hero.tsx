

import Image from 'next/image';
//import { useTranslations } from 'next-intl';
import React from 'react';
import Gsap from '@/src/components/Gsap';

// import { useTranslations } from 'next-intl';
import HeroImage from '@/public/assets/images/interiore13.jpg';
import HeroImageMobile from '@/public/assets/images/interiore14.jpg';
import { Locale } from "@/src/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link"
import { unstable_setRequestLocale } from "next-intl/server";

const locale: string =  "en-US";                                                                    
export default function Hero({
 
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);


  const t = useTranslations('Hero')

  return (
    <section id="section-Hero" className="">
     <div className=" flex min-h-screen flex-col items-center">
     <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src={HeroImage}
        fill
        className="hidden md:block"
        alt="Hero Image desktop"
      />
      <Image
        src={HeroImageMobile}
        fill={true}
        
        className="block md:hidden"
        alt="Hero Image mobile version"
      />
    </div>
        <div className=" mx-auto flex flex-col items-center justify-between ">
          <div className=" relative h-[26vh] bg-gradient-to-b from-transparent to-slate-800/60 px-6 ">
            <h1 className="relative mb-8 text-center top-28 text-4xl leading-3 lg:text-white rounded-xl p-2 font-black  uppercase text-neutral-100 sm:py-1 sm:text-4xl md:text-6xl 'md:relative lg:relative lg:text-center lg:text-[4.0rem] lg:font-black lg:uppercase  lg:leading-9 lg:top-10 xl:text-[4.66rem] 2xl:text-[5.166rem]">
            {t('präTitle')} 
            </h1>

            <h1 className="relative text-center top-[12vh] text-[3.66rem] font-black uppercase leading-3 text-lime-300 sm:mt-2 sm:text-8xl md:top-20 md:text-8xl lg:relative lg:top-[13vh] lg:text-[7.33rem] lg:font-black lg:leading-3 xl:text-[12.33rem]">
 {t('Title')}
            </h1>

            <p className="relative top-36 mb-5 px-3 text-center text-[1.25rem] text-neutral-100 sm:text-4xl lg:mb-4 lg:top-52 lg:text-center lg:text-4xl lg:font-black">
          {t('postTitle')}
            </p>
          </div>
          <div className="relative top-32 mx-auto size-60 sm:w-72 sm:py-12 md:size-1/3 md:top-40 lg:top-24 lg:size-max">
            <Gsap />
          </div>
        </div>
      </div>
    </section>
  );
};

