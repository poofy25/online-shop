// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore"
import { collection, getDoc , doc , setDoc } from "firebase/firestore";

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
export const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export const db = getFirestore(firebase);
// Initialize Firebase Authentication and get a reference to the service

export const auth = getAuth();
export const user = auth.currentUser
export const provider = new GoogleAuthProvider();

auth.onAuthStateChanged(user =>{
  if (user && user.displayName !== localStorage.getItem('userName')){
   async function onLogIn (){
     const userRef = doc(db , `users/${user.uid}`);
    async function writeData(){
        const docData = {
        uid: user.uid,
        name:user.displayName,
        updatedAt:serverTimestamp(),



        };
      
    try {
     await setDoc(userRef , docData , {merge:true})
     console.log("written" , docData)

    } catch (e) {
      console.error("Error adding document: ", e);
    }
   
  }
  await writeData()

  if(!localStorage.getItem('cartProducts')){
    async function setCartDataFromDb(){
     const docData = await getDoc( doc(db, `users/${user.uid}`))
     const cartDataFromDb = docData.data()
     console.log("do stuff" ,cartDataFromDb )
     if(cartDataFromDb.cartItems !== undefined){
        localStorage.setItem('cartProducts' , JSON.stringify(cartDataFromDb.cartItems))

       console.log(docData.data())
     }

    }
    setCartDataFromDb()
  }




};
onLogIn()
}
})
