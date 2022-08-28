import React from 'react'
import TypeAnimation from 'react-type-animation'

function TextAnimation() {
    return <div className="font-semibold  text-white min-h-[100px]  sm:min-h-[300px] 2xl:min-h-[500px] bg-main relative z-[99] py-4 flex flex-col items-center w-full justify-center space-y-10 px-12 xl:px-16 2xl:max-w-[1650px] mx-auto">
        <div className="min-h-[150px] sm:min-h-[390px] w-full   py-4 flex flex-col items-center justify-center gap-16 sm:gap-20 px-12 lg:px-20 2xl:px-24">
            <div className="text-white text-center font-bold text-3xl pt-8 sm:pt-32 sm:text-5xl tracking-wider ">Supported <span className="text-primary">by</span></div>
            <div className="flex flex-col gap-16 w-full h-full items-center justify-center">
                {/* <img src="/founder_group.png" alt="" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex flex-col sm:flex-row items-center  sm:py-0 gap-10 sm:gap-0 justify-center sm:justify-between ">
                <div className="sm:w-[350px]"><img src="/OrangeDAO.svg" alt="" className="w-[190px] h-[80px] sm:w-[260px] sm:h-[120px] object-cover" /> </div>
               <img src="/flori-ventures.svg" alt="" className="w-[85px] h-[140px] cursor-pointer  sm:w-[130px] sm:h-[210px] object-cover" />
               <img src="/allogoiv.svg" alt="" className="w-[235px] h-[60px] cursor-pointer  sm:w-[350px] sm:h-[90px] object-cover" />
                </div>
                <div className="w-full h-full flex flex-col gap-16 sm:gap-auto sm:flex-row justify-between items-center ">
                    <div className="flex items-center justify-start gap-2 border  py-3 px-5 min-w-[29rem] border-primary rounded-lg hover:bg-sec transition-all hover:transition-all">
                        <img src="/Rene_pp.png" alt="" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col gap-1">
                            <div className="text-3xl font-semibold">Rene Reinsberg</div>
                            <div className="text-[#aaaaaa] text-xl font-medium">Celo Foundation</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2 border  py-3 px-5 min-w-[29rem] border-primary rounded-lg hover:bg-sec transition-all hover:transition-all">
                        <img src="/Marek_pp.png" alt="" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col gap-1">
                            <div className="text-3xl font-semibold">Marek Olszewski</div>
                            <div className="text-[#aaaaaa] text-xl font-medium">Valora & Celo Foundation</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="text-2xl sm:text-4xl flex items-center justify-center !mt-0 gap-4 md:text-4xl xl:text-5xl 2xl:text-6xl min-h-[225px] sm:min-h-[450px]">One platform for <TypeAnimation
            className="text-primary"
            cursor={true}
            sequence={['Multi-wallet Management', 1000, 'Contributor Management', 1000, 'Payroll Management', 1000, 'Expense Management', 1000, 'Collaborative Budgeting', 1000, 'Risk Assessment', 1000, 'Portfolio Management', 1000,'Bookkeeping & Accounting', 1000,'Insights & Reporting', 1000]}
            wrapper={'span'}
            repeat={Infinity}
        />
        </div>
    </div>
}

export default TextAnimation