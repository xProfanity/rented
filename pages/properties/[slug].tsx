import Skeleton from 'react-loading-skeleton'

import { Property } from "@/common.types"
import { ImageGallery } from "@/components"
import { fetchPropertyBySlug, grabHouses } from "@/services/sanity"

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
  return (
    <div className="flex flex-1">
        <div className="mt-20 w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-start items-center">
                {property ? (
                    <ImageGallery images={[property?.thumbnail, ...property?.images]} />
                ) : (
                    <Skeleton count={1} height={43} width={800} />
                )}
            </div>
        </div>
    </div>
  )
}
