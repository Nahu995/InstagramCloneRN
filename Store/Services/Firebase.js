import * as firebase from 'firebase'
import { apiKeyFirebase } from '../../apiKey'

var config = {
  apiKey: apiKeyFirebase,
  authDomain: "instagramclonern-995.firebaseapp.com",
  databaseURL: "https://instagramclonern-995.firebaseio.com",
  projectId: "instagramclonern-995",
  storageBucket: "",
  messagingSenderId: "618610975523",
  appId: "1:618610975523:web:4c05c9c9040d12ee"
};
// Initialize Firebase
firebase.initializeApp(config);

export const autentication = firebase.auth();
export const database = firebase.database();
