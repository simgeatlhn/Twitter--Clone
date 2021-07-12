import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB3T1mVsRmTUZPry42uJNmvHlQJ2KX-enE",
    authDomain: "twitter--clone-743da.firebaseapp.com",
    projectId: "twitter--clone-743da",
    storageBucket: "twitter--clone-743da.appspot.com",
    messagingSenderId: "953625241846",
    appId: "1:953625241846:web:5b96d0606b923e8ed8e4d7",
    measurementId: "G-3KGL1MQBF4"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

//bilgileri firebase in kaydetmesine izin veririz analytics ile

//firestore - realtime database

const db = firebase.firestore();
export default db; //export edilen db istenilen component de kullanılabilir