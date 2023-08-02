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
            {featured.map((property, index) => (
                <div key={property?.propertyId} className="col-span-1">
                    <PropertyCard property={property} reverse={index % 2 !== 0} />
                </div>
            ))}
        </div>
    </div>
  )
}