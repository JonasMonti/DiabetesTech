// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcNGBIUmNs5fjieHMXPM04y0mY5U4B6ro",
  authDomain: "diabetestech-f6a8b.firebaseapp.com",
  projectId: "diabetestech-f6a8b",
  storageBucket: "diabetestech-f6a8b.appspot.com",
  messagingSenderId: "264317310162",
  appId: "1:264317310162:web:8fb924a3a4604591c0890b",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
