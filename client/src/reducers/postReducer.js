/**
 * Where the actual state is going to live
 * Here we will evaluate action types
 */
import {
    GET_POSTS,
    ADD_POST,
    UPDATE_POST,
    POSTS_LOADING
} from "../actions/types";

const initialState = {
    posts: [],
    mostRecentPostBody: "",
    loading: false
};

/* arg action is an object, and it will have a type (action.type) */
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                mostRecentPostBody: action.payload[0].body,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                mostRecentPostBody: action.payload.body
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: [
                    state.posts.find(post => post._id === action.payload),
                    ...state.posts.filter(post => post._id !== action.payload)
                ],
                mostRecentPostBody: state.posts.find(post => post._id === action.payload).body
            };  
        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
