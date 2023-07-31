import Image from "next/image";

import { Rented, menu } from '@/assets';
import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="h-20 w-full flex-1">
        <div className="h-full w-[95%] flex flex-row justify-between items-center mx-auto">
            <Link href={'/'}>
                <Image
                    src={Rented}
                    height={43}
                    width={115}
                    alt="rented"
                />
            </Link>
            <div className="h-full flex-wrap bg-gray-100 rounded-full hidden md:block">
                <ul className="w-[35rem] flex flex-row justify-center items-center h-full gap-20">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <Link href={`#${item}`}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hidden md:block">
                <button type="button">
                    Login
                </button>
            </div>
            <div className="block md:hidden">
                <button>
                    Menu
                </button>
            </div>
        </div>
    </nav>
  )
}
