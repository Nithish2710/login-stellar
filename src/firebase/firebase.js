import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAqb7nLWFwN_AfJeGqcFQWfS7wLhJR70ic",
    authDomain: "stellar-login-sample.firebaseapp.com",
    projectId: "stellar-login-sample",
    storageBucket: "stellar-login-sample.firebasestorage.app",
    messagingSenderId: "1096321088679",
    appId: "1:1096321088679:web:a5ac4d7f6465610f1aaf82",
    measurementId: "G-KFBCR6DWYV"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {app,auth};