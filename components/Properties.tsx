import { filtersByType } from "@/assets";
import { Property, User } from "@/common.types";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { PropertyCard } from ".";

interface Props {
    properties: Property[];
    user: User;
}

interface Filters {
    type: string;
    active: boolean;
}

export default function Properties({properties:data, user}: Props) {
    const [filters, setFilters] = useState(filtersByType)
    const [properties, setProperties] = useState(data)
    const [searchText, setSearchText] = useState("")

    const handleSearch = (e: any) => {
        setSearchText(e.target.value)
    }

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

    useEffect(() => {
        const getFilterChanges = () => {
            const {type} = filters.filter(filter => filter.active)[0]
            if(type === 'all') {
                return setProperties(data)
            }

            const newProperties = data.filter(property => property.type.toLowerCase() === type)

            return setProperties(newProperties)
        }

        getFilterChanges()
    }, [filters])

    useEffect(()=> {
        const handleSearchFilter = () => {
            if(searchText.length > 0) {
                const amenitiesResults = data.filter(property => property.ameneties.includes(searchText))
                const nameResults = data.filter(property => property.title.toLowerCase().includes(searchText))
                const locationResults = data.filter(property => property.location.toLowerCase().includes(searchText))
                const newProperties = [...amenitiesResults, ...nameResults, ...locationResults]

                return setProperties(newProperties)
            }

            else return setProperties(data)
        }

        handleSearchFilter()
    }, [searchText])

  return (
    <div className="w-full flex-1 mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
            <div className="h-20 w-[95%] grid grid-cols-1 md:grid-cols-3 gap-5 justify-between items-center">
                <div className="h-full w-full col-span-2 md:col-span-1 flex flex-row justify-center items-center">
                    <div className="h-16 w-16 bg-gray-300 rounded-l-3xl flex flex-col justify-center items-center">
                        <BsSearch color="#010536" size={30} />
                    </div>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search for a property"
                        className="h-16 w-full rounded-r-3xl pr-4 bg-gray-300 outline-none after:bg-black flex-1 "
                        value={searchText}
                        onChange={handleSearch}
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
                                    {type}{type !== 'all' && 's'}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-28 md:mt-5 w-full flex flex-col justify-center items-start h-auto">
                <ul className="flex flex-row w-full px-5 md:px-10 justify-start items-start gap-10 overflow-auto">
                    {properties?.length > 0 ? (
                        properties.map((property, index) => (
                            <li key={index}>
                                <PropertyCard property={property} user={user} />
                            </li>
                        ))
                    ) : (
                        <p className="flex flex-row w-full justify-center item-center text-gray-400">No properties found in your search/filter perimeter</p>
                    )}
                </ul>
            </div>
        </div>
    </div>
  )
}
