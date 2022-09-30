import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getAuth } from 'firebase/auth'
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref, uploadBytes  } from 'firebase/storage'
import Constants  from 'expo-constants'

class Firebase {
    static user = null
    static db
    static auth 
    static storage
    static app
    static group

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
                }).then( async () => {
                    Firebase.group = await Firebase.getGroups(true)
                })
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
        const response = []
        const q = query(collection(Firebase.db, collectionName), where("id", "==", id))
        const querySnapshot = await getDocs(q)
        .catch((error) => {
            console.log(error.message)
        })

        querySnapshot.forEach((doc) => {
            response.push(doc.data())
        })
        return response
    }   

    static async getGroups(onlyOne) {
        const response = []
        console.log(Firebase.user)
        let q
        if (onlyOne)    {
            q = query(collection(Firebase.db, 'groups'),where("id", "==", Firebase.user))
        } else {
            q = query(collection(Firebase.db, 'groups'))
        }

        const querySnapshot = await getDocs(q)
        .catch((error) => {
            console.log(error.message)
        })

        querySnapshot.forEach((doc) => {
            response.push(doc.data())
        })
        return response
    }

    static async uploadImage(blop,name) {
        const allowedExtensions = ['jpg', 'jpeg', 'png']
        const extension = name.split('.').pop()

        if (!allowedExtensions.includes(extension)){
            throw new Error('Extension no permitida')
        }

        const reference = ref(Firebase.storage, `groups_images/${name}`)
        await uploadBytes(reference, blop)
        return getDownloadURL(reference).then((downloadURL) => downloadURL)
    }
}

Firebase.init()
export const firebase = Firebase
export const db = Firebase.db
export const storage = Firebase.storage
// export const auth = Firebase.auth