import API from '../axios'

export const logIn =(fromData)=>API.post('/auth/login',fromData)
export const signUp =(fromData)=>API.post('/auth/register',fromData)
