import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaLocationDot } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton';

import { Property, User } from "@/common.types";
import { BookMark, ImageGallery, PropertyCard, Rating } from "@/components";
import { fetchAllUsers, fetchMorePropertiesByType, fetchPropertyBySlug, fetchUserDetails, grabHouses } from "@/services/sanity";
import { useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaHashtag, FaPhone } from "react-icons/fa";

type ParamProps = {
    params: {
        slug?: string | null;
        userId: string;
    }
}

type Props = {
    property: Property;
    properties: Property[];
    user: User;
}

export async function getStaticPaths() {
    try {
        const property:Property[] = await grabHouses()
        const users: User[] = await fetchAllUsers()
        const paths = []
        const items:any = property.map((house: Property) => {
            users?.map((user) => ({
                params: {
                    slug: house.slug.current,
                    userId: user._id
                }
            }))
        })

        for(let item of items) {
            item && paths.push(...item)
        }
    
        return {
            paths,
            fallback: 'blocking'
        }
    } catch (error) {
        console.log('error', error)
        return {
            paths: [],
            fallback: true
        }
    }
}

export async function getStaticProps({params: {slug, userId}}: ParamProps) {
    try {
        const property:Property = await fetchPropertyBySlug(slug)
        const properties = await fetchMorePropertiesByType(property?.type, property?.propertyId)

        const user = await fetchUserDetails(userId)

        return {
            props: {
                property,
                properties,
                user
            },
            revalidate: 10
        }
    } catch (error) {
        console.log('error', error)
        return {
            props: {
                data: ''
            }
        }
    }
}


export default function PropertyDetails({property, properties, user}: Props) {

    const discountedPrice = Math.round(property?.price * ((100 - property?.discountPercentage) / 100))

    const generateRandomNumber = () => {
        const number = Math.floor(Math.random() * 10000 * 10000)

        return number
    }

    const {status} = useSession()

    const router = useRouter()

    useEffect(() => {
        const getPropertyReviews = async () => {
            try {
                await fetch(`/api/sanity/reviews/${property?.propertyId}`, {method: 'GET'})
                
            } catch (error) {
                console.log('error', error)
            }
        }

        getPropertyReviews()
    }, [property?.propertyId])

    if(status === "loading") {
        return <p>Loading</p>
    }

    if(status === "unauthenticated") {
        router.push('/')
    }

  return (
    <div className="flex flex-1 flex-col">
        <div className="mt-20 w-full flex flex-col justify-center items-center">
            <div className="w-full flex mt-5 flex-col justify-start items-center">
                {property ? (
                    <ImageGallery key={generateRandomNumber()} images={[property?.thumbnail, ...property?.images]} />
                ) : (
                    <Skeleton count={1} height={43} width={800} />
                )}
            </div>

            {property ? (
                <div className='mt-10 w-[95%] mx-auto flex flex-col'>
                <p className='text-2xl sm:text-3xl font-bold text-primary'>{property?.title} <span className="inline-flex justify-center items-center gap-2">
                    (4.3 <BsFillStarFill />)
                    </span>
                </p>
                
                <div className="flex flex-col sm:flex-row justify-start items-start gap-1 sm:gap-4">
                    <div className="inline-flex mt-2 justify-center items-center gap-2">
                        <span className="p-2 rounded-md bg-gray-200">
                            <FaLocationDot color="#010536" />
                        </span>
                        <p className='text-sm sm:text-base text-gray-500'>{property?.location}</p>
                    </div>

                    <div className="inline-flex mt-2 justify-center items-center gap-2">
                        <span className="p-2 rounded-md bg-gray-200">
                            <FaPhone color="#010536"/>
                        </span>
                        <p className="text-sm sm:text-base text-gray-500">
                            {property?.contact.map((contact, index) => (
                                <span key={index}>
                                    {contact}{index !== property?.contact.length - 1 && ', '}
                                </span>
                            ))}
                        </p>
                    </div>

                    <div className="inline-flex mt-2 justify-center items-center gap-2">
                        <span className="p-2 rounded-md bg-gray-200">
                            <FaHashtag color="#010536"/>
                        </span>
                        
                        <p className="text-sm sm:text-base text-primary cursor-pointer font-bold lowercase">
                            #
                            <span className="hover:underline decoration-dotted">
                                {property?.type}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-start max-w-[750px] xl:max-w-full items-center mt-2 gap-2">
                    {property?.ameneties.map((amenity, index) => (
                        <p key={`${amenity}-${index}`} className="bg-gray-200 p-1 rounded-md text-sm font-bold capitalize">{amenity}</p>
                    ))}
                </div>

                <div className="flex mt-5 h-auto flex-col gap-4 md:flex-row justify-between items-start">
                    <div className="flex-col h-full justify-start flex gap-2 w-full">
                        <h1 className="text-xl font-bold text-primary">Overview</h1>
                        <p className="text-lg text-gray-500 md:text-justify">{property?.description}</p>
                    </div>
                    
                    <div className="flex w-full flex-col justify-start h-full">
                        <div className="bg-gray-300 py-2 rounded-lg w-full">
                            <div className="w-[95%] mx-auto flex flex-col ">
                                <div className="mx-auto w-full flex flex-row justify-between items-center">
                                    <BookMark bookmarked={user?.bookmarks.includes(property?.propertyId)} propertyId={property?.propertyId} userId={user?._id} />
                                    <div className="flex flex-row justify-center-items-center gap-3">
                                        <p className="font-bold text-lg text-primary">4.3</p>
                                        <Rating user={user} propertyId={property.propertyId}/>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-10 items-center">
                                    <p className="text-gray-500">Price</p>
                                    <p className="font-bold text-primary">
                                        {property?.currency} {property?.price.toLocaleString()}.00
                                    </p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-500">Discount</p>
                                    <p className="font-bold text-primary">
                                        {property?.promotion ? `${property?.discountPercentage}%` : 'Not Available'}
                                    </p>
                                </div>
                                <div className="flex justify-between py-2 px-2 mt-2 bg-teal-500 items-center rounded-md">
                                    <p className="font-bold text-lg text-white">Final Price</p>
                                    <p className="font-bold text-white text-lg">
                                        {property?.promotion ? `${property?.currency} ${discountedPrice.toLocaleString()}.00` : `${property?.currency} ${property?.price.toLocaleString()}.00`}
                                    </p>
                                </div>

                                <div className="flex flex-row justify-evenly mt-2 gap-2 items-center">
                                    <button type="button" className="p-3 rounded-lg flex-1 bg-gray-400 font-bold text-sm">Rent</button>
                                    <button type="button" className="p-3 rounded-lg bg-primary text-white font-bold text-sm">Arrange a visit</button>
                                </div>

                                <div className="mt-4">
                                    {property?.contact.map((contact, index) => (
                                        <div className="flex justify-between items-center" key={index}>
                                            <p className="text-gray-500">Contact {property.contact.length > 1 && `${index+1}`}</p>
                                            <p className="text-gray-500">{contact}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <div className="mt-10 flex flex-row justify-center items-center gap-10">
                    <Skeleton height={43} width={800} count={2} />
                </div>
            )}
            
        </div>
        
        <div className="mt-10 full flex w-[95%] mx-auto flex-col">
            {property ? (
                <>
                    <h1 className="font-bold text-3xl text-primary">More {property?.type}s</h1>
                
                    <div className="w-full flex-wrap mt-5">
                        <ul className="flex overflow-auto h-auto gap-5">
                            {properties?.map((property, index) => (
                                <li key={`${property?.propertyId}-${index}`}>
                                    <PropertyCard property={property} key={property?.propertyId} user={user}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            ) : (
                <div className="flex flex-row justify-center items-center gap-10">
                    <Skeleton height={43} width={800} count={1} />
                </div>
            )}
        </div>
    </div>
  )
}
