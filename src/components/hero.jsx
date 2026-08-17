import '../App.css'

function HeroSection() {
    return (
        <>
        <div className='px-5 py-4'>
            <section className="hero w-full h-80 sm:h-100 md:h-130 rounded-3xl flex justify-center item-center px-10 md:px-14 flex-col gap-6 ">
           <div className='flex flex-col'>
            <h2 className='font-playfair font-semibold text-[24px] sm:text-[60px] text-white leading-5'>Find Places</h2>
            <h2 className='font-playfair font-semibold text-[24px] sm:text-[60px] text-[#9BAF72]'>worth staying for.</h2>
            <p className='font-inter text-[14px] sm:text-base text-white ml-1'>Discover handpicked stays in the most</p>
            <p className='font-inter text-[14px] sm:text-base text-white ml-1'>beautiful places across Pakistan.</p>
           </div>
           <div className="bookingForm bg-white p-4 gap-10  rounded-2xl w-auto max-w-180 hidden lg:flex">
            <div className='flex font-inter text-xs text-[#6B716D] items-center gap-2 font-semibold'>
                <span><i className="text-base fa-solid fa-earth-americas"></i></span>
                <div className='flex flex-col gap-1'>
                    <span className='text-[10px]'>Where to?</span>
                    <span className='text-black'>Any Destination</span>
                </div>
            </div>
                <div className='flex font-inter text-xs text-[#6B716D] items-center gap-2 font-semibold'>
                <span><i className="text-base fa-regular fa-calendar"></i></span>
                <div className='flex flex-col gap-1'>
                    <span className='text-[10px]'>Check in</span>
                    <span className='text-black'>15 Aug 2026</span>
                </div>
            </div>
                <div className='flex font-inter text-xs text-[#6B716D] items-center gap-2 font-semibold'>
                <span><i className="text-base fa-regular fa-calendar"></i></span>
                <div className='flex flex-col gap-1'>
                    <span className='text-[10px]'>Check out</span>
                    <span className='text-black'>18 Aug 2026</span>
                </div>
            </div>
                <div className='flex font-inter text-xs text-[#6B716D] items-center gap-2 font-semibold'>
                <span><i className="text-base fa-solid fa-user"></i></span>
                <div className='flex flex-col gap-1'>
                    <span className='text-[10px]'>Guests</span>
                    <span className='text-black'>2 Guests</span>
                </div>
            </div>
                <div>
                 <button className="bg-[#0D3026] text-white font-inter text-[12px] rounded-[8px] p-2 py-2.5 px-3 hover:cursor-pointer"><i className="text-base fa-solid fa-magnifying-glass mr-2"></i>Search stays</button>
            </div>
           </div>
        </section>
        </div>
        </>
    )
}
export default HeroSection