import React from "react";
import LoginOptions from "../components/LoginOptions.jsx";
import ImageInput from "../components/ImageInput.jsx";
import Input from "../components/AuthenticationInput.jsx";
import Button from "../components/AuthenticationButton.jsx";
const AuthenticationForm = ({
  signInHandler,
  signUpHandler,
  authenticationHandlerWithGoogle,
  authenticationHandlerWithGithub,
  authenticationHandlerWithFacebook,
  toggleForm,
  setEmail,
  setPassword,
  setName,
  name,
  email,
  password,
  isSignUp,
  imageHandler,
  image,
  loader,
}) => {
  return (
    <div
      className={`
            w-1/2 h-full
            flex flex-col justify-center items-center
            text-center
            transition-transform duration-300 ease-in-out
            shrink-0
            max-[675px]:w-[65%]
            max-[550px]:w-full

            ${
              isSignUp
                ? "translate-x-full max-[675px]:translate-x-1/2 max-[550px]:translate-x-0"
                : "translate-x-0"
            }
          `}
    >
      {/* SIGN In */}
      <div
        className={`
              w-full px-8
              ${isSignUp ? "hidden" : "block"}
              max-[550px]:px-5
            `}
      >
        <form
          onSubmit={(e) => {
            (e.preventDefault(), signInHandler());
          }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[35px] font-semibold mb-3 mr-[2px] max-[550px]:text-[28px]">
            Sign In
          </h2>

          {/* Social Icons */}
          <LoginOptions authenticationHandlerWithGoogle={authenticationHandlerWithGoogle} authenticationHandlerWithFacebook={authenticationHandlerWithFacebook} authenticationHandlerWithGithub={authenticationHandlerWithGithub}/>

          <p className="mb-4 text-[13px]">or use your email password</p>

          <Input
            placeholder={"Email"}
            type={"email"}
            value={email}
            inputHandler={setEmail}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            value={password}
            inputHandler={setPassword}
          />

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mb-[1.3rem] text-sm text-white no-underline"
          >
            Forgot Your Password?
          </a>

          <Button name={"Sign In"} />

          {/* MOBILE ACCOUNT SWITCH */}
          <p className="hidden max-[550px]:block mt-4 text-[13px]">
            Don't have an account?{" "}
            <span
              onClick={toggleForm}
              className="font-bold cursor-pointer underline"
            >
              Create one
            </span>
          </p>
        </form>
      </div>

      {/* SIGN UP */}
      <div
        className={`
              w-full px-8
              ${isSignUp ? "block" : "hidden"}
              max-[550px]:px-5
            `}
      >
        <form
          onSubmit={(e) => {
            (e.preventDefault(), signUpHandler());
          }}
          className="flex flex-col items-center"
        >
          <h2 className="text-[35px] font-semibold mb-3 mr-[2px] whitespace-nowrap max-[550px]:text-[28px]">
            Create Account
          </h2>

          {/* Social Icons */}
          <LoginOptions authenticationHandlerWithGoogle={authenticationHandlerWithGoogle} authenticationHandlerWithFacebook={authenticationHandlerWithFacebook} authenticationHandlerWithGithub={authenticationHandlerWithGithub}/>

          <p className="mb-4 text-[13px]">
            or use your email for registeration
          </p>

          <ImageInput image={image} imageHandler={imageHandler} />

          <Input
            placeholder={"Name"}
            type={"text"}
            value={name}
            inputHandler={setName}
          />
          <Input
            placeholder={"Email"}
            type={"email"}
            value={email}
            inputHandler={setEmail}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            value={password}
            inputHandler={setPassword}
          />

          <Button name={"Sign In"} loader={loader} />

          {/* MOBILE ACCOUNT SWITCH */}
          <p className="hidden max-[550px]:block mt-4 text-[13px]">
            Already have an account?
            <span
              onClick={toggleForm}
              className="font-bold cursor-pointer underline"
            >
              Sign in
            </span>
          </p>
        </form>
      </div>

    </div>
  );
};

export default AuthenticationForm;
