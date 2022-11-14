import React from "react";

const Trusters = () => {
  return <div className="w-full py-10 bg-[#252525]">
    <h1 className="text-white text-center font-semibold mb-14 text-5xl">
      Trusted <span className="text-primary">by</span>
    </h1>
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-around items-center px-10 gap-x-14 md:gap-x-4 gap-y-10 md:gap-y-10 lg:gap-x-5 w-[90%] md:w-[68%] ">
        <a href="https://moola.market/" target="_blank">
          {/* <img src="Icons/Trusters/Moola.svg" className="w-[17rem] md:w-28 lg:w-44" alt="" /> */}
          <div className="flex space-x-5 items-center">
            <img src="Icons/Trusters/moola_head.png" className="w-[5rem] md:w-[2.875rem] rounded-full mt-3" alt="" />
            <img src="Icons/Trusters/moola.png" className="w-[12rem] md:w-[7.125rem]" alt="" />
          </div>
        </a>
        <a href="https://celo.org/" target="_blank">
          <img src="Icons/Trusters/Celo.svg" alt="" className="w-[17rem] md:w-44" />
        </a>
        <a href="https://ariswap.co/" target="_blank" className="md:hidden">
          <img src="Icons/Trusters/Arii.svg" alt="" className="w-[10.5rem] md:w-44" />
        </a>
        <a href="https://ubeswap.org/" target="_blank">
          <img src="Icons/Trusters/Ubeswap.svg" alt="" className="w-[23rem] md:w-[14rem]" />
        </a>
        <a href="https://www.nom.space/" target="_blank" className="md:hidden">
          <div className="flex space-x-3 items-center">
            <div className="flex-shrink-0 flex-grow-0">
              <img src="Icons/Trusters/nom_head.jpeg" alt="" className="w-[4rem] md:w-[3rem] rounded-full" />
            </div>
            <img src="Icons/Trusters/Nomspace.png" alt="" className="w-[18rem] md:w-[14rem]" />
          </div>
        </a>
        <a href="https://ariswap.co/" target="_blank" className="hidden md:block">
          <img src="Icons/Trusters/Arii.svg" alt="" className="md:w-28 lg:w-24" />
        </a>
        <a href="https://spirals.so" target="_blank">
          <img src="Icons/Trusters/Spirals.svg" alt="" className="w-[24rem] md:w-[14rem]" />
        </a>
        <a href="https://www.nom.space/" target="_blank" className="hidden md:block">
          <div className="flex space-x-3 items-center">
            <div className="flex-shrink-0 flex-grow-0">
              <img src="Icons/Trusters/nom_head.jpeg" alt="" className="w-[4rem] md:w-[3rem] rounded-full" />
            </div>
            <img src="Icons/Trusters/Nomspace.png" alt="" className="w-[13rem] md:w-[11rem]" />
          </div>
        </a>
        <a href="">
          <img src="Icons/Trusters/CyberBox.svg" alt="" className="w-[25rem] md:w-[14rem]" />
        </a>
      </div>
      <div>
        <p className="text-white text-2xl mt-10 font-medium">And many others</p>
      </div>
    </div>
  </div>
};

export default Trusters;
