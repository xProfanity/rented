import { useStateContext } from "@/context/StateContext"
import Image from "next/image"

import { AiOutlineLogin } from "react-icons/ai"
import { BsX } from "react-icons/bs"

import { RentedColor, menu } from "@/assets"
import Link from "next/link"
import { useRouter } from "next/router"

export default function MobileMenu() {
    const {navOpen, handleNavOpen}: any = useStateContext()
    const {asPath} = useRouter()

    const user = null

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

            <div className="mt-2 w-[90%] mx-auto flex flex-col">
                {user ? (
                    <p>User</p>
                ) : (
                    <button className="w-[70%] mx-auto flex flex-row justify-center items-center gap-2 bg-[#010536] h-10 text-white rounded-full">
                        <AiOutlineLogin />
                        <p>Login</p>
                    </button>
                )}
            </div>

            <div className="mt-4 w-[90%] mx-auto">
                <ul className="w-full flex flex-col">
                    {
                        menu.map((item, index) => (
                            <li key={index} className="h-10 w-full flex flex-col justify-center items-center">
                                <button>
                                    <Link href={`#${item.toLowerCase()}`}>
                                        <p className={`${asPath === `/#${item.toLowerCase()}` ? "text-[#010536] font-bold" : "font-bold text-sm"}`}>
                                        {item}
                                    </p>
                                    </Link>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
