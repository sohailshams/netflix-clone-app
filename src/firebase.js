import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBlX3n1oZKUyJOIvXhb0AzAPkg_kJ-66sY',
  authDomain: 'netflix-clone-app-93fe9.firebaseapp.com',
  projectId: 'netflix-clone-app-93fe9',
  storageBucket: 'netflix-clone-app-93fe9.appspot.com',
  messagingSenderId: '767016958827',
  appId: '1:767016958827:web:12b600d71bb8d9e77baa2e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
