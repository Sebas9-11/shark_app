import { useState, useEffect } from 'react'
import { firebase } from '../../../services/firebase'
import img from '../../../../assets/group.png'

export const useProyect = () => {
    const [proyect, setProyect] = useState(null)
    const [image, setImage] = useState(null)

    async function getProyect() {
        try {
            const [ response ] = await firebase.getDocumentById('groups',firebase.user)
            const picture  =  response.image !== '' ? {uri: response.image} : img
            setImage(picture)
            setProyect(response) 
        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect( () => {
        getProyect()
    }, [])

    return [proyect, image] 
}