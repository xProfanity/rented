import { Property, User } from "@/common.types";
import { Properties, TopFeatured } from "@/components";
import { useStateContext } from "@/context/StateContext";
import { fetchAllUsers, fetchFeaturedHouses, grabHouses } from "@/services/sanity";

interface Props {
    featured: Property[];
    users: User[];
    properties: Property[];
}

export default function PropertiesPage({
    featured,
    users,
    properties
}: Props) {
    const {user}: any = useStateContext()
    const loggedInUser = users?.filter((dbUser) => dbUser.email === user?.email)[0]
    return (
        <div className="flex flex-col justify-start items-center w-full">
            <section className="mt-36 h-auto min-h-screen w-full">
                <p>intro section</p>
            </section>
            <section className="mt-36 h-auto min-h-screen w-full">
                <Properties properties={properties} user={loggedInUser} />
            </section>
            
            <section className="mt-20 h-auto min-h-screen w-full">
                <TopFeatured featured={featured} user={loggedInUser} />
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    try {
        const featured = await fetchFeaturedHouses()
        const users = await fetchAllUsers()
        const properties = await grabHouses()

        return {
            props: {
                featured,
                users,
                properties
            }
        }
    } catch (error) {
        console.log('error', error)
        return {
            props: {
                data: ''
            }
        }
    }

}