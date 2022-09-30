import { useState, useEffect } from 'react'
import { firebase } from '../../../services/firebase'

export const useJudges = () => {
    const [judgesState, setJudgesState] = useState()

    async function getJudges() {
        try {
            const [ response ] = firebase.group
            const { judges } = response
            setJudgesState(judges)
        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect( () => {
        getJudges()
    }, [])

    return [judgesState] 
}