import React from "react";

const Trusters = () => {
  return <div className="w-full py-10 bg-[#252525]">
  <h1 className="text-white text-center font-semibold mb-14 text-5xl">
    Trusted <span className="text-primary">by</span>
  </h1>
  <div className="h-full w-full flex flex-col items-center justify-center">
    <div className="flex flex-wrap justify-around items-center px-10 gap-x-4 gap-y-3 lg:gap-x-5 space-y-3 sm:space-y-0 w-[70%] ">
      <a href="https://moola.market/" target="_blank">
        <img src="Icons/Trusters/Moola.svg" className="md:w-28 lg:w-44" alt="" />
      </a>
      <a href="https://celo.org/" target="_blank">
        <img src="Icons/Trusters/Celo.svg" alt="" />
      </a>
      <a href="https://ubeswap.org/" target="_blank">
        <img src="Icons/Trusters/Ubeswap.svg" alt="" />
      </a>
      <a href="https://ariswap.co/" target="_blank">
        <img src="Icons/Trusters/Arii.svg" alt="" />
      </a>
      <a href="" >
        <img src="Icons/Trusters/Spirals.svg" className="mr-14" alt="" />
      </a>
      <a href="https://www.nom.space/" target="_blank">
        <img src="Icons/Trusters/Nomspace.svg" alt="" />
      </a>
      <a href="">
        <img src="Icons/Trusters/CyberBox.svg" alt="" />
      </a>
    </div>
    <div>
        <p className="text-white text-2xl mt-10 font-medium">And many others</p>
    </div>
  </div>
</div>
};

export default Trusters;
