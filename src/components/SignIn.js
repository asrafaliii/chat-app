import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
// import GoogleButton from "react-google-button";
import { auth } from "../firebase";

const style = {
  //   wrapper: `flex justify-center`,
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div>
      {/* <GoogleButton onClick={googleSignIn} /> */}
      <button onClick={googleSignIn} className={style.button}>
        SignIn
      </button>
    </div>
  );
};

export default SignIn;
