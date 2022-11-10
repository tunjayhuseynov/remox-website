import React, { useRef } from "react";

export default function Header() {
  return (
    <div className="w-full h-full">
      <div className="text-center flex flex-col items-center px-8  space-y-12 mt-24 tracking-wider justify-center w-full">
        <h1 className="text-[#000000] font-bold text-[3.62rem] w-full ">
            Simplified and Collaborative
          <span className="block">
            Treasury Management for <span className="text-primary">DAOs</span>
          </span>
        </h1>
        <h2 className="text-[#707070] px-12  sm:px-1 text-center tracking-wider break-words !mt-[2rem] font-medium text-base">
          Connect your organization wallets, onboard your contributors, automate
          your payroll, <br className="hidden sm:block" />
          manage your organization expenses, do budgeting & reporting and make
          investments <br className="hidden sm:block" />
          in DeFi while mitigating risks with dynamic risk assessments.
        </h2>
        <div className="grid grid-cols-2 gap-20 w-[72%] lg:w-[33%]  ">
          <button className="bg-[#FF7348] text-[#FFFFFF] rounded-md py-2 font-semibold text-lg">
            <a href="">
              Connect Wallet
            </a>
          </button>
          <button className="text-[#FF7348] border-[1px] border-solid py-2 rounded-md border-[#FF7348] bg-transparent text-lg font-semibold">
            <a href="">
              View Demo
            </a>
          </button>
        </div>
        <div className="!mt-[7rem]">
          <img src="Icons/Header/Dashboard_header.svg" alt="" className="w-[62rem] border-black border-solid border-4 rounded-md" />
        </div>
      </div>
    </div>
  );
}
