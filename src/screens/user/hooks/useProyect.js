import { useState, useEffect } from 'react'
<<<<<<< HEAD
import { db } from '../../../firebaseConfig'
import * as Auth from 'firebase/auth'

=======
import { firebase } from '../../../services/firebase'
>>>>>>> registro

export const useProyect = () => {
    const [proyect, setProyect] = useState([])
    // const [img, setImage] = useState(null)
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [participants, setParticipants] = useState(null)
<<<<<<< HEAD
    const auth = Auth.getAuth()
    const user = auth.currentUser.uid

=======
    const id = firebase.user
>>>>>>> registro
    useEffect( () => {
        firebase.getDocumentById('groups', 'D95nL3xTc2PTpW3sFwFIvfDiawz1')
        // return onSnapshot
    }, [])

    return proyect 

}