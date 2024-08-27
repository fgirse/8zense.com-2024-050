import React from "react";
import Arrow from "@/public/assets/images/arrow05.svg";
import EmailModal from "@/src/components/EmailModal";
import LottiCallToAct from "./LottiCallToAct";

const CallToAct = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full h-[50vh]">
        <LottiCallToAct />
        <EmailModal />
      </div>
    </div>
  );
};

export { CallToAct };
