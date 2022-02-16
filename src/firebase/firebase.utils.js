import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const config = {
    apiKey: "AIzaSyA8IIxtOT3-NUa7iJK0EwUaTkoQKBWapCA",
    authDomain: "crwn-db-7196d.firebaseapp.com",
    projectId: "crwn-db-7196d",
    storageBucket: "crwn-db-7196d.appspot.com",
    messagingSenderId: "752385569793",
    appId: "1:752385569793:web:8c0c3382cf828d6422fc00",
    measurementId: "G-M8W2J70CWQ"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        try {
            const { displayName, email } = userAuth
            const createdAt = new Date()

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
