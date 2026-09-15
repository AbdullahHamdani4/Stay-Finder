import { use, useState } from "react";
import {
  auth,
  db,
  providerForGoogle,
  providerForFacebook,
  providerForGithub,
} from "../Firebase/Config.js";
import { ToastContainer, toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import AuthenticationForm from "../components/AuthenticationForm.jsx";
import AuthenticationTogglePanel from "../components/AuthenticationTogglePanel.jsx";
import imageURl from "../Cloudinary/Cloudinary.js";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login2() {
  const navigate=useNavigate()
  const [isSignUp, setIsSignUp] = useState(false); //For Form Toggle
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageurlForCloudinary, setCloudinaryImage] = useState(null);
  const [loader, setLoader] = useState(null);
  const imageHandler = (e) => {
    const file = e.target.files[0];
    setCloudinaryImage(file);

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const resetValues = (msg) => {
    msg ? toast(`Sign ${msg} Successfully`) : "";
    msg ?  navigate("/Home"):""
    setEmail("");
    setPassword("");
    setName("");
    setImage(null);
    setCloudinaryImage(null);
    setLoader(null);
    
  };

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    resetValues(null);
  };

  const signInHandler = async () => {
    try {
      setLoader(true);
      let response = await signInWithEmailAndPassword(auth, email, password);
      resetValues("In");
    } catch (error) {
      setLoader(null);
      if (error.code === "auth/invalid-credential")
        toast("Invalid Credentials");
      else toast("Something went wrong");
    }
  };

  const authenticationHandlerWithGoogle = async () => {
    try {
      setLoader(true);
      const response = await signInWithPopup(auth, providerForGoogle);
      const user = response.user;
      console.log(response);

      resetValues("In");
    } catch (error) {
      setLoader(null);
        if (error.code === "auth/account-exists-with-different-credential")
        toast("Account exist with different credentials");
      else toast("Something went wrong");
      console.log(error)
    }
  };

  const authenticationHandlerWithGithub = async () => {
    try {
      setLoader(true);
      const response = await signInWithPopup(auth, providerForGithub);
      resetValues("In");
      console.log(response);
    } catch (error) {
      setLoader(null);
         if (error.code === "auth/account-exists-with-different-credential")
        toast("Account exist with different credentials");
      else toast("Something went wrong");
    }
  };

  const authenticationHandlerWithFacebook = async () => {
    try {
      setLoader(true);
      const response = await signInWithPopup(auth, providerForFacebook);
      resetValues("In");
      console.log(response);
    } catch (error) {
      setLoader(null);
        if (error.code === "auth/account-exists-with-different-credential")
        toast("Account exist with different credentials");
      else toast("Something went wrong");
      console.log(error);
      
    }
    }
  

  const signUpHandler = async () => {
    if (!image) return toast("Please provide picture");
    if (!name) return toast("Please provide name");
    if (!email) return toast("Please provide email");
    if (!password) return toast("Please provide password");

    try {
      setLoader(true);
      let { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const userImage = await imageURl(imageurlForCloudinary);

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        email: email,
        password: password,
        profileImage: userImage,
      });

      resetValues("Up");
    } catch (error) {
      setLoader(null);
      switch (error.code) {
        case "auth/email-already-in-use":
          toast("Email already registered");
          break;

        case "auth/weak-password":
          toast("Password is too weak");
          break;

        case "auth/invalid-email":
          toast("Please enter correct email");
          break;

        default:
          toast("Something went wrong");
      }
    }
  };

  return (
    <>
      <div className="login font-['Montserrat',sans-serif] text-white">
        <div
          className="
          relative flex
          
          w-[700px] h-[500px]
          mx-8
          bg-white/5 backdrop-blur-sm
          shadow-[rgba(0,0,0,0.3)_0px_19px_38px,rgba(0,0,0,0.22)_0px_15px_12px]
          overflow-hidden
          max-[675px]:h-[500px]
          max-[675px]:mx-2
          max-[340px]:mx-0
        "
        >
          <AuthenticationForm
            signUpHandler={signUpHandler}
            signInHandler={signInHandler}
            authenticationHandlerWithGoogle={authenticationHandlerWithGoogle}
            authenticationHandlerWithGithub={authenticationHandlerWithGithub}
            authenticationHandlerWithFacebook={
              authenticationHandlerWithFacebook
            }
            toggleForm={toggleForm}
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
            email={email}
            password={password}
            name={name}
            isSignUp={isSignUp}
            imageHandler={imageHandler}
            image={image}
            loader={loader}
          />

          <AuthenticationTogglePanel
            isSignUp={isSignUp}
            toggleForm={toggleForm}
          />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

