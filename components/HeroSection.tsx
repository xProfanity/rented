import { charming, heroSlogan, heroSub } from "@/assets";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-6rem)] h-auto w-[95%] mx-auto mt-28 gap-10 md:gap-0 grid grid-cols-1 md:grid-cols-2 justify-between">
        <div className="h-full col-span-2 md:col-span-1 mx-auto flex flex-col justify-center items-center md:items-start w-full">
            <p className="text-7xl text-black font-bold w-full text-center md:text-left">{heroSlogan}</p>
            <p className="text-4xl text-gray-700 mt-10 text-center md:text-left">{heroSub}</p>
            <button type="button" className="p-4 bg-primary text-white text-base font-bold rounded-lg mt-10">
                Get Started
            </button>
        </div>
        <div className="col-span-2 md:col-span-1 mx-auto flex flex-col justify-center items-center">
            <Image 
                src={charming}
                alt="house"
                height={500}
                width={600}
                className="object-contain border-2 border-primary md:-rotate-3 rounded-2xl shadow-lg shadow-primary"
            />
        </div>
    </div>
  )
}
