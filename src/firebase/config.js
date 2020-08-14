import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBEjhtvpgDjLE-FYqg1nOg1JgwQPz1AUag",
    authDomain: "fire-imgzella.firebaseapp.com",
    databaseURL: "https://fire-imgzella.firebaseio.com",
    projectId: "fire-imgzella",
    storageBucket: "fire-imgzella.appspot.com",
    messagingSenderId: "147440191239",
    appId: "1:147440191239:web:0387025f26e7c4633be7a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timestamp};

