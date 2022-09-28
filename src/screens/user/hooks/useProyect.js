import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../../../firebaseConfig'


export const useProyect = () => {
    const [proyect, setProyect] = useState([])
    // const [img, setImage] = useState(null)
    // const [title, setTitle] = useState('')
    // const [description, setDescription] = useState('')
    // const [participants, setParticipants] = useState(null)

    useEffect( () => {
        const proyectos = collection(db, 'proyectos')
        const q = query(proyectos, orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setProyect(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                }))
            )
        })
        return unsubscribe
    }, [])

    return proyect 

}