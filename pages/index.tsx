import { HeroSection, Testimonials, WhyUs } from "@/components";



export default function Home() {

  return (
    <div className="flex-1 h-auto flex flex-col ">
        <HeroSection />

        <section className="mt-20 h-auto min-h-screen w-full">
          <WhyUs />
        </section>

        <section className="mt-20 h-auto w-full">
          <Testimonials />
        </section>

    </div>
  )
}

