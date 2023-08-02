import { Featured } from "@/common.types";
import { HeroSection, TopFeatured } from "@/components";
import { fetchFeaturedHouses } from "@/services/sanity";

export default function index({featured}: Featured) {
  return (
    <div className="flex-1 h-auto flex flex-col ">
        <HeroSection />
        <section className="mt-20 h-auto min-h-screen w-full">
          <TopFeatured featured={featured} />
        </section>
    </div>
  )
}


export async function getServerSideProps() {
    const featured = await fetchFeaturedHouses()

    return {
        props: {
            featured
        }
    }
}
