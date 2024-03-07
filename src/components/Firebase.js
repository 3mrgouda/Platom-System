import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9kSYKU9__RJhhXkQoiJsE0yAot82KGKo",
  authDomain: "task-management-1cf64.firebaseapp.com",
  projectId: "task-management-1cf64",
  storageBucket: "task-management-1cf64.appspot.com",
  messagingSenderId: "514465671263",
  appId: "1:514465671263:web:a7c255fcc6832c3e4a93ea"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

//Initialize Serveices
export const db = getFirestore(App);




