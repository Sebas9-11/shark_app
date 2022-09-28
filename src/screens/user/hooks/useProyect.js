import { useState, useEffect } from 'react'
import { onSnapshot } from "firebase/firestore"
import { firebase } from '../../../services/firebase'

export const useProyect = () => {
    const [proyect, setProyect] = useState()

    const getProyect = async () => {
        const id = firebase.user
        const [response] = await firebase.getDocumentById('groups',id)
        console.log(response)
        setProyect(response[0])
    }

    useEffect( () => {
        getProyect()
    }, [])

    return proyect 
}