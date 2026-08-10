import Card from "./popularDestinationCard.jsx";
import {popularDestinationsData} from "../data/data.js";

function PopularDestinations() {
    return (
        <div className="px-5 pt-3">
            <section className=" flex flex-col">
                <div className=" text-2xl sm:text-3xl font-playfair text-[#18201D] font-bold text-center">
                    Popular destinations
                </div>
                <div className="flex gap-5 overflow-x-auto popular-scroll pb-3 pt-3">
                    {popularDestinationsData.map(each => <Card {...each} />)}
                </div>
            </section>
        </div>
    )
}
export default PopularDestinations