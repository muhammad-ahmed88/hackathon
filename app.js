
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
import { getFirestore ,  doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEkTMoQvHVrQ1zvGcC9f9WKGyl858i78s",
  authDomain: "blogpost-app-d9d93.firebaseapp.com",
  projectId: "blogpost-app-d9d93",
  storageBucket: "blogpost-app-d9d93.appspot.com",
  messagingSenderId: "756771604271",
  appId: "1:756771604271:web:e1bba8791b678bd6bc83da",
  measurementId: "G-5586VHJX11"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

let firstName =document.querySelectorAll("#f-name")[0];
let lastName =document.querySelectorAll("#l-name")[0];

let email =document.querySelectorAll("#email")[0];
let password=document.querySelectorAll("#password")[0];
let signInBtn = document.querySelectorAll(".signin-btn")[0];
let k = ()=>{
  
  //  signInBtn.addEventListener('click',()=>{
    
    console.log(password.value,signInBtn.value)
   
   createUserWithEmailAndPassword(auth, email.value, password.value)
     .then((res) => {
       const user = res.user;
       console.log(user)
       window.open("./login.html");
       console.log(user);
   
   
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log("error-->" , errorMessage );
   
     });

    }

//  })




window.k=k;

// let logInBtn = documetn.querySelectorAll("login-btn")[0];


let signInEmail=document.querySelectorAll(".email")[0];
let logInPass = document.querySelectorAll(".password")[0];

const logIn =()=> {
    
    signInWithEmailAndPassword(auth,  signInEmail.value , logInPass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.open("./profile.html");
      console.log(user);


    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("Error-->",errorMessage);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Rigester First',
      })
      
    });
}

window.logIn = logIn;


// const setUserName=async()=>{
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  
// }