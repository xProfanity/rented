"use client"

import { useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";

import { RentedColor, menu } from '@/assets';
import { useStateContext } from "@/context/StateContext";

export default function Navbar() {
    const {asPath} = useRouter()

    const {handleNavOpen, handleLogin, user, handleLogout}: any = useStateContext()

    const {status} = useSession()

  return (
    <nav className="h-20 w-full flex-1 z-40 backdrop-blur-sm border-b-2 border-white fixed">
        <div className="h-full w-[95%] flex flex-row justify-between items-center mx-auto">
            <Link href={'/'}>
                <Image
                    src={RentedColor}
                    height={43}
                    width={115}
                    alt="rented"
                />
            </Link>
            <div className="h-[80%] flex-wrap bg-gray-200 rounded-full hidden md:block">
                <ul className="w-[28rem] lg:w-[35rem] flex flex-row justify-center items-center h-full gap-20">
                    {menu.map(({link, name}, index) => (
                        <li key={index}>
                            <Link href={link}>
                                <p className={`${asPath === `/#${name.toLowerCase()}` ? "text-[#010536] font-bold" : "font-bold text-sm"}`}>
                                    {name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden md:block">
                {status === 'authenticated' && user ? (
                        <div className="flex flex-row justify-center items-center gap-3">
                            <Image
                                src={user?.image}
                                height={50}
                                width={50}
                                alt={`${user?.name} profile`}
                                className="object-contain rounded-full"
                            />
                            <button type="button" onClick={handleLogout}>
                                <AiOutlineLogout color="red"/>
                            </button>
                        </div>
                ) : status === 'unauthenticated' ? (
                    <button onClick={handleLogin} type="button" className="flex bg-[#010536] p-4 rounded-full flex-row justify-center items-center gap-2">
                        <AiOutlineLogin color="white" size={18}/>
                        <p className="text-white text-sm font-bold">Login</p>
                    </button>
                ) : (
                    <div className="h-auto w-auto rounded-full">
                        <Skeleton
                            height={60}
                            width={60}
                            count={1}
                            circle
                        />
                    </div>
                )}
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
