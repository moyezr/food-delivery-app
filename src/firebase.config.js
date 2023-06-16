import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
import { getStorage } from "firebase/storage"




const firebaseConfig = {
  apiKey: "AIzaSyAjB9BAW-j-LvTVS4lGcOXU3Y-yKYY-h8s",
  authDomain: "food-delivery-app-b5370.firebaseapp.com",
  databaseURL: "https://food-delivery-app-b5370-default-rtdb.firebaseio.com",
  projectId: "food-delivery-app-b5370",
  storageBucket: "food-delivery-app-b5370.appspot.com",
  messagingSenderId: "405636412944",
  appId: "1:405636412944:web:3957f813d3c49aebe43c95"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }