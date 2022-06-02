import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzRWptZ8k5f2ce76yl19UoHJIbyrhKRso",
  authDomain: "college-community-11bfa.firebaseapp.com",
  projectId: "college-community-11bfa",
  storageBucket: "college-community-11bfa.appspot.com",
  messagingSenderId: "995503808878",
  appId: "1:995503808878:web:4faa7dd8c3d22b198d217f",
  measurementId: "G-BCXKGSJNWN"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDG2mnrOkS0tafAjU1SqzXfaJS7AMKMSMg",
//   authDomain: "quora-clone-akky.firebaseapp.com",
//   projectId: "quora-clone-akky",
//   storageBucket: "quora-clone-akky.appspot.com",
//   messagingSenderId: "902318949999",
//   appId: "1:902318949999:web:8df2b97a20eece0209ef9a",
//   measurementId: "G-LJBYVXT22Z",
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
