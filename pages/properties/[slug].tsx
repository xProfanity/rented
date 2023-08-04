import Image from "next/image"

import { Property } from "@/common.types"
import { urlFor } from "@/lib/sanity"
import { fetchPropertyBySlug, grabHouses } from "@/services/sanity"

type ParamProps = {
    params: {
        slug: string;
    }
}

type Props = {
    property: Property
}

export async function getStaticPaths() {
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
}

export async function getStaticProps({params: {slug}}: ParamProps) {
    const property = await fetchPropertyBySlug(slug)

    return {
        props: {
            property
        }
    }
}


export default function PropertyDetails({property}: Props) {
  return (
    <div className="flex flex-1">
        <div className="mt-20 w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-start items-center">
                <Image
                    src={urlFor(property.thumbnail).height(400).width(700).url()}
                    height={400}
                    width={700}
                    alt="house"
                    className="object-contain rounded-xl"
                />
            </div>
        </div>
    </div>
  )
}
