"use client"

import Appwrap from "@/HOC/Appwrap"
import { whyUs } from "@/assets/constants"

const WhyUs = () => {
  return (
    <div className="w-full">
      {whyUs.map((content, index) => (
        <div key={index}>
          <h1>{content.name}</h1>
          <p>{content.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Appwrap(WhyUs, 'why us', 'Why would you consider Renting from us?')