import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaChartArea, FaShower } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { Property, User } from "@/common.types";
import { useStateContext } from '@/context/StateContext';
import { urlFor } from '@/lib/sanity';

type Props = {
    property: Property,
    user: User;
}

export default function FeaturedPropertyCard({property, user}: Props) {

  const discountedPrice = Math.round(property.price * ((100 - property.discountPercentage) / 100))
  const {handleLogin}: any = useStateContext()

  return (
    <div className={`flex-1 h-auto flex flex-col justify-start items-center rounded-lg`}>
      <Image
        src={urlFor(property.thumbnail).height(400).width(800).url()}
        height={400}
        width={800}
        alt='house'
        className="object-contain rounded-t-lg"
      />
      <div className="bg-gray-300 w-full flex flex-col justify-center items-center pb-4 rounded-b-lg">
        <div className='flex-1 h-[400px] w-[95%] max-w-[800px] flex-col justify-start items-center'>
          <p className='font-bold text-xl md:text-3xl text-primary mx-auto'>{property.title}</p>

          <div className='mt-2 flex flex-row justify-start  items-center gap-4 w-full'>
            <p className='inline-flex gap-2 justify-center items-center text-xs sm:text-sm'>
              <span><FaBed color={"#010536"} /></span>
              {property.bedrooms} {`${property.bedrooms === 1 ? 'bedroom' : 'bedrooms'}`}
            </p>
            <p className='inline-flex gap-2 justify-center items-center text-xs sm:text-sm'>
              <span><FaShower color={"#010536"} /></span>
              {property.bathrooms} {`${property.bathrooms === 1 ? 'bathroom' : 'bathrooms'}`}
            </p>
            <p className='inline-flex gap-2 justify-center items-center text-xs sm:text-sm'>
              <span><FaChartArea color={"#010536"} /></span>
              {property.area} {property.areaUnit}
            </p>
            <p className='inline-flex gap-2 justify-center items-center text-xs sm:text-sm'>
              <span><FaLocationDot color="#010534"/></span>
              {property.location}
            </p>
          </div>

          <div className="h-10">
            <div className='w-full grid grid-cols-3 gap-1 mt-3'>
              {property?.ameneties?.map((amenity, index) => (
                <div key={index} className='col-span-1 bg-gray-200 px-1 rounded-md flex-1'>
                  <p className='font-bold text-sm capitalize w-fit'>{amenity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-5 flex flex-row justify-evenly items-center gap-4 bg-teal-500 py-1 rounded-xl'>
            <p className='text-lg font-bold line-through decoration-red-500 text-white'>{property.currency} {property.price.toLocaleString()}.00</p>
            <div className=''>
              <p className='text-3xl  text-white font-bold'>{property.currency} {discountedPrice.toLocaleString()}.00</p>
            </div>
          </div>

          <p className='text-sm text-slate-500 font-bold w-full text-left mt-2 h-10'>{property.promotionDescription}</p>
          <br />
          {user ? (
            <div>
              <Link href={`/property/${user._id}/${property.slug.current}`}>
                <button type="button" className='p-4 bg-primary rounded-lg text-white font-bold text-sm w-full'>Get Deal</button>
              </Link>
            </div>
          ) : (
            <button type="button" onClick={handleLogin} className='p-4 bg-primary w-full text-white font-bold text-sm rounded-lg'>
              Login to Get it
            </button>
          )}

        </div>
      </div>
    </div>
  )
}
