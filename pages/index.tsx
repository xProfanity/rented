import { HeroSection } from "@/components";

export default function index() {
  return (
    <div className="flex-1 h-auto flex flex-col ">
        <HeroSection />
        <section>
          <p>Featured</p>
        </section>
    </div>
  )
}
