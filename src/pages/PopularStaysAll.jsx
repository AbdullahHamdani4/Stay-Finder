import React from 'react'
import ViewMoreHeader from '../components/viewMoreHeader'

const PopularStaysAll = () => {
    const viewMoreHeaderData={
        navLink:"Destinations",
        title:"Popular Destinations",
        description:"Explore the handpicked destinations loved by",
        descriptionBr:"travelers around the Pakistan",
        badgeIcon:"fa-regular fa-clipboard-check",
        badgeTitle:"Handpicked stays",
        badgeDescription:"We personally verify every property"
    }
  return (
 <main className="min-h-screen bg-[#F8F7F3] px-6 py-10 text-[#18201D] lg:px-12">
            <section className=" topSec mx-auto max-w-[1440px] mb-3">


                <ViewMoreHeader {...viewMoreHeaderData} />
                



            </section>
            
        </main>
  )
}

export default PopularStaysAll