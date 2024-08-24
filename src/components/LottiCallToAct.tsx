"use client"

import React from "react";
import { useLottie } from "lottie-react";
import lottiCallToActAnimation from '@/public/assets/images/callToAct.json';
import Lottie from "lottie-react";

const LottiCallToAct = () => <Lottie className="bg-neutral-700" animationData={lottiCallToActAnimation} loop={false} />;

export default LottiCallToAct;