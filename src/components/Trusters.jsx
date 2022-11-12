import React from "react";

const Trusters = () => {
  return <div className="w-full py-10 bg-[#252525]">
    <h1 className="text-white text-center font-semibold mb-14 text-5xl">
      Trusted <span className="text-primary">by</span>
    </h1>
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-around items-center px-10 gap-x-14 md:gap-x-4 gap-y-10 md:gap-y-3 lg:gap-x-5 space-y-3 sm:space-y-0 w-[90%] md:w-[68%] ">
        <a href="https://moola.market/" target="_blank">
          <img src="Icons/Trusters/Moola.svg" className="w-[17rem] md:w-28 lg:w-44" alt="" />
        </a>
        <a href="https://celo.org/" target="_blank">
          <img src="Icons/Trusters/Celo.svg" alt="" className="w-[17rem] md:w-28 lg:w-44" />
        </a>
        <a href="https://ariswap.co/" target="_blank">
          <img src="Icons/Trusters/Arii.svg" alt="" className="w-[10.5rem] md:hidden md:w-28 lg:w-44" />
        </a>
        <a href="https://ubeswap.org/" target="_blank">
          <img src="Icons/Trusters/Ubeswap.svg" alt="" className="w-[23rem] md:w-28 lg:w-44" />
        </a>
        <a href="https://www.nom.space/" target="_blank" className="md:hidden">
          <img src="Icons/Trusters/Nomspace.svg" alt="" className="w-[25rem] md:w-28 lg:w-44" />
        </a>
        <a href="https://ariswap.co/" target="_blank" className="hidden md:block">
          <img src="Icons/Trusters/Arii.svg" alt="" className="md:w-28 lg:w-44" />
        </a>
        <a href="https://spirals.so" target="_blank">
          <img src="Icons/Trusters/Spirals.svg" alt="" className="w-[24rem] md:w-28 lg:w-44" />
        </a>
        <a href="https://www.nom.space/" target="_blank" className="hidden md:block">
          <img src="Icons/Trusters/Nomspace.svg" alt="" className="w-[17rem] md:w-28 lg:w-44" />
        </a>
        <a href="">
          <img src="Icons/Trusters/CyberBox.svg" alt="" className="w-[25rem] md:w-28 lg:w-44" />
        </a>
      </div>
      <div>
        <p className="text-white text-2xl mt-10 font-medium">And many others</p>
      </div>
    </div>
  </div>
};

export default Trusters;
