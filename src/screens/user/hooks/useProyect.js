import { useState, useEffect } from 'react'
import { firebase } from '../../../services/firebase'

export const useProyect = () => {
    const [proyect, setProyect] = useState(null)
    const [image, setImage] = useState('asset:/favicon.png')

    async function getProyect() {
        try {
            const response = await firebase.getDocumentById('groups',firebase.user)
            console.log(response)
            setProyect(response[0]) 
        } catch (error) {
            console.log(error.message)
        }

    }

    const getImage = async () => {
        try {
            const response = await firebase.getImage()
            setImage(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect( () => {
        getProyect()
        getImage()
    }, [])

    return [proyect, image] 
}