import firebase from 'firebase'

let config = {
  apiKey: "AIzaSyA3guAAQ8TUvdC_2y-2mzWb24cu7Vh0kgk",
  authDomain: "giftpack-backend.firebaseapp.com",
  databaseURL: "https://giftpack-backend.firebaseio.com",
  projectId: "giftpack-backend",
  storageBucket: "giftpack-backend.appspot.com",
  messagingSenderId: "419798995920",
  appId: "1:419798995920:web:0c0220140f7585bfc0dfd5",
  measurementId: "G-4LCHVBKF3C"
};
let fire = firebase.initializeApp(config);
// firebase.initializeApp(config);

// let fire
// if (!firebase.apps.length) {
//   fire = firebase.initializeApp({});
// }

export default fire;