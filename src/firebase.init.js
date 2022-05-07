// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEx1U8idNGBqjC0USCVnr1dzru3HN8KOo",
    authDomain: "cargoexpress-warehouse-client.firebaseapp.com",
    projectId: "cargoexpress-warehouse-client",
    storageBucket: "cargoexpress-warehouse-client.appspot.com",
    messagingSenderId: "197248632736",
    appId: "1:197248632736:web:c5a703120e69d5da9946c5"


    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId





};
console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
