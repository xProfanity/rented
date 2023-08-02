import { Property } from "@/common.types";
import { PropertyCard } from ".";

type Props = {
    properties: Property[];
}

export default function TopFeatured({properties}: Props) {
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-start items-center">
        <div className="w-full flex flex-row justify-center items-center">
            <p className="text-6xl text-primary font-semibold">Top Featured</p>
        </div>

        <div className="mt-10 w-full gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto">
            {properties.map((property) => (
                <div key={property?.propertyId} className="col-span-1 border border-red-500">
                    <PropertyCard property={property} />    
                </div>
            ))}
        </div>
    </div>
  )
}