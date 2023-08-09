import Image from "next/image"
import Link from "next/link"
import { FaBath, FaBed, FaChartArea, FaLink } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

import { Property, User } from "@/common.types"
import { useStateContext } from "@/context/StateContext"
import { urlFor } from "@/lib/sanity"
import { AiOutlineLogin } from "react-icons/ai"

type Props = {
    property: Property;
    user?: User;
}
export default function PropertyCard({property, user}: Props) {
    const discountedPrice = Math.round(property?.price * ((100 - property?.discountPercentage) / 100))

    const {handleLogin}:any = useStateContext()
  return (
    <div className="h-auto w-[350px] bg-gray-300 rounded-lg pb-5">
        <div className="w-full mx-auto flex flex-col justify-center items-center">
            <Image
                src={urlFor(property?.thumbnail).height(200).width(350).url()}
                height={200}
                width={350}
                alt={`${property?.type}`}
                className="object-contain rounded-lg"
            />

            <div className="w-[95%] mt-2 flex flex-col justify-center items-start">
                <p className="text-lg font-bold text-primary cursor-default h-16">{property?.title}</p>
                
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

                <div className="flex flex-row w-full gap-2 justify-start items-center mt-2">
                    <p className={`text-lg font-bold text-primary ${property?.promotion && 'line-through decoration-red-500'}`}>{property?.currency} {property?.price.toLocaleString()}.00</p>
                    <p className={`text-lg font-bold text-primary ${property?.promotion ? 'block' : 'hidden'}`}>{property?.currency} {discountedPrice.toLocaleString()}.00</p>

                </div>

                <div className="w-full h-auto flex flex-row justify-center items-center mt-5">
                    {user ? (
                        <Link href={`/property/${user?._id}/${property?.slug.current}`} className="w-full">
                            <button type="button" className="w-full h-12 inline-flex gap-2 justify-center items-center bg-primary text-sm font-bold text-white rounded-2xl">
                                <span>Visit Property</span>
                                <span><FaLink /></span>
                            </button>
                        </Link>
                    ) : (
                        <button
                            type="button"
                            className="w-full h-12 bg-primary text-sm font-bold text-white rounded-2xl inline-flex gap-2 justify-center items-center"
                            onClick={handleLogin}
                        >
                            <span><AiOutlineLogin size={18}/></span>
                            <span>Sign in to visit</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}
