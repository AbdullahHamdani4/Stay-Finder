import React from 'react'

const AuthenticationTogglePanel = ({isSignUp,toggleForm}) => {
  return (
     <div
          className={`
            w-1/2 h-full
            shrink-0
            bg-[#0E1D2C]
            text-white
            hidden flex-col
            justify-center
            items-center
            text-center
            capitalize
            px-8
            rounded-l-[40%]
            transition-transform duration-300 ease-in-out
            max-[675px]:w-[35%]
            min-[550px]:flex
            ${
              isSignUp
                ? `
                  -translate-x-full
                  rounded-l-none
                  rounded-r-[40%]
                  max-[675px]:-translate-x-[201%]
                `
                : "translate-x-0"
            }
          `}
        >
          {/* WELCOME BACK */}
          <div
            className={`
              ${isSignUp ? "hidden" : "flex"}
              flex-col items-center
            `}
          >
            <h2 className="text-[30px] font-semibold max-[675px]:text-[20px] max-[340px]:text-[18px]">
              Welcome Back!
            </h2>

            <p className="py-4 max-[675px]:text-[13px]">
              register with your personal details to use all site features
            </p>

            <p className="font-bold">Don't have an account?</p>

            <button
              type="button"
              onClick={toggleForm}
              className="
                mt-4
                px-[45px] py-[10px]
                bg-transparent
                border-2 border-white
                rounded
                text-white
                font-bold
                uppercase
                cursor-pointer
                max-[675px]:px-2
                max-[675px]:py-2
                max-[675px]:text-[12px]
              "
            >
              Sign Up
            </button>
          </div>

          {/* HELLO FRIEND */}
          <div
            className={`
              ${isSignUp ? "flex" : "hidden"}
              flex-col items-center
            `}
          >
            <h2 className="text-[30px] font-semibold max-[675px]:text-[20px] max-[340px]:text-[18px]">
              Hello, Friend
            </h2>

            <p className="py-4 max-[675px]:text-[13px]">
              register with your personal details to use all site features
            </p>

            <p className="font-bold">Already have an account?</p>

            <button
              type="button"
              onClick={toggleForm}
              className="
                mt-4
                px-[45px] py-[10px]
                bg-transparent
                border-2 border-white
                rounded
                text-white
                font-bold
                uppercase
                cursor-pointer
                max-[675px]:px-2
                max-[675px]:py-2
                max-[675px]:text-[12px]
              "
            >
              Sign In
            </button>
          </div>
        </div>
  )
}

export default AuthenticationTogglePanel