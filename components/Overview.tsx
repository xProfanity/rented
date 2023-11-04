import Image, { StaticImageData } from 'next/image';

import Appwrap from "@/HOC/Appwrap";
import { overviews } from "@/assets";

function Overview() {
  return (
    <div className="min-h-screen h-auto py-16 w-full flex flex-col justify-center items-center">
        <div className="h-full w-full flex flex-wrap justify-center items-center gap-10 flex-row">
            {overviews.map((item, index) => (
                <OverviewCard overview={item} key={index} />
            ))}
        </div>
    </div>
  )
}

interface Overviews {
    title: string;
    subText: string;
    image: StaticImageData;
}

interface Props {
    overview: Overviews;
}

const OverviewCard = ({overview}: Props) => (
    <div className='h-96 w-96 relative'>
        <Image
            src={overview.image}
            alt='overview thumb'
            fill
            className='absolute object-cover rounded-sm md:rounded-lg xl:rounded-xl'
        />
    </div>
)

export default Appwrap(Overview)