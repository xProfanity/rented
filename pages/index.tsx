import { HeroSection, TopFeatured } from "@/components";
import { grabHouses } from "@/services/sanity";

export default function index({properties}: any) {
  return (
    <div className="flex-1 h-auto flex flex-col ">
        <HeroSection />
        <section className="mt-20 h-auto min-h-screen w-full">
          <TopFeatured properties={properties} />
        </section>
    </div>
  )
}


export async function getServerSideProps() {
    const properties = await grabHouses()

    return {
        props: {
            properties
        }
    }
}
