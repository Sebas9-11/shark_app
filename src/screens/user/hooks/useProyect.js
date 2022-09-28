import { useState, useEffect } from 'react'
import { firebase } from '../../../services/firebase'

export const useProyect = () => {
    const [proyect, setProyect] = useState([])
    // const [img, setImage] = useState(null)
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [participants, setParticipants] = useState(null)
    const id = firebase.user
    useEffect( () => {
        firebase.getDocumentById('groups', id)
        // return onSnapshot
    }, [])

    return proyect 

}