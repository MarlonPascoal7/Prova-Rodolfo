import axios from 'axios';
import {UserDto} from '../interfaces/UserDto'

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers:{
        'Content-Type': 'application/json'
    }
})

export const CreateUser = (userDTO: UserDto) =>{
    return apiClient.post('/User', userDTO)
}