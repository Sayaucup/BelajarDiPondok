// memanggil file type
import {
    CHANGE_NAME,
    CHANGE_EMAIL,
    CHANGE_SEKOLAH,
    GET_DATA,
    HASIL
} from '../redux/type'


export const Changename = payload => {
    return {
        type: CHANGE_NAME,
        payload: payload
    }
}
export const Changeemail = payload => {
    return {
        type: CHANGE_EMAIL,
        payload: payload
    }
}
export const Changesekolah = payload => {
    return {
        type: CHANGE_SEKOLAH,
        payload: payload
    }
}
export const getData = payload => {
    return {
        type: GET_DATA,
        payload: payload
    }
}
export const hasil = payload => {
    return {
        type: HASIL,
        payload: payload
    }
}