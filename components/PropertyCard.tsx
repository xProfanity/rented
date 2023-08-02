import Image from 'next/image';

import { Property } from "@/common.types";
import { urlFor } from '@/lib/sanity';

type Props = {
    property: Property
}

export default function PropertyCard({property}: Props) {
  return (
    <div className="flex-1 h-auto flex flex-col justify-start items-center">
      <Image
        src={urlFor(property.thumbnail).height(800).width(800).url()}
        height={800}
        width={800}
        alt='house'
        className="object-contain"
      />
    </div>
  )
}
