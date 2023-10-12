import Image from 'next/image';

import { Property } from "@/common.types";
import { urlFor } from '@/lib/sanity';
import { fetchPropertyBySlug } from "@/services/sanity";

type Props = {
  property: Property | null;
}

export default function Success({property}: Props) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-auto w-full flex flex-col justify-center items-center gap-10">
        <p className="text-black font-bold text-3xl text-center">You have successfully rented {property?.title}</p>
        <Image
          src={urlFor(property?.thumbnail).height(800).width(800).url()}
          height={800}
          width={800}
          alt={property?.title || 'property thumbnail'}
          className='object-contain rounded-lg border-2 border-primary'
        />
      </div>
    </div>
  )
}

type ParamProps = {
  params: {
    slug: string;
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