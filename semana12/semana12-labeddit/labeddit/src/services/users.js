import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
            alert('Error trying to login')
            console.log(err.message)

        })
}

export const signUp = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(history)
        })
        .catch((err) => {
            alert('Error trying to sign up')
            console.log(err.message)
        })
}