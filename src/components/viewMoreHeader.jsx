import React, { memo } from 'react'

const viewMoreHeader = memo( ({navLink,title,description,descriptionBr,badgeIcon,badgeTitle,badgeDescription}) => {
  return (
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">

           <div>
             <div className="mb-4 flex items-center gap-2 text-sm text-[#6B716D]">
              <span>Home</span>

              <i className="fa-solid fa-chevron-right text-[10px]"></i>

              <span>{navLink}</span>
            </div>

             <h1 className="font-['Playfair_Display'] text-5xl font-semibold tracking-[-0.02em] text-[#18201D] lg:text-[52px]">
               {title}
            </h1>

             <p className="mt-3 max-w-[460px] text-[15px] leading-7 text-[#6B716D]">
               {description}
              <br className="hidden sm:block" />
              {descriptionBr}
            </p>
          </div>
          
           <div className="flex w-full max-w-[330px] items-center gap-4 rounded-2xl bg-[#EEF1EA] px-6 py-5 lg:mt-5">

             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F8F7F3] text-[#063C2F]">
              <i className={`${badgeIcon} text-xl`}></i>
            </div>

             <div>
              <p className="text-[14px] font-semibold text-[#18201D]">
                 {badgeTitle}
              </p>

              <p className="mt-1 text-[13px] leading-5 text-[#6B716D]">
                 {badgeDescription}
              </p>
            </div>
          </div>
        </div>
  )
})

export default viewMoreHeader