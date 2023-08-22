import Appwrap from "@/HOC/Appwrap"
import { whyUs } from "@/assets/constants"

const WhyUs = () => {
  return (
    <div>
      {whyUs.map((content, index) => (
        <p key={index}>{content.name}</p>
      ))}
    </div>
  )
}

export default Appwrap(WhyUs, 'why us', 'Why would you consider Renting from us?')