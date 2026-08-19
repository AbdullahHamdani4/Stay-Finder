import Card from "./featuredStayCard.jsx"
import { featuredStaysData } from "../data/data.js"
import "../App.css"
import { Link, Navigate, useNavigate, useNavigation } from 'react-router-dom'
function FeaturedStays(params) {
    return (
        <div className="px-5 py-8  ">
            <section className=" flex flex-col  ">
                <div className=" font-playfair text-[#18201D] text-center flex justify-between px-1 items-center">
                    <span className="text-[18px] sm:text-[26px] font-semibold">Featured Stays</span>
                    <Link className="text-xs sm:text-[14px] hover:cursor-pointer" to="/ViewAll">View All <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <MappedCards filter={{
                    destination: "Any-Destination", minPrice: 5000, maxPrice: 90000, guests: "Any guest",}} sort={"Recommended"} wrapVal={"flex-nowrap"} gapVal={5} justifyVal={"justify-start"} />
            </section>
        </div>
    )
}
function MappedCards({ filter, sort, wrapVal, gapVal, justifyVal }) {
    const { destination, minPrice, maxPrice, guests, } = filter
    let cards = featuredStaysData.filter((each) => {
        let destinationCheck = destination.toLowerCase() === "any-destination" ? true : destination.toLowerCase() === each.location.toLowerCase() ? true : false;
        let minPriceCheck = Number(each.price) >= minPrice;
        let maxPriceCheck = Number(each.price) <= maxPrice;
        let guestsCheck = guests.toLowerCase() === "any guest" ? true : Number(guests) == each.guests ? true : false;
        return destinationCheck && minPriceCheck && maxPriceCheck && guestsCheck
    }).map(each => <Card key={each.id} {...each} />)

    return (
        <div className={`featuredStay flex gap-${gapVal} overflow-x-hidden popular-scroll pb-3 pt-3 ${wrapVal} ${justifyVal}`}>{sort.toLowerCase() === "recommended" ? cards : sort.toLowerCase() === "low" ? cards.sort((a, b) => a.props.price - b.props.price) : sort.toLowerCase() === "high" ? cards.sort((a, b) => b.props.price - a.props.price) : ""}</div>
    )








}

export { FeaturedStays, MappedCards }