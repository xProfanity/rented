export default function TopFeatured({properties}: any) {
    console.log('properties', properties)
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-start items-center">
        <div className="w-full flex flex-row justify-center items-center">
            <p className="text-6xl text-primary font-semibold">Top Featured</p>
        </div>

        <div className="mt-10 w-full grid grid-cols-4 justify-center items-center">
            
        </div>
    </div>
  )
}