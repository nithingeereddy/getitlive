import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL74BGPCUxwN6TH81kOBgC-Z8OqlHszuQ",
  authDomain: "getit-things.firebaseapp.com",
  databaseURL: "https://getit-things.firebaseio.com",
  projectId: "getit-things",
  storageBucket: "getit-things.appspot.com",
  messagingSenderId: "472031848655",
  appId: "1:472031848655:web:09af32a5ebe30e1c3f6fba",
  measurementId: "G-MNVZCJTCDZ"
};
})
 const db = firebaseApp.firestore();
 const auth = firebase.auth();

 export { auth};
