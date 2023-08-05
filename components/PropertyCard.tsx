import Image from "next/image"

import { Property } from "@/common.types"
import { urlFor } from "@/lib/sanity"

type Props = {
    property: Property
}

export default function PropertyCard({property}: Props) {
  return (
    <div className="h-[auto] w-[350px] bg-gray-300 rounded-lg">
        <div className="w-full mx-auto flex flex-col justify-center items-center">
            <Image
                src={urlFor(property?.thumbnail).height(200).width(350).url()}
                height={200}
                width={350}
                alt={`${property?.type}`}
                className="object-contain rounded-lg"
            />
        </div>
    </div>
  )
}
