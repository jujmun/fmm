// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyD74kX-2LuhSx1g2cSWLvGcNPVMTVoA-U0",
authDomain: "at-fmm-a8527.firebaseapp.com",
databaseURL: "https://at-fmm-a8527-default-rtdb.asia-southeast1.firebasedatabase.app",
projectId: "at-fmm-a8527",
storageBucket: "at-fmm-a8527.firebasestorage.app",
messagingSenderId: "8983576108",
appId: "1:8983576108:web:4a81bb1b80eac022415b89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase, set, get, ref, child} from "https://www.gstatic.com/firebasejs/11.8.0/firebase-database.js";
const db = getDatabase();
