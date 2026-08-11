function PopularDestinationCard({pic,name,stays}) {
    return (
        <div className="relative size-32 sm:size-36 md:size-40 lg:size-44 shrink-0 rounded-xl overflow-hidden transition duration-300 hover:scale-105 ">

            <img
                src={pic}
                alt={name}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white">
                <i className="fa-solid fa-location-dot text-[15px]"></i>
            </div>

            <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-inter text-base md:text-lg font-semibold">
                    {name}
                </h3>

                <p className="font-inter text-xs">
                    {stays}+ stays
                </p>
            </div>

        </div>
    )
}
export default PopularDestinationCard