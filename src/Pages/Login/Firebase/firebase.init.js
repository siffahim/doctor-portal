import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';


const authenticationFirebase = () => {
    initializeApp(firebaseConfig);
}


export default authenticationFirebase;