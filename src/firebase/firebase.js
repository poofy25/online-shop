// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  , GoogleAuthProvider , signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQW8BHrhweij93RP-jif7FB0BJmWWe6yI",
  authDomain: "online-shop-25.firebaseapp.com",
  projectId: "online-shop-25",
  storageBucket: "online-shop-25.appspot.com",
  messagingSenderId: "445130183188",
  appId: "1:445130183188:web:ab69f3361f833528eecd01",
  measurementId: "G-T93XCFM44G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
