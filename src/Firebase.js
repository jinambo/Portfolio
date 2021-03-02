import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7t9K6qsP8_u8COoWG3Q8RROFF6mJI6yY",
    authDomain: "jiri-srytr-porfolio.firebaseapp.com",
    databaseURL: "https://jiri-srytr-porfolio-default-rtdb.firebaseio.com",
    projectId: "jiri-srytr-porfolio",
    storageBucket: "jiri-srytr-porfolio.appspot.com",
    messagingSenderId: "851069073355",
    appId: "1:851069073355:web:5ad8f33079a72d4552684e",
    measurementId: "G-5XVS2DWLFD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export { firebase };