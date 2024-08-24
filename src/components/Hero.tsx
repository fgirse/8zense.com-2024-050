'use client';

import Image from 'next/image';
//import { useTranslations } from 'next-intl';
import React from 'react';

import Gsap from '@/src/components/Gsap';

// import { useTranslations } from 'next-intl';
import HeroImage from '@/public/assets/images/interiore14.jpg';
import { useTranslations } from 'next-intl';

const Hero = () => {
const t = useTranslations('Hero');

  return (
    <section id="section-Hero" className="">
      <div className=" flex min-h-screen flex-col items-center">
        <Image alt="Hero" src={HeroImage} fill sizes="100vw" />

        <div className=" mx-auto flex w-full flex-col items-center justify-between ">
          <section className=" bg-gradient-to-b from bg-slate-800 to to-transparent">
            <h1 className="relative mb-8 text-center top-24 text-4xl leading-3 lg:text-white rounded-xl p-2 font-black  uppercase text-neutral-100 sm:py-1 sm:text-4xl md:text-6xl 'md:relative lg:relative lg:text-center lg:text-[4.0rem] lg:font-black lg:uppercase  lg:leading-9 xl:text-[4.66rem] 2xl:text-[5.166rem]">
            {t('präTitle')} 
            </h1>

            <h1 className="relative text-center top-[16vh] text-[4rem] font-black uppercase leading-3 text-lime-300 sm:mt-2 sm:text-8xl md:top-20 md:text-8xl lg:relative lg:top-[16vh] lg:text-[7.33rem] lg:font-black lg:leading-3 xl:text-[12.33rem]">
 {t('Title')}
            </h1>

            <p className="relative top-36 px-3 text-center text-[1.25rem] text-neutral-100 sm:text-4xl lg:mb-4 lg:top-60 lg:text-center lg:text-4xl lg:font-black">
          {t('postTitle')}
            </p>
          </section>
          <div className="relative top-60 mx-auto size-60 sm:w-72 sm:py-12 md:size-1/3 md:top-40 lg:size-max">
            <Gsap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
