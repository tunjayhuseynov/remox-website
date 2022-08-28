import { useState } from 'react'
import { FaTwitter,FaDiscord } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [value, setValue] = useState('celo')

    return <div className="h-[75px] w-full px-8 sm:px-16 lg:px-24">
        <div className="flex justify-between items-center h-full pt-5">
            <div>
                <img src="/logo.png" className="w-[10.5rem] h-[2.75rem]" />
            </div>
            <div className="flex items-center gap-5">
                <div className="">
                    <a href="https://twitter.com/useremox" target="_blank"><FaTwitter style={{color: "white",fontSize: "1.9em"}} onMouseOver={({target})=>target.style.color="#1DA1F2"}  onMouseOut={({target})=>target.style.color="white"} /></a>
                </div>
                <div className="">
                    <a href="https://discord.gg/2r4hrNEbWn" target="_blank"><FaDiscord style={{color: "white",fontSize: "2em"}} onMouseOver={({target})=>target.style.color="#7289DA"}  onMouseOut={({target})=>target.style.color="white"}  /></a>
                </div>
                <div className="self-center block pl-3">
                    <button className=" px-2 py-[0.35rem] sm:px-4 sm:py-[0.6rem] sm:text-[14px]   rounded-md font-semibold  bg-primary border-primary text-white hover:bg-[#ff5413] dark:hover:bg-[#ff5413] hover:border-[#ff5413]   hover:text-white transition-all duration-400" >Coming Soon</button>
                </div>
            </div>
        </div>
    </div>
}
