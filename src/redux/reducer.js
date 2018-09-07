import * as auth from '../services/auth.js';
const initialState = {
    postList: [],
    search: '',
    username: '',
    password: '',
    profile_url: '',
    myPosts: true
}

const LOGIN             = 'LOGIN',
      GET_USERNAME      = 'GET_USERNAME',
      GET_PASSWORD      = 'GET_PASSWORD',
      GET_URL           = 'GET_URL',
      GET_SEARCH_INPUT  = 'GET_SEARCH_INPUT',
      REGISTER          = 'REGISTER';


export default function reducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {...state}
        case GET_USERNAME:
            return {...state, username: action.payload}
        case GET_PASSWORD:
            return {...state, password: action.payload}
        case GET_URL:
            return {...state, profile_url: action.payload}
        case GET_SEARCH_INPUT:
            return {...state, search: action.payload}
        case REGISTER:
            return {...state}
        default:
            return {...state}
    }
}

export function login() {
    return {
        type: LOGIN,
    }
}

export function handleUserName(username) {
    return {
        type: GET_USERNAME,
        payload: username
    }
}
export function handlePassword(password) {
    return {
        type: GET_PASSWORD,
        payload: password
    }
}
export function handleProfileUrl(profile_url) {
    return {
        type: GET_URL,
        payload: profile_url
    }
}
export function handleSearch(search) {
    return {
        type: GET_SEARCH_INPUT,
        payload: search
    }
}
export function register(username, password, profile_url) {
    console.log(username, password);
    
    return {
        type: REGISTER,
        payload: auth.register(username, password, profile_url)
    }
}
