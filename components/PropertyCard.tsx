import Image from 'next/image';
import { FaBed, FaChartArea, FaShower } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { Property } from "@/common.types";
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';

type Props = {
    property: Property,
    reverse: boolean;
}

export default function PropertyCard({property, reverse}: Props) {

  const discountedPrice = Math.round(property.price * ((100 - property.discountPercentage) / 100))

  return (
    <div className={`flex-1 h-auto gap-2 flex flex-col ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"} justify-start items-center`}>
      <Image
        src={urlFor(property.thumbnail).height(400).width(800).url()}
        height={400}
        width={800}
        alt='house'
        className="object-contain"
      />
      <div className='flex-1 h-[400px] w-full max-w-[800px] flex-col justify-start items-center'>
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

        <div className='inline-flex justify-center mt-5 items-center gap-2'>
          <FaLocationDot color="#010534"/>
          <p>{property.location}</p>
        </div>

        <div className='mt-5 flex flex-row justify-start items-center gap-4'>
          <p className='text-lg font-bold line-through decoration-red-500'>{property.currency} {property.price}.00</p>
          <div className=''>
            <p className='text-3xl font-bold text-black'>{property.currency} {discountedPrice}.00</p>
          </div>
        </div>

        <p className='text-base font-bold '>{property.promotionDescription}</p>
        <br />
        <span>👉</span>
        <Link href={`/properties/${property.slug.current}`}>
          <button type="button" className='ml-2 p-4 bg-primary rounded-lg text-white font-bold text-sm'>Get Deal</button>
        </Link>

        <div className='w-full grid grid-cols-3 gap-1 mt-3'>
          {property?.ameneties?.map((amenity, index) => (
            <div key={index} className='col-span-1 bg-gray-200 px-1 rounded-md flex-1'>
              <p className='font-bold text-sm capitalize w-fit'>{amenity}</p>
            </div>
          ))}
        L</div>
      </div>
    </div>
  )
}
