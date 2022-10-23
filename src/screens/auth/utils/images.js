import * as ImagePicker from 'expo-image-picker'
import { firebase } from '../../../services/firebase'

export const pickImage = async () => {

    try {
        return await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })
    } catch (error) {
        console.log(error.message)
    }   
}

export const upload = async (uri) => {
    try {
        const response = await fetch(uri)
        const blob = await response.blob()
        const filename = uri.substring(uri.lastIndexOf('/') + 1)
        return firebase.uploadImage(blob,filename)
    } catch (error) {
        console.log(error.message)
    }
}