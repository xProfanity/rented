import Image from 'next/image';
import { FaBed, FaChartArea, FaShower } from "react-icons/fa";

import { Property } from "@/common.types";
import { urlFor } from '@/lib/sanity';

type Props = {
    property: Property,
    reverse: boolean;
}

export default function PropertyCard({property, reverse}: Props) {
  return (
    <div className={`flex-1 h-auto gap-2 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} justify-start items-center`}>
      <Image
        src={urlFor(property.thumbnail).height(400).width(800).url()}
        height={400}
        width={800}
        alt='house'
        className="object-contain"
      />
      <div className='flex-1 h-[400px] w-full flex-col justify-start items-center'>
        <p className='font-bold text-3xl text-primary mx-auto'>{property.title}</p>
        <div className='mt-2 flex flex-row justify-start items-center gap-4 w-full'>
          <p className='inline-flex gap-2 justify-center items-center'>
            <span><FaBed color={"#010536"} /></span>
            {property.bedrooms} {`${property.bedrooms === 1 ? 'bedroom' : 'bedrooms'}`}
          </p>
          <p className='inline-flex gap-2 justify-center items-center'>
            <span><FaShower color={"#010536"} /></span>
            {property.bathrooms} {`${property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}`}
          </p>
          <p className='inline-flex gap-2 justify-center items-center'>
            <span><FaChartArea color={"#010536"} /></span>
            {property.area} {property.areaUnit}
          </p>
        </div>
      </div>
    </div>
  )
}
