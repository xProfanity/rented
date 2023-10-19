import Image from 'next/image';

import { Property } from "@/common.types";
import { urlFor } from '@/lib/sanity';
import { fetchPropertyBySlug, grabHouses } from "@/services/sanity";

type Props = {
  property: Property | null;
}

export async function getStaticPaths() {
  const property = await grabHouses() as Property[]

  const paths = property?.map((property) => ({
    params: {
      slug: property.slug.current
    }
  }))
  
  return {
    paths,
    fallback: 'blocking'
  }
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

export default function Success({property}: Props) {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="h-auto w-full flex flex-col justify-center items-center gap-10 mt-14">
        <p className="text-primary font-bold text-2xl md:text-3xl text-center w-11/12 md:w-2/3">You have successfully purchased {property?.title}</p>
        <Image
          src={urlFor(property?.thumbnail).height(400).width(400).url()}
          height={400}
          width={400}
          alt={property?.title || 'property thumbnail'}
          className='object-contain rounded-lg border-2 border-primary'
        />
      </div>
    </div>
  )
}

