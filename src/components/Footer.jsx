import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#252525] py-6 px-10 sm:px-16 pt-20 pb-11">
      <div className="w-full h-full grid grid-cols-[50%,50%] sm:grid-cols-[70%,30%] ">
        <div className="flex">
          <div>
          <img src="/Icons/logoFooter.svg" className="w-[10.5rem] h-[2.75rem]" />
          </div>
        </div>
        <div className="w-full h-full flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-white text-xl font-semibold pb-2">Company</div>
            <a
              href="https://medium.com/remoxhq"
              target="_blank"
              className="text-[#E5E5E5] hover:transition-all hover:text-primary text-sm"
            >
              Blog
            </a>
            <a
              href="https://demo.remox.io"
              target="_blank"
              className="text-[#E5E5E5] hover:transition-all hover:text-primary text-sm"
            >
              Demo
            </a>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="text-white text-xl font-semibold pb-2">Social</div>
            <a
              href="https://twitter.com/useremox"
              target="_blank"
              className="text-[#E5E5E5] hover:transition-all hover:text-primary text-sm "
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/2r4hrNEbWn"
              target="_blank"
              className="text-[#E5E5E5] hover:transition-all hover:text-primary text-sm"
            >
              Discord
            </a>
            <a
              href="https://www.linkedin.com/company/remoxhq"
              target="_blank"
              className="text-[#E5E5E5] hover:transition-all hover:text-primary text-sm"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[30%,70%] mt-20 ">
        <div className="text-gray-400 text-lg sm:text-xl">
          &#169; 2022 Remox, Inc.
        </div>
        <div className="flex items-center justify-end">
            <div className="text-xs sm:text-sm text-[#E5E5E5]">Liven on</div>
            <div className="chains ml-2 sm:ml-6 flex items-center justify-between space-x-3 md:space-x-6">
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Ethereum.svg" alt="" />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Solana.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Avax.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Celo.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Polygon.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Binance.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Gnosis.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Optimism.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Arbitrium.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Fantom.svg" alt=""   />
                <img className="w-4 h-4 lg:w-6 lg:h-6" src="Icons/Chains/Aurora.svg" alt=""   />
            </div>
        </div>
      </div>
    </footer>
  );
}
