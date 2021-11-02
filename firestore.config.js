import firebase from "firebase/app";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuzZIef-YbR4aZUvYwZBv4AoFEHgZN3-I",
    authDomain: "recipe-app-dc540.firebaseapp.com",
    projectId: "recipe-app-dc540",
    storageBucket: "recipe-app-dc540.appspot.com",
    messagingSenderId: "714304312505",
    appId: "1:714304312505:web:ba043a8dd4b597f9787768",
    measurementId: "G-WY7WB14JXR"
  };

    // Initialize Firebase
    const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    //^initialize services
    const Firestore=app.firestore();

    export default Firestore;