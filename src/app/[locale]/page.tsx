import Image from "next/image";
import AuthButton from "@/src/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/src/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/src/components/tutorial/SignUpUserSteps";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import IntroWebside from "@/src/components/IntroWebside";
import CollapseCardFeatures from "@/src/components/CollapsCardFeature";
import FeatureAnim from "@/src/components/FeatureAnimated";
import Lotticall from "@/src/components/LottiCallToAct";
import { CallToAct } from "@/src/components/CallToAct";
import ColorChangeCards from "@/src/components/ColorChangeCard";
import IlluTestimonial from "@/public/assets/images/illustration.png";
import HorizontalSroll from "@/src/components/HorizontalScrollCarousel";
import { useTranslations } from "next-intl";
export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();


  return (
    <div className="flex-1 flex flex-col gap-2 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div className="flex-1 flex flex-col gap-0 max-w-4xl px-3"></div>
      <main className="flex-1 flex flex-col">
        {/*<section className="relative min-h screen"><Hero/></section>*/}

        {/*====================================================grid start ===============*/}

        <section className="w-[100vw] mx-auto bg-slate-300">
          <div className="relative">
            <Hero />
          </div>

          <section className="">
            <IntroWebside />
          </section>
          <section className="">
            <CollapseCardFeatures />
          </section>

          <section id="section-itworks" className="lg:h-[45vh]">
            <FeatureAnim />
          </section>

          <section id="section-projRef" className="-mt-4 lg:h-[66vh]">
            <div className="bg-black">
              <h1 className="text-center text-white uppercase text-3xl md:text-6xl lg:mb-24  ">
                Referenz Projekte
              </h1>
            </div>

            <ColorChangeCards />
          </section>
          <section className="h-screen">
            <CallToAct />
          </section>

          <section id="section-testimonials" className="-mt-24 lg:h-[70vh]">
            <div className="bg-black mb-7 mt-24">
              <h1 className="text-center text-white uppercase text-3xl md:text-6xllg:mb-24  ">
                Testimonials
              </h1>
            </div>
          </section>

          {/*====================================================grid ende ===============*/}

          <section className="">
            <HorizontalSroll />
          </section>
        </section>
      </main>
    </div>
  );
}
