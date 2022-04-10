import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7dVS9imyQp1Tg4UjPV1evVUOKLiRx7nA",
  authDomain: "clothing-ecommerce-f0922.firebaseapp.com",
  projectId: "clothing-ecommerce-f0922",
  storageBucket: "clothing-ecommerce-f0922.appspot.com",
  messagingSenderId: "490806377521",
  appId: "1:490806377521:web:f7e37568f4033a4defe910",
  measurementId: "G-R2MRPVW9TM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.user.uid);

  const { user } = userAuth;
  // users data
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log(e);
    }
  }
};