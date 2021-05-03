export const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodC'

const token = window.localStorage.getItem('token')

export const axiosConfig = { headers: { Authorization: token } }