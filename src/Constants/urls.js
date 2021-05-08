export const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodC'

export const token = window.localStorage.getItem('token')
export const user = window.localStorage.getItem('user');


export const axiosConfig = { headers: { auth: token } }
