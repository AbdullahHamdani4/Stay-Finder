import Card from "./featuredStayCard.jsx"
import { featuredStaysData } from "../data/data.js"
import "../App.css"

function FeaturedStays(params) {
    return (
        <div className="px-5 py-8  ">
            <section className=" flex flex-col  ">
                <div className=" font-playfair text-[#18201D] text-center flex justify-between px-1 items-center">
                    <span className="text-[18px] sm:text-[26px] font-semibold">Featured Stays</span>
                    <span className="text-xs sm:text-[14px] hover:cursor-pointer">View All <i class="fa-solid fa-arrow-right"></i></span>
                </div>
                <MappedCards filter={""} wrapVal={"flex-nowrap"} gapVal={5} justifyVal={"justify-start"} />
            </section>
        </div>
    )
}
function MappedCards({ filter, wrapVal, gapVal, justifyVal }) {
    if (filter) {
       return (
         <div className={`featuredStay flex gap-${gapVal} overflow-x-hidden popular-scroll pb-3 pt-3 ${wrapVal} ${justifyVal}`}>
                {featuredStaysData.filter(each => filter.toLowerCase() === each.location.toLowerCase()).map(each => <Card key={each.id} {...each} />)}
            </div>
       )
    } else {
        return (
            <div className={`featuredStay flex gap-${gapVal} overflow-x-hidden popular-scroll pb-3 pt-3 ${wrapVal} ${justifyVal}`}>
                {featuredStaysData.map(each => <Card key={each.id} {...each} />)}
            </div>
        )
    }

}

export { FeaturedStays, MappedCards }