import React from "react";
import { buttonStylings } from "../constants/constant";


export default function Feedback({ result, restart }) {

  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-9xl inline-block mq825:text-20xl mq450:text-14xl text-white">
        You are an <span className="text-21xl">{result}!</span>
      </h3>
      <section
        className="relative w-[1568px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[118px] 
      max-h-full max-w-full shrink-0 text-left text-xl text-white font-urbanist mq825:gap-[59px] mq450:gap-[29px]"
      >
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-91xl">
          <button
            onClick={restart}
            className={`${buttonStylings}`}
          >
            <b className="relative uppercase">Restart</b>
          </button>
        </div>
      </section>
    </div>
  );
}
