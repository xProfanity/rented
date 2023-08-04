import Image from "next/image"
import { useState } from "react"

import { image } from "@/common.types"
import { urlFor } from "@/lib/sanity"

type Props = {
    images: image[]
}


export default function ImageGallery({images}: Props) {
    const imageData = images.map((image, index) => ({
        ...image,
        isActive: index === 0
    }))

    const [imageStore, setImageData] = useState(imageData)

    const activeImage = () => {
        const activeImage = imageStore.filter(img => img.isActive)[0]

        const activeImageUrl = urlFor(activeImage).height(400).width(600).url()

        return activeImageUrl
    }

    const handleActiveImage = (selectedImage: image) => {
        const newImageData = images.map((image) => ({
            ...image,
            isActive: image.asset === selectedImage.asset
        }))

        setImageData(newImageData)
    }
  return (
    <div className="h-auto w-[95%] flex-1 mx-auto">
        <div className="flex w-full flex-col gap-20 md:flex-row justify-center items-center">
            <Image
                src={activeImage()}
                height={500}
                width={700}
                alt="selected pic"
                className="object-contain rounded-xl shadow-lg shadow-primary border-2 border-primary"
            />
            <div className="flex md:grid flex-row md:grid-cols-2 gap-10 justify-center items-center">
                {imageStore.map((image, index) => (
                    <div key={index}>
                        <Image
                            src={urlFor(image).height(200).width(200).url()}
                            height={200}
                            width={200}
                            alt="gallery"
                            className={`object-contain rounded-xl ${image.isActive && 'border-2 border-primary'} cursor-pointer`}
                            onClick={() => handleActiveImage(image)}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
