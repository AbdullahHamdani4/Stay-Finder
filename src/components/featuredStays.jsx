import Card from "./featuredStayCard.jsx"
import {featuredStaysData} from "../data/data.js"
function FeaturedStays(params) {
      return (
        <div className="px-5 py-8  ">
            <section className=" flex flex-col  ">
                <div className=" text-2xl sm:text-3xl font-playfair text-[#18201D] font-bold text-center  ">
                    Featured Stays
                </div>
                <div className="flex gap-5 overflow-x-auto popular-scroll pb-3 pt-4">
                    {featuredStaysData.map(each => <Card {...each} />)}
                </div>
            </section>
        </div>
      )
}
export default FeaturedStays