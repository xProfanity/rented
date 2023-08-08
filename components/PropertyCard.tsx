import Image from "next/image"
import Link from "next/link"
import { FaBath, FaBed, FaChartArea } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

import { Property, User } from "@/common.types"
import { urlFor } from "@/lib/sanity"

type Props = {
    property: Property;
    user?: User;
}
export default function PropertyCard({property, user}: Props) {
    const discountedPrice = Math.round(property?.price * ((100 - property?.discountPercentage) / 100))
  return (
    <div className="h-[auto] w-[350px] bg-gray-300 rounded-lg pb-5">
        <div className="w-full mx-auto flex flex-col justify-center items-center">
            <Image
                src={urlFor(property?.thumbnail).height(200).width(350).url()}
                height={200}
                width={350}
                alt={`${property?.type}`}
                className="object-contain rounded-lg"
            />

            <div className="w-[95%] mt-2 flex flex-col justify-center items-start">
                <Link href={`/user/${user?._id}/property/${property?.slug.current}`}>
                    <p className="text-lg font-bold text-primary hover:underline">{property?.title}</p>
                </Link>
                
                <div className="flex flex-row justify-center items-center gap-2 mt-2">
                    <p className="text-gray-600 gap-2 flex flex-row justify-center items-center">
                        <span className="p-2 rounded-md bg-gray-200"><FaLocationDot color="#010536"/></span>
                        <span>{property?.location}</span>
                    </p>
                    <p className="text-gray-600 gap-2 flex flex-row justify-center items-center">
                        <span className="p-2 rounded-md bg-gray-200"><FaChartArea color="#010536"/></span>
                        <span>{property?.area} {property?.areaUnit}</span>
                    </p>
                </div>
                
                <div className="flex flex-row justify-center items-center gap-2 mt-2">
                    <p className="text-gray-600 gap-2 flex flex-row justify-center items-center">
                        <span className="p-2 rounded-md bg-gray-200"><FaBed color="#010536"/></span>
                        <span>{property?.bedrooms} bedroom{property?.bedrooms !== 1 && 's'}</span>
                    </p>
                    <p className="text-gray-600 gap-2 flex flex-row justify-center items-center">
                        <span className="p-2 rounded-md bg-gray-200"><FaBath color="#010536"/></span>
                        <span>{property?.bathrooms} bathroom{property?.bathrooms !== 1 && 's'}</span>
                    </p>
                </div>

                <div className="flex flex-row w-full justify-start items-center mt-2">
                    <p className={`text-lg font-bold text-primary ${property?.promotion && 'line-through decoration-red-500'}`}>{property?.currency} {property?.price.toLocaleString()}.00</p>
                </div>

                {property?.promotion && (
                    <div className="mt-2 w-full flex flex-col justify-center items-start">
                        <div className="flex flex-row justify-center gap-2 items-center">
                            <p className="text-base font-bold text-primary">Discount</p>
                            <p className="text-base font-bold text-primary">{property?.discountPercentage}% off</p>
                        </div>
                        <p className="font-bold text-primary">
                            {property?.currency} {discountedPrice.toLocaleString()}.00
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
