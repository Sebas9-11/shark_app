import { useState, useEffect } from 'react'
import imgs from '../../../../assets/favicon.png'

export const useProyect = ({ id }) => {
    const [id, setId] = useState(id)
    const [proyect, setProyect] = useState(null)
    const [img, setImage] = useState(imgs)
    const [title, setTitle] = useState('Proyecto 1')
    const [description, setDescription] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl tincidunt nunc, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl tincidunt nunc, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl tincidunt nunc, eget aliquam nisl nisl sit amet nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl tincidunt nunc, eget aliquam nisl nisl sit amet nisl.
    `)
    const [participants, setParticipants] = useState([
        {name: 'Juan Orozco'},
        {name: 'Carlos Angulo'},
        {name: 'Juana Piñeros'},
    ])

    const getProyect = async () => {
        try {
            const proyect = await getProyectById(id)
            setProyect(proyect)
            setParticipants(proyect.participants)
            // setLoading(false)
        } catch (error) {
            // setError(error)
        }
    }

    useEffect(() => {
        getProyect()
    }, [id])

    return { proyect, img, title, participants, description }

}