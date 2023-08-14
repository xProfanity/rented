const Appwrap = (Component, header) => function HOC() {
  return (
    <div className="w-[95%] mx-auto flex flex-col justify-start items-center">
        <div className="w-full flex flex-row justify-center items-center">
            <p className="text-6xl text-primary font-semibold capitalize">{header}</p>
        </div>

        <div className={`mt-10`}>
          <Component />
        </div>
    </div>
  )
}

export default Appwrap