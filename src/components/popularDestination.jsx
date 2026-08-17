import Card from "./popularDestinationCard.jsx";
import {popularDestinationsData} from "../data/data.js";
import "../App.css"

function PopularDestinations() {
    return (
        <div className="pt-3">
            <section className=" flex flex-col px-5">
                <div className=" font-playfair text-[#18201D] text-center flex justify-between px-1 items-center">
                  <span className="text-[18px] sm:text-[26px] font-semibold">Popular destinations</span>
                  <span className="text-xs sm:text-[14px] hover:cursor-pointer">View All <i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popularDestination flex gap-5 overflow-x-hidden popular-scroll pb-3 pt-3">
                    {popularDestinationsData.map(each => <Card {...each} />)}
                </div>
            </section>
        </div>
    )
}
export default PopularDestinations