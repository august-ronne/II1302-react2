/**
 * Here we will make our requests to the backend
 * Component --(call)--> action --(trigger)--> reducer
 */
import axios from "axios";
import { GET_POSTS, ADD_POST, UPDATE_POST, POSTS_LOADING } from "./types";

/* dispatch: comes from Thunk, enables asynchronous request */
export const getPosts = () => dispatch => {
    dispatch(setPostsLoading());
    axios
        .get("/api/posts")
        .then(res => dispatch({ type: GET_POSTS, payload: res.data }));
};

export const addPost = post => dispatch => {
    axios
        .post("/api/posts", post)
        .then(res => dispatch({ type: ADD_POST, payload: res.data }));
};

export const updatePost = id => dispatch => {
    axios
        .put(`/api/posts/${id}`)
        .then(res => dispatch({ type: UPDATE_POST, payload: id }));
};

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    };
};
