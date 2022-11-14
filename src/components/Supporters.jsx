import React from "react";

export default function Supporters() {
  return (
    <div className="w-full py-10 bg-main">
      <h1 className="text-white text-center font-semibold mb-10 text-5xl">
        Supported <span className="text-primary">by</span>
      </h1>
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="upside flex justify-between items-center pl-0 space-x-6 sm:space-x-0 sm:pl-10 w-[80%] ">
          <a href="https://www.orangedao.xyz/" target="_blank">
            <img src="Icons/Supporters/Orange-DAO.png" className="w-[13.625rem]" alt="" />
          </a>
          <a href="https://www.floriventures.com/" target="_blank">
            <img src="Icons/Supporters/flori-ventures.png" className="w-28 pl-0 sm:w-40 sm:pl-14" alt="" />
          </a>
          <a href="https://allegory.earth/" target="_blank">
            <div className="flex space-x-2 items-center">
              <img src="Icons/Supporters/Group 14.svg" className="w-20 sm:w-20" alt="" />
              <img src="Icons/Supporters/allegory.gif" className="w-60 sm:w-56 leading-none mt-3" alt="" />
            </div>
          </a>
        </div>
        <div className="w-[80%] mt-16 flex flex-col sm:flex-row sm:justify-between space-y-10 sm:space-y-0">
          <div className="border-solid border-[1px] px-8 sm:px-3 py-3 w-full sm:w-[38%] rounded-lg border-[#FF7348] flex items-center">
            <div className="logo">
              <a href="https://twitter.com/followrene" target="_blank">
                <img src="Icons/Supporters/Rene.svg" width={70} height={70} alt="" />
              </a>
            </div>
            <div className="ml-7 sm:ml-3">
              <h1 className="text-2xl text-white">Rene Reinsberg </h1>
              <p className="text-[#707070]">Celo Foundation</p>
            </div>
          </div>
          <div className="border-solid border-[1px] px-8 sm:px-3 py-3 w-full sm:w-[38%] rounded-lg border-[#FF7348] flex items-center">
            <div className="logo">
              <a href="https://twitter.com/marek_" target="_blank">
                <img src="Icons/Supporters/Marek.svg" width={70} height={70} alt="" />
              </a>
            </div>
            <div className="ml-7 sm:ml-3">
              <h1 className="text-2xl text-white">Marek Olszewski</h1>
              <p className="text-[#707070]">Valora & Celo Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
