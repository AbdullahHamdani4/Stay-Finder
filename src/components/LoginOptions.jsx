import React from "react";

const LoginOptions = ({
  authenticationHandlerWithGoogle,
  authenticationHandlerWithGithub,
  authenticationHandlerWithFacebook,
}) => {
  return (
    <div className="flex items-center justify-center">
      <span className="border border-[#898282] ml-[10px] mb-4 p-2 rounded-[10px]" onClick={authenticationHandlerWithGoogle}>
        <i className="fa-brands fa-google-plus-g text-[18px] rounded cursor-pointer"></i>
      </span>

      <span className="border border-[#898282] ml-[10px] mb-4 p-2 rounded-[10px]" onClick={authenticationHandlerWithFacebook}>
        <i className="fa-brands fa-facebook-f text-[18px] rounded cursor-pointer"></i>
      </span>

      <span className="border border-[#898282] ml-[10px] mb-4 p-2 rounded-[10px]" onClick={authenticationHandlerWithGithub}>
        <i className="fa-brands fa-github text-[18px] rounded cursor-pointer"></i>
      </span>
    </div>
  );
};

export default LoginOptions;
