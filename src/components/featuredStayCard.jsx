function FeaturedStaysCard({image,name,badge,rating,reviews,location,beds,baths,guests,price}) {
    return (
     
  
    <div className="w-64 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:scale-105">
      <div className="relative h-36 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />

        
        <span className="absolute left-3 top-3 rounded-md bg-white px-2 py-1 font-inter text-[10px] font-medium text-[#333]">
          🔥 {badge}
        </span>

         
        <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white">
          <i className="fa-regular fa-heart"></i>
        </button>
      </div>

     
      <div className="p-3">

         
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-inter text-sm font-semibold text-[#18201D]">
            {name}
          </h3>

          <span className="whitespace-nowrap font-inter text-xs">
            ⭐ {rating} ({reviews})
          </span>
        </div>

        
        <p className="mt-1 font-inter text-xs text-gray-500">
          {location}
        </p>

        
        <div className="mt-4 flex gap-4 font-inter text-[11px] text-gray-600">
          <span>
            <i className="fa-solid fa-bed mr-1"></i>
            {beds} Beds
          </span>

          <span>
            <i className="fa-solid fa-bath mr-1"></i>
            {baths} Baths
          </span>

          <span>
            <i className="fa-solid fa-user mr-1"></i>
            {guests} Guests
          </span>
        </div>

      
        <p className="mt-4 font-inter text-sm font-semibold text-[#18201D]">
          Rs. {price}
          <span className="font-normal"> / night</span>
        </p>

      </div>
    </div>
  );
}
export default FeaturedStaysCard