import { filtersByType } from "@/assets";
import { Property, User } from "@/common.types";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    properties: Property[];
    user: User;
}

interface Filters {
    type: string;
    active: boolean;
}

export default function Properties({properties, user}: Props) {
    const [filters, setFilters] = useState(filtersByType)

    const handleToggleFilters = (type: string) => {
        const newFilters = filters.map(filter => {
            if(filter.type === type) {
                return {type, active: true}
            } else {
                return {type: filter.type, active: false}
            }
        })

        setFilters(newFilters)
    }

  return (
    <div className="w-[95%] flex-1 mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
            <div className="h-20 w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-between items-center">
                <div className="h-full w-full col-span-2 md:col-span-1 flex flex-row justify-center items-center">
                    <div className="h-16 w-16 bg-gray-300 rounded-l-3xl flex flex-col justify-center items-center">
                        <BsSearch color="#010536" size={30} />
                    </div>
                    <input
                        type="search"
                        name=""
                        id=""
                        placeholder="Search for a property"
                        className="h-16 w-full rounded-r-3xl px-2 bg-gray-300 outline-none after:bg-black flex-1 "
                    />
                </div>
                <div className="col-span-2 w-full h-full flex-col flex justify-center items-center">
                    <ul className="w-full flex flex-row justify-start full items-center gap-5">
                        {filters.map(({type, active}:Filters, index) => (
                            <li key={index} className="h-16 w-36">
                                <button
                                    type="button"
                                    className={`h-full w-full rounded-full capitalize text-sm font-bold flex flex-col justify-center items-center ${active ? 'bg-primary text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleToggleFilters(type)}
                                >
                                    {type}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
