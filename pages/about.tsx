import Image from 'next/image';

import { AboutUs, Keys } from "@/assets";
import { Testimonials } from '@/components';

export default function About() {
  return (
    <div className="h-auto min-h-screen flex flex-col justify-start items-center">
      <div className="h-[50vh] w-11/12 flex flex-col justify-center items-center md:items-start">
        <p className="text-6xl text-primary font-bold">About us</p>
      </div>

      <div className="min-h-screen h-auto w-11/12 flex flex-col-reverse md:flex-row gap-16 justify-center items-center">
        <div className='md:w-2/3 w-11/12 h-auto flex flex-col justify-start items-start'>
          <p className="text-2xl text-gray-700 text-left">
            {AboutUs}
          </p>
        </div>
        <div className='w-1/3 h-full flex flex-col justify-start items-start'>
          <Image
            src={Keys}
            alt="house"
            height={600}
            width={530}
            className="object-contain"
          />
        </div>
      </div>

      <section className="mt-20 h-auto min-h-screen w-full">
          <Testimonials />
        </section>
    </div>
  )
}
