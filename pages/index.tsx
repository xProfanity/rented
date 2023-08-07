
import { Property, User } from "@/common.types";
import { HeroSection, TopFeatured } from "@/components";
import { useStateContext } from '@/context/StateContext';
import { fetchAllUsers, fetchFeaturedHouses } from "@/services/sanity";

interface Props {
  featured: Property[];
  users: User[]
}

export default function index({featured, users}: Props) {
  const {user}: any = useStateContext()
  const loggedInUser = users?.filter((dbUser) => dbUser.email === user?.email)[0]

  return (
    <div className="flex-1 h-auto flex flex-col ">
        <HeroSection />
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
    
    return {
        props: {
            featured,
            users
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
