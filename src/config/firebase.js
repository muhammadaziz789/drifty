import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCz0d8hlEbTkUoeuUU-fy1OUOxtzp3aFrI",
  authDomain: "tekkid-c9839.firebaseapp.com",
  databaseURL: 'https://tekkid-c9839-default-rtdb.firebaseio.com/',
  projectId: "tekkid-c9839",
  storageBucket: "tekkid-c9839.appspot.com",
  messagingSenderId: "1015916532602",
  appId: "1:1015916532602:web:72b366c893521a1b79fcc3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export { database }
