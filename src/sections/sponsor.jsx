import React, { useState, useEffect } from 'react';


export default function Sponsor() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        document.querySelector('body').style.overflowX = "hidden"
    }, [])


    return <div className="w-full py-2 bg-main relative z-[99]">
        <div className="min-h-[175px] sm:min-h-[430px] w-full flex flex-col items-center justify-between pb-8 gap-16 sm:gap-0 px-12 lg:px-20 2xl:px-28 2xl:max-w-[1650px] mx-auto">
            <div className="text-white text-center font-bold text-3xl sm:text-5xl tracking-wider pt-6 sm:pt-12">Trusted <span className="text-primary">by</span></div>
            <div className="flex flex-col items-center w-[90%] sm:w-[70%]  gap-8 sm:gap-12 h-full ">
                <div className="w-full h-full flex items-center justify-between"><img src="/sponsor_moola.svg" alt="" className="w-[110px] h-[33px]  sm:w-[265px] sm:h-[80px] cursor-pointer object-cover pb-[.2rem] sm:pb-0 " />
                    <img src="/sponsor_ari.svg" alt="" className="w-[60px] h-[30px] sm:w-[150px] sm:h-[90px]  cursor-pointer" />
                    <img src="/sponsor_poof.svg" alt="" className="w-[70px] h-[35px] sm:w-[200px] sm:h-[80px]  cursor-pointer" /></div>
                <div className="w-full h-full flex items-center justify-between gap-4">
                    <img src="/sponsor_nomspace.svg" alt="" className="w-[140px] h-[35px] sm:w-[380px]  sm:h-[80px] cursor-pointer xl:ml-20" />
                    <img src="/sponsor_ubeswap.svg" alt="" className=" w-[130px] h-[30px] sm:w-[370px]  sm:h-[70px] cursor-pointer" />
                </div>
            </div>

        </div>

    </div >
}
