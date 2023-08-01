"use client"

import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";

import { RentedColor, menu } from '@/assets';
import { useStateContext } from "@/context/StateContext";
import { useRouter } from "next/router";

export default function Navbar() {
    const {asPath} = useRouter()

    const {navOpen, handleNavOpen}: any = useStateContext()

    console.log('navOpen', navOpen)

  return (
    <nav className="h-20 w-full flex-1">
        <div className="h-full w-[95%] flex flex-row justify-between items-center mx-auto">
            <Link href={'/'}>
                <Image
                    src={RentedColor}
                    height={43}
                    width={115}
                    alt="rented"
                />
            </Link>
            <div className="h-full flex-wrap bg-gray-200 rounded-full hidden md:block">
                <ul className="w-[35rem] flex flex-row justify-center items-center h-full gap-20">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={`#${item.toLowerCase()}`} className={`${asPath === `/#${item.toLowerCase()}` ? "text-[#010536] font-bold" : "font-bold text-sm"}`}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden md:block">
                <button type="button" className="flex flex-row justify-center items-center gap-2">
                    <AiOutlineLogin />
                    <p>Login</p>
                </button>
            </div>
            <div className="block md:hidden">
                <button onClick={handleNavOpen}>
                    <AiOutlineMenu className="h-10 w-10" />
                </button>
            </div>
        </div>
    </nav>
  )
}
