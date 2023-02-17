// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzOiEqcaDegc1lhk1u9DqtBe6qiMB5Hps",
  authDomain: "anywhere-by-sourav.firebaseapp.com",
  projectId: "anywhere-by-sourav",
  storageBucket: "anywhere-by-sourav.appspot.com",
  messagingSenderId: "482460994413",
  appId: "1:482460994413:web:41906c9cebcece87002864",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
