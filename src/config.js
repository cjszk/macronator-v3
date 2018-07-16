export const API_BASE_URL = process.env.NODE_ENV === 'production'
    ? 'https://macronator.herokuapp.com/api'
    : 'http://localhost:8080/api';

//https://macronator.herokuapp.com

export const CLIENT_ORIGIN = 
    process.env.CLIENT_ORIGIN || 'http://localhost:3000'


    