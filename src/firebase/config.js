import firebase from "firebase/compat/app";

import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvRw1KD6RRX_9olQgc4RhrTQbvVOz717o",
  authDomain: "firegram-42a59.firebaseapp.com",
  projectId: "firegram-42a59",
  storageBucket: "firegram-42a59.appspot.com",
  messagingSenderId: "82162708292",
  appId: "1:82162708292:web:f0b7bd263f29b817317111",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
