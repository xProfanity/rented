import Skeleton from "react-loading-skeleton";

import { Property } from "@/common.types";
import { PropertyCard } from ".";

type Props = {
    featured: Property[];
}

export default function TopFeatured({featured}: Props) {
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-start items-center">
        <div className="w-full flex flex-row justify-center items-center">
            <p className="text-6xl text-primary font-semibold">Top Featured</p>
        </div>

        <div className="mt-10 w-full gap-10 grid grid-cols-1 justify-center items-center mx-auto">
            {featured ? (
                featured?.map((property, index) => (
                    <div key={property?.propertyId} className="col-span-1">
                        <PropertyCard property={property} reverse={index % 2 !== 0} />
                    </div>
                ))
            ) : (
                <div className="w-full h-auto gap-5 flex flex-col md:flex-row justify-around items-center col-span-2">
                    {
                        [...Array(2)].map((_, i) => (
                            <div key={i} className="h-auto flex">
                                <Skeleton
                                    count={1}
                                    width={550}
                                    height={50}
                                />
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    </div>
  )
}