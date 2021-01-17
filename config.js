import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAK3pcLMNDMqm9dTmWtSsdiwBiT1onNlJQ",
    authDomain: "bartersystemapp-29e37.firebaseapp.com",
    projectId: "bartersystemapp-29e37",
    storageBucket: "bartersystemapp-29e37.appspot.com",
    messagingSenderId: "977777115111",
    appId: "1:977777115111:web:1c6d06af764c214c654742"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();