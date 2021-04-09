import { SET_POST_DATA, DELETE_POST_DATA } from '../constant';

const initialState = {
    posts: []
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_DATA:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case DELETE_POST_DATA:
            let array = [...state.posts]
            array.splice(action.payload, 1)
            return {
                ...state,
                posts: array
            }
        default:
            return state;
    }
};

export default userReducer;
