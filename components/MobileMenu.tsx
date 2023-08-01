import { useStateContext } from "@/context/StateContext"
import Image from "next/image"

import { BsX } from "react-icons/bs"

import { RentedColor } from "@/assets"

export default function MobileMenu() {
    const {navOpen, handleNavOpen}: any = useStateContext()


  return (
    <div className="fixed h-screen w-full top-0">
        <div className="h-screen w-full bg-black opacity-50 absolute top-0 left-0"/>
        <div className="fixed z-50 right-0 shadow-lg shadow-black top-0 h-screen w-[25rem] bg-gray-300 flex flex-col">
            <div className="h-20 w-[90%] flex mx-auto flex-row justify-between items-center">
                <Image 
                    src={RentedColor}
                    height={43}
                    width={115}
                    alt="rented"
                />
                <button>
                    <BsX className="h-12 w-12" />
                </button>
            </div>
        </div>
    </div>
  )
}
