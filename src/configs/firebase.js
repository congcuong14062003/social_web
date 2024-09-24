// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import getAuth

const firebaseConfig = {
    apiKey: 'AIzaSyDLvINwqVTVWcHa02su49zfCS3Zf2Dia_g',
    authDomain: 'socialmedia-a6d58.firebaseapp.com',
    projectId: 'socialmedia-a6d58',
    storageBucket: 'socialmedia-a6d58.appspot.com',
    messagingSenderId: '869879955893',
    appId: '1:869879955893:web:ca19bdd601a867ff76d9fc',
    measurementId: 'G-FXEK2EBCS7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { app, auth }; // Export both app and auth
