import React from "react";

const ScaleUp = () => {
  return (
    <div className="bg-white py-10 w-full h-ful flex justify-center py-32">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          Scale up with <span className="text-[#FF7348]">Remox</span>
        </h1>
        <p className="text-[#707070] text-lg mt-7 font-medium">
          Streamlined features allow you to plan, spend, invest, <span className="block">report, and
          manage your DAO treasury in one place.</span> 
        </p>
        <button onClick={()=> window.open("https://app.remox.io", "_blank")} className="bg-[#FF7348] text-[#FFFFFF] rounded-md py-3 font-semibold text-[1.125rem] w-60 mt-5">
              Enter App
        </button>
      </div>
    </div>
  );
};

export default ScaleUp;
