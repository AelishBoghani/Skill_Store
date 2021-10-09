// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseApp=firebase.initializeApp({
   
  apiKey: "AIzaSyCouYrRtnUmPevrOR7D787gnDzGMpOIfwo",
  authDomain: "skillstore-eb2b7.firebaseapp.com",
  projectId: "skillstore-eb2b7",
  storageBucket: "skillstore-eb2b7.appspot.com",
  messagingSenderId: "923853179148",
  appId: "1:923853179148:web:661b7ce673ea0979ff6129",
  measurementId: "G-T612H29VSM"
});

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
    
export {auth,storage};
export default db;