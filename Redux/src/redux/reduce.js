import {
    CHANGE_NAME,
    CHANGE_EMAIL,
    CHANGE_SEKOLAH,
    GET_DATA,
    HASIL
} from '../redux/type'

import {combineReducers} from 'redux'

const isState = {
    name : '',
    email: '',
    sekolah : '',
    dataSource:[],
    Hasil: false
}

const Reduce = (state = isState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, name:action.payload}
        case CHANGE_EMAIL:
            return{...state, email:action.payload}
        case CHANGE_SEKOLAH:
            return{...state, sekolah:action.payload}
        case GET_DATA:
            return{...state, dataSource:action.payload}
        case HASIL:
            return{...state, Hasil:action.payload}
        default:
            return state
    }
}

export default combineReducers({Reduce})