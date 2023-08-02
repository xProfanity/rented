import { useStateContext } from "@/context/StateContext"
import Image from "next/image"

import { motion } from 'framer-motion'
import { useRouter } from "next/router"
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai"
import { BsX } from "react-icons/bs"

import { RentedColor, menu } from "@/assets"
import Link from "next/link"

export default function MobileMenu() {
    const {navOpen, handleNavOpen, handleLogin, handleLogout, user}: any = useStateContext()
    const {asPath} = useRouter()

    const underlay = {
        opacity: navOpen && [0, .5, .5]
    }

    const animateDrawer = {
        x: navOpen && [100, 0, 0]
    }

  return (
    <div className={`fixed z-50 h-screen w-full top-0 ${navOpen ? 'block' : 'hidden'}`}>
        <motion.div animate={underlay} onClick={handleNavOpen} className="h-screen w-full bg-black absolute top-0 left-0"/>
        <motion.div animate={animateDrawer} className="fixed z-50 right-0 shadow-lg shadow-black top-0 h-screen w-[25rem] bg-white flex flex-col">
            <div className="h-20 w-[90%] flex mx-auto flex-row justify-between items-center">
                <Image
                    src={RentedColor}
                    height={43}
                    width={115}
                    alt="rented"
                />
                <button onClick={handleNavOpen}>
                    <BsX className="h-12 w-12" />
                </button>
            </div>

            <div className="mt-2 w-[90%] mx-auto flex flex-col">
                {user ? (
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <Image 
                                src={user?.image}
                                height={50}
                                width={50}
                                alt={`${user?.name} profile`}
                                className="object-contain rounded-full"
                            />
                            <div>
                                <p className="font-bold text-lg ">{user?.name}</p>
                                <p className="text-sm text-gray-500">{user?.email}</p>
                            </div>
                        </div>

                        <div>
                            <button type="button" onClick={handleLogout}>
                                <AiOutlineLogout size={30} color="red"/>
                            </button>
                        </div>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="w-[70%] mx-auto flex flex-row justify-center items-center gap-2 bg-[#010536] h-10 text-white rounded-full">
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
        
            <div className="mt-52 w-[90%] mx-auto flex flex-row justify-end items-center">
                <p className="text-gray-500 text-sm">&copy;copyright 2023</p>
            </div>
        </motion.div>
    </div>
  )
}
