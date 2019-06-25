import {firebaseConfigs} from '../config/secrets'
import firebase from 'firebase'
firebase.initializeApp(firebaseConfigs)

const db = firebase.database()

export const firebaseAuth = firebase.auth();

export function googleAuthProvider() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return provider
}

export default db