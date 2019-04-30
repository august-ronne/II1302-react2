/**
 * Root reducer: purpose is to bring together all other reducers
 * examples: posts, auth, ...
 */
import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
    post: postReducer
});
