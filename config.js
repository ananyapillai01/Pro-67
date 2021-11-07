import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyDQ-O2UjB9fl44l_XvsnX5sjNpdI24iAVY",
        authDomain: "voting-app-38989.firebaseapp.com",
        projectId: "voting-app-38989",
        storageBucket: "voting-app-38989.appspot.com",
        messagingSenderId: "371462069829",
        appId: "1:371462069829:web:f83b0844be3a78c6c74d2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();