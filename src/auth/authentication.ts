import { firebaseAuth, googleAuthProvider } from '../db/firebase'
import {UserModel} from '../models'

export function signupWithGoogle(): Promise<UserModel | any>{
    return new Promise((resolve, reject) => {
        firebaseAuth.signInWithPopup(googleAuthProvider()).then(result => {
            if(result.user === null) return reject('USER IS EMPTY')

            const user = {
                userId: result.user.uid,
                displayName: result.user.displayName || 'NA',
                email: result.user.email || 'NA',
                photoUrl: result.user.photoURL || 'NA'
            }
            return resolve(user)
        }).catch(e => reject(e))
    })
}

export function signOut(): Promise<any>{
    return new Promise((resolve, reject) => {
        firebaseAuth.signOut()
            .then(() => resolve(true))
            .catch(error => reject(error));
    })
}