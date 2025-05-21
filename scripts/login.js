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


//----------------------------------------------------------------------------------




let randomNumber = 0;
var encryptedNumber = 0;


var nameInput = document.querySelector("#nameInput");
var decryptedInput = document.querySelector("#decryptedInput");
var e = 0;
var n = 0;


const findBtn = document.querySelector("#findBtn");
const submitBtn = document.querySelector("#submitBtn");


function FindData() {
    const dbRef = ref(getDatabase());
    const name = nameInput.value;
  
    get(child(dbRef, `users/${name}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            console.log("User found:", userData.d);
            e = userData.e;
            n = userData.n;

            randomNumber = Math.floor(Math.random()*10) + 1;
            encryptedNumber = Math.pow(randomNumber, e)%n;
            console.log("ENCRYPTED NUMBER: " +encryptedNumber + "\tn: " + n + "\te:" + e + "\td:" + userData.d + "\t random num: " + randomNumber);

            const enc = document.getElementById("enc");
            enc.textContent = "Encrypted Code: " + encryptedNumber;

        } else {
          alert("No user found!");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching user");
      });
}


findBtn.addEventListener("click", (e) => {
    e.preventDefault();
    FindData();
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (parseInt(decryptedInput.value) === randomNumber) {
        window.location.href = "main.html";
    } else {
        alert("Incorrect code...");
    }
})



