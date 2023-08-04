import { FaLocationDot } from "react-icons/fa6";
import Skeleton from 'react-loading-skeleton';

import { Property } from "@/common.types";
import { ImageGallery, Rating } from "@/components";
import { fetchPropertyBySlug, grabHouses } from "@/services/sanity";
import { BsBookmark } from "react-icons/bs";
import { FaHashtag, FaPhone } from "react-icons/fa";

type ParamProps = {
    params: {
        slug?: string | null;
    }
}

type Props = {
    property: Property
}

export async function getStaticPaths() {
    try {
        const property:Property[] = await grabHouses()
        
        const paths = property.map((house: Property) => ({
            params: {
                slug: house.slug.current
            }
        }))
    
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.log('error', error)
        return {
            paths: [],
            fallback: true
        }
    }
}

export async function getStaticProps({params: {slug}}: ParamProps) {
    try {
        const property = await fetchPropertyBySlug(slug)

        return {
            props: {
                property
            }
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


export default function PropertyDetails({property}: Props) {
    const handleBookMarks = () => {}
  return (
    <div className="flex flex-1">
        <div className="mt-20 w-full flex flex-col justify-center items-center">
            <div className="w-full flex mt-5 flex-col justify-start items-center">
                {property ? (
                    <ImageGallery images={[property?.thumbnail, ...property?.images]} />
                ) : (
                    <Skeleton count={1} height={43} width={800} />
                )}
            </div>

            <div className='mt-10 w-[95%] mx-auto flex flex-col'>
                <p className='text-2xl sm:text-3xl font-bold text-primary'>{property?.title}</p>
                
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

                <div className="flex mt-5 flex-col gap-4 md:flex-row justify-start items-center">
                    <div className="flex-col flex gap-2 max-w-[750px]">
                        <h1 className="text-xl font-bold text-primary">Overview</h1>
                        <p className="text-lg text-gray-500">{property?.description}</p>
                    </div>

                    <div className="bg-gray-300 rounded-lg flex-1 w-full">
                        <div className="w-[95%] mx-auto flex flex-col ">
                            <div className="mx-auto w-full flex flex-row justify-between items-center">
                                <p>
                                    <span>{property?.currency}</span>
                                    <span>{property?.price}</span>
                                </p>
                                <div className="flex flex-row justify-center items-center gap-4">
                                    <button type="button" onClick={handleBookMarks}>
                                        <BsBookmark color="#010536" />
                                    </button>
                                    <Rating />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
