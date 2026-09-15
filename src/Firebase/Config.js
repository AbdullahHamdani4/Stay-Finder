import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaB4O9KGfueVpOxl9H2sUcR-MlrwxRVIE",
  authDomain: "stay-finder-868c5.firebaseapp.com",
  projectId: "stay-finder-868c5",
  storageBucket: "stay-finder-868c5.firebasestorage.app",
  messagingSenderId: "435260005425",
  appId: "1:435260005425:web:9688c1ac7799a9099fc910",
  measurementId: "G-Y5DQEDK6NY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const providerForGoogle = new GoogleAuthProvider();
const providerForFacebook = new FacebookAuthProvider();
const providerForGithub = new GithubAuthProvider();

export { auth, db, providerForGoogle, providerForFacebook, providerForGithub };
