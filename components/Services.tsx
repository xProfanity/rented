import Image from "next/image"

import Appwrap from '@/HOC/Appwrap'
import { model, services } from "@/assets"

const Services = () => {
  return (
    <div className='min-h-screen w-full h-auto flex flex-col justify-center items-center'>
      <div className='h-full gap-10 w-full flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-start lg:items-start'>
        <div className="w-[40%]">
          <Image
            src={model}
            width={600}
            height={900}
            alt="model house"
            className="object-contain"
          />
        </div>
        <div className="w-[55%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
          {services.map((service, index) => (
            <Service key={index} number={index+1} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface Props {
  number: number;
  service: {
    title: string;
    description: string;
    icon: string;
  }
}

const Service = ({number, service}: Props) => (
  <div className="flex flex-col col-span-1 justify-center items-center md:justify-start md:items-start">
    <div className="h-12 w-12 rounded-full bg-primary flex flex-col justify-center items-center">
      <span className="font-bold text-white text-base">{number}</span>
    </div>
    <h1 className="text-primary capitalize text-xl font-bold">{service.title}</h1>
    <p className="text-sm text-gray-500">{service.description}</p>
  </div>
)

export default Appwrap(Services, "Our Services", "Discover what services we offer")