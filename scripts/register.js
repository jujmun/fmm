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

//-----------------------------------------------------------------------------------------------------


var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var pInput = document.querySelector("#pInput");
var qInput = document.querySelector("#qInput");

const addBtn = document.querySelector("#addBtn");
const loginBtn = document.querySelector("#loginBtn");


function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}

// Utility: Modular inverse using Extended Euclidean Algorithm
function modInverse(e, phi) {
let m0 = phi, t, q;
let x0 = 0, x1 = 1;

if (phi === 1) return 0;

while (e > 1) {
    q = Math.floor(e / phi);
    t = phi;

    phi = e % phi;
    e = t;
    t = x0;

    x0 = x1 - q * x0;
    x1 = t;
}

if (x1 < 0) x1 += m0;
    return x1;
}

// RSA Key Generation
function generateKeys(p, q) {
const n = p * q;
const phi = (p - 1) * (q - 1);

// Choose small public exponent e
let e = 3;
while (gcd(e, phi) !== 1) {
    e += 2;
}

const d = modInverse(e, phi);

return { n, e, d }; // d = private, e & n = public
}



function InsertData(){

    const p = parseInt(pInput.value);
    const q = parseInt(qInput.value);
    const { n, e, d } = generateKeys(p, q);

    set(ref(db, "users/" + nameInput.value), {
        Email: emailInput.value,
        n: n,
        e: e,
        d: d
    })
    .then(()=>{
        const dec = document.getElementById("dec");
        dec.textContent = "Decryption number 'd': " + d;
        alert("You may now log in!")
    })
    .catch((error)=>{
        alert(error)
    });
}

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    InsertData();
});

loginBtn.addEventListener("click", (e) => {
    window.location.href = "login.html";
});
