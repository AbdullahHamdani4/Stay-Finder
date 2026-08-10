import {footerData} from "../data/data.js";

function footer(params) {
    return (
        
        <div className="mx-5 flex flex-col gap-6 rounded-2xl bg-[#efefec] px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8 mb-8">
            {footerData.map(({title,icon,description})=>
            <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e0e1de] text-[#183C32] sm:h-14 sm:w-14">
                    <i className={`${icon} text-lg sm:text-xl`}></i>
                </div>

                <div className="font-inter">
                    <h3 className="text-sm font-semibold text-[#18201D] sm:text-base">
                        {title}
                    </h3>
                    <p className="text-xs text-[#555] sm:text-sm whitespace-pre-line">
                         {description}
                    </p>
                </div>
            </div>
            
              
            )}
        </div>
    )
}
export default footer