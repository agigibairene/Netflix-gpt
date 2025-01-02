import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "netflix-gpt-950c6.firebaseapp.com",
  projectId: "netflix-gpt-950c6",
  storageBucket: "netflix-gpt-950c6.firebasestorage.app",
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);