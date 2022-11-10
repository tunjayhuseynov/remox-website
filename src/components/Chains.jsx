import React from 'react'

const Chains = () => {
  return (
    <div className='bg-white py-10 mt-10 md:mt-0 flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-semibold'>Live <span className='text-[#FF7348]'>on</span></h1>
        <div className="chains flex w-[60%] justify-between mt-11">
            <a href="https://ethereum.org/en/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Ethereum.svg" alt=""/>
            </a>
            <a href="https://solana.com/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Solana.svg" alt=""/>
            </a>
            <a href="https://celo.org/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Celo.svg" alt=""/>
            </a>
            <a href="https://www.avax.network/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Avax.svg" alt=""/>
            </a>
            <a href="https://polygon.technology/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Polygon.svg" alt=""/>
            </a>
            <a href="https://www.bnbchain.org/en" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Binance.svg" alt=""/>
            </a>
            <a href="https://gnosischain.com/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Gnosis.svg" alt=""/>
            </a>
            <a href="https://www.optimism.io/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Optimism.svg" alt=""/>
            </a>
            <a href="https://arbitrum.io/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Arbitrium.svg" alt=""/>
            </a>
            <a href="https://fantom.foundation/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Fantom.svg" alt=""/>
            </a>
            <a href="https://aurora.dev/" target="_blank">
              <img className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 cursor-pointer" src="Icons/Chains/Aurora.svg" alt=""/>
            </a>
        </div>
    </div>
  )
}

export default Chains