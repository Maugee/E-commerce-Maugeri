import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAPDqlsOXrwJUGvcr1kvLJ18xzTVD5h78g",
    authDomain: "ecommerce-1-f80f2.firebaseapp.com",
    projectId: "ecommerce-1-f80f2",
    storageBucket: "ecommerce-1-f80f2.appspot.com",
    messagingSenderId: "5441347120",
    appId: "1:5441347120:web:c5dad923a609502f3a97f5"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db