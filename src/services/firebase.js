import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import Constants  from 'expo-constants'

class Firebase {
    static user = null
    static db
    static auth 
    static storage
    static app

    static init() {
        if (!Firebase.app) {
            Firebase.app = initializeApp(Constants.manifest.extra)
            Firebase.db = getFirestore(Firebase.app)
            Firebase.auth = getAuth()
            Firebase.storage = getStorage()
        }
    }

    static async signIn(email, password) {
        if (email && password) {
            return await signInWithEmailAndPassword(Firebase.auth, email, password)
                .then( userCredential => {
                    Firebase.user = userCredential.user.uid
                    return Firebase.user
                } 
            )
        }
        throw new Error('Verifique los campos')
    }

    static async signUp(email, password) {
        if (email && password) {
            return await createUserWithEmailAndPassword(Firebase.auth, email, password)
                .then( userCredential => {
                    Firebase.user = userCredential.user.uid
                    return Firebase.user
                })
                .catch( (error) => {
                    throw new Error('Usuario registrado')
                    }
                )
        }
        throw new Error('Verifique los campos')
    }

    static async signOut() {
        return await signOut(Firebase.auth)
            .then(() => {
                console.log('saliste')
                Firebase.user = null
            })
            .catch((error) => {
                console.log(error.message)
            }
        )
    }

    static async addDocument(collectionName, data) {
        if (Firebase.user) {
            return await addDoc(collection(Firebase.db, collectionName), data)
                .then( docRef => {
                    return docRef.id
                })
                .catch((error) => {
                    console.log(error.message)
                }
            )
        }
        throw new Error('Error with credentials')
    }

    static async getDocumentById(collectionName, id) {
        const q = query(collection(Firebase.db, collectionName), where("id", "==", id))

        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data())
        })
    }
      


    // static getDocumentById(collectionName, id) {
    //     const response = []

    //     if (Firebase.user) {
    //         const ref = collection(Firebase.db, collectionName)
    //         const q = query(ref, where('id', '==', id))
    //         console.log(q)
    //         const onSnapshot = (q, (querySnapshot) => {
    //             querySnapshot.forEach((doc) => {
    //                 response.push(doc.data())
    //             })
    //         })

    //         return [response, onSnapshot]
    //     }
    //     throw new Error('Error with credentials')
    // }
}

Firebase.init()
export const firebase = Firebase
export const db = Firebase.db
export const storage = Firebase.storage
// export const auth = Firebase.auth