import * as firebase from 'firebase'
import { APIKEYFIREBASE, PROYECT_ID } from '../../config'

var firebaseConfig  = {
  apiKey: APIKEYFIREBASE,
  authDomain: "instagramclonern-995.firebaseapp.com",
  databaseURL: "https://instagramclonern-995.firebaseio.com",
  projectId: "instagramclonern-995",
  storageBucket: `${PROYECT_ID}.appspot.com`,
  messagingSenderId: "618610975523",
  appId: "1:618610975523:web:4c05c9c9040d12ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const autentication = firebase.auth();
export const database = firebase.database();
