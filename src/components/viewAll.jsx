import React from 'react'

const viewAll = () => {
    return (
        <section>
            <div>
                <div>
                    <h2>Featured stays</h2>
                    <p>Handpicked stays with amazing views,top ratings and unforgettable experiences.</p>
                </div>

                <div className="flex items-center gap-4 bg-[#efefec] w-75 p-2 rounded-2xl">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0e1de] text-[#183C32] sm:h-14 sm:w-14">
                        <i className={"fa-solid fa-tags text-lg sm:text-xl"}></i>
                    </div>

                    <div className="font-inter">
                        <h3 className="text-sm font-semibold text-[#18201D] sm:text-base">
                            Best price guarantee
                        </h3>
                        <p className="text-xs text-[#555] sm:text-sm whitespace-pre-line">
                            Find a lower price? We'll match it.
                        </p>
                    </div>
                </div>
            </div>
            <div className="filters">
                <div>
                    <span>Logo</span>
                    <div>
                        <span>Destination</span>
                        <select>
                            <option value="">Any destination</option>
                            <option value="">Karachi</option>
                            <option value="">Lahore</option>
                            <option value="">Hunza</option>
                        </select>
                    </div>
                </div>

                <div>
                    <span>Logo</span>
                    <div>
                        <span>Check in</span>
                        <input type="date" value="2026-08-12" min="2026-08-12"/>
                    </div>
                </div>

                <div>
                    <span>Logo</span>
                    <div>
                        <span>Check out</span>
                        <select>
                            <option value="">18 Aug 2026</option>
                        </select>
                    </div>
                </div>

                <div>
                    <span>Logo</span>
                    <div>
                        <span>Guests</span>
                        <select>
                            <option value="">2 Guests</option>
                            <option value="">1 Guest</option>
                            <option value="">3 Guests</option>
                            <option value="">4 Guests</option>
                        </select>
                    </div>
                </div>

                <div>
                    <span>Logo</span>
                    <div>
                        <span>Price range</span>
                        <select>
                            <option value="">Rs. 2,000 - Rs. 40,000+</option>
                        </select>
                    </div>
                </div>

                <div>
                    <span>Logo</span>
                    <div>
                        <span>Property type</span>
                        <select>
                            <option value="">All types</option>
                            <option value="">Hotel</option>
                            <option value="">Villa</option>
                            <option value="">Apartment</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default viewAll