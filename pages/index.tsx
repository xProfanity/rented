import { heroSlogan } from "@/assets";

export default function index() {
  return (
    <div className="flex-1 h-auto flex">
        <div className="h-screen w-[95%] mx-auto mt-20 flex flex-col md:flex-row">
            <div className="">{heroSlogan}</div>
        </div>
    </div>
  )
}
