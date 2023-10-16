import Image from 'next/image';

import { AboutUs, charming } from "@/assets";

export default function About() {
  return (
    <div className="h-auto min-h-screen flex flex-col justify-start items-center">
      <div className="h-[50vh] w-11/12 flex flex-col justify-center items-center md:items-start">
        <p className="text-6xl text-primary font-bold">About us</p>
      </div>

      <div className="h-screen w-11/12 flex flex-col md:flex-row gap-16 justify-center items-center">
        <div className='md:w-1/2 w-11/12 h-full flex flex-col justify-start items-start'>
          <p className="text-2xl text-gray-700 text-left">
            {AboutUs}
          </p>
        </div>
        <div className='w-1/2 h-full flex flex-col justify-start items-start'>
          <Image
            src={charming}
            alt="house"
            height={500}
            width={600}
            className="object-contain border-2 border-primary lg:-rotate-3 rounded-2xl shadow-lg shadow-primary"
          />
        </div>
      </div>
    </div>
  )
}
