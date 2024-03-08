import React from "react";

import { buttonStylings } from "../constants/constant";
import ArrowIconComponent from "./Shared/ArrowIcon";

export default function Landing({ handleGetStartedClick }) {
  return (
    <>
      <section
        className="relative w-[1568px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[118px] 
      max-h-full max-w-full shrink-0 text-left text-xl text-white font-urbanist mq825:gap-[59px] mq450:gap-[29px]"
      >
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-91xl">
            <button
              onClick={handleGetStartedClick}
              className={`${buttonStylings} w-[234px]`}
            >
              <b className="relative uppercase">Get Started</b>
              <ArrowIconComponent />
            </button>
        </div>
      </section>
    </>
  );
}
