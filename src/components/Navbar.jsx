import { FaTwitter,FaDiscord } from 'react-icons/fa';


export default function Navbar() {

    return <div className="h-[75px] w-full px-8 sm:px-16 lg:px-24">
        <div className="flex justify-between items-center h-full pt-5">
            <div>
                <img src="/Icons/Header/logo.png" className="w-[10.5rem] h-[2.75rem]" />
            </div>
            <div className="flex items-center gap-5 ">
                <div className="cursor-pointer">
                    <a href="https://twitter.com/useremox" target="_blank"><FaTwitter className='text-[#000] text-white text-[1.9rem] hover:text-[#1DA1F2] transition-all cursor-pointer' /></a>
                </div>
                <div className="cursor-pointer">
                    <a href="https://discord.gg/2r4hrNEbWn" target="_blank"><FaDiscord className='text-[#000] text-white text-[1.9rem] hover:text-[#7289DA] transition-all cursor-pointer' /></a>
                </div>
                <div className="self-center block pl-3" onClick={() => window.open("https://app.remox.io/", "_blank")}>
                    <button className="min-w-[7.5rem] px-2 py-[0.35rem] sm:px-4 sm:py-[0.594rem] sm:text-[14px] rounded-md font-semibold  bg-primary border-primary text-white hover:bg-[#ff5413] dark:hover:bg-[#ff5413] hover:border-[#ff5413] hover:text-white transition-all duration-400" >Enter App</button>
                </div>
            </div>
        </div>
    </div>
}
