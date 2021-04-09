import { SET_USER_DATA, SET_POST_DATA, DELETE_POST_DATA } from "../constant";

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data
    }
}
export const createPost = (data) => {
    return {
        type: SET_POST_DATA,
        payload: data
    }
}

export const deletePost = (data) => {
    return {
        type: DELETE_POST_DATA,
        payload: data
    }
}