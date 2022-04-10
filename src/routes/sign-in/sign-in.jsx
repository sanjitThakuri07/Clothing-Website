import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response);
  };
  return (
    <div>
      <p>SignIn Page</p>
      <button onClick={logGoogleUser}>Sign In With Google Pop up</button>
    </div>
  );
};

export default SignIn;
