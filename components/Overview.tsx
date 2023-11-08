import Image, { StaticImageData } from 'next/image';

import { overviews } from "@/assets";

function Overview() {
  return (
    <div className="min-h-screen h-auto py-16 w-full flex flex-col justify-center items-center">
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-y-10">
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
    <div className='h-96 w-72 md:w-96 col-span-1 mx-auto relative overflow-hidden rounded-sm md:rounded-lg xl:rounded-xl'>
        <Image
            src={overview.image}
            alt='overview thumb'
            fill
            className='absolute object-cover'
        />
        <div className='absolute h-full w-full flex flex-col justify-end items-center'>
            <div className='py-10 px-5 flex flex-col justify-center items-center gap-5 bg-slate-200'>
                <h1 className='font-bold text-xl text-primary capitalize'>{overview.title}</h1>
                <p className='text-lg text-primary text-center'>{overview.subText}</p>
            </div>
        </div>
    </div>
)

export default Overview