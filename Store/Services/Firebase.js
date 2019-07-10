import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyA9eOFDYVPAVY5VN9b_hN_8rnZfbTRSPJc",
  authDomain: "instagramclonern-995.firebaseapp.com",
  databaseURL: "https://instagramclonern-995.firebaseio.com",
  projectId: "instagramclonern-995",
  storageBucket: "",
  messagingSenderId: "618610975523",
  appId: "1:618610975523:web:4c05c9c9040d12ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const autentication = firebase.auth();

