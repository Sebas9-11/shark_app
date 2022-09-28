import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, where,getDoc } from 'firebase/firestore';
import Constants  from 'expo-constants'

class Firebase {
    static user = null
    static db
    static auth 
    static storage

    static init() {
        if (!Firebase.app) {
            Firebase.app = initializeApp(Constants.manifest.extra)
            Firebase.db = getFirestore()
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
        
        const data = await Firebase.db.collection('groups').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        console.log(arrayData)
        return await arrayData
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
export const get = Firebase.getDocumentById
export const db = Firebase.db
export const storage = Firebase.storage
// export const auth = Firebase.auth