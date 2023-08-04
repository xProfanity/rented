import { AiOutlineStar } from "react-icons/ai";

export default function Rating() {
  return (
    <div className="inline-flex gap-1 justify-center items-center">
        {
            [...Array(5)].map((_, index) => (
                <button  key={index}>
                    <AiOutlineStar size={20} color="#010536" />
                </button>
            ))
        }
    </div>
  )
}
