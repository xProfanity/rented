"use client"

import Appwrap from "@/HOC/Appwrap"
import { whyUs } from "@/assets/constants"

const WhyUs = () => {
  return (
    <div className="mt-5 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5">
      {whyUs.map((content, index) => (
        <div key={index} className="w-full flex flex-col justify-start items-center">
          <h1 className="text-2xl font-bold capitalize text-primary">{content.name}</h1>
          <p className="text-gray-500 text-lg">{content.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Appwrap(WhyUs, 'why us', 'Why would you consider Renting from us?')