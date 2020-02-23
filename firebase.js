var app_fireBase ={};
(function(){
   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCaHFdS0LJN24EZtfcfQYWPM_ACeHH-vWM",
    authDomain: "email-me19.firebaseapp.com",
    databaseURL: "https://email-me19.firebaseio.com",
    projectId: "email-me19",
    storageBucket: "email-me19.appspot.com",
    messagingSenderId: "1018288270524",
    appId: "1:1018288270524:web:f4b574264c592bc951f4b9",
    measurementId: "G-5G06H1S8W8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
    
 app_fireBase = firebase;

})()
