import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyD-y-wJ4A4wfPfte5fg6h0zABZEPpFyvxY",
  authDomain: "voting-app-5ec8b.firebaseapp.com",
  databaseURL: "https://voting-app-5ec8b-default-rtdb.firebaseio.com",
  projectId: "voting-app-5ec8b",
  storageBucket: "voting-app-5ec8b.appspot.com",
  messagingSenderId: "537798099640",
  appId: "1:537798099640:web:c66ce4ff60006732eeea4d",
  measurementId: "G-9YJL834T4C
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
