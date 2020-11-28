import * as actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const photosReducer = (photoState = { isLoading: false, photos: [], errMess: null }, action) => {
    switch (action.type) {
        case actionTypes.PHOTOS_LOADING:
            return {
                ...photoState,
                isLoading: true,
                errMess: null,
                photos: []
            }
        case actionTypes.LOAD_PHOTOS:
            return {
                ...photoState,
                isLoading: false,
                errMess: null,
                photos: action.payload
            }
        case actionTypes.PHOTOS_FAILED:
            return {
                ...photoState,
                isLoading: false,
                errMess: action.payload,
                photos: []
            }
        default:
            return photoState;
    }
}
const commentReducer = (commentState = {
    isLoading: true, comments: [], isModalOpen: false,
    modalMsg: ""
}, action) => {
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            let comments = [];
            for (let key in action.payload) {
                comments.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...commentState,
                isLoading: false,
                comments: comments,
                isModalOpen: false,
                modalMsg: "",
            };
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: [],
                isModalOpen: false,
                modalMsg: "",

            };

        case actionTypes.ADD_COMMENT:
            console.log(action.payload);
            if (action.payload === 200) {
                return {
                    ...commentState,
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Comment Submitted"
                }
            } else {
                return {
                    ...commentState,
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Something Went Wrong! Comment Again"
                }
            };
        case actionTypes.UPDATE_COMMENT:
            return {
                ...commentState,
                isModalOpen: false,
                modalMsg: "",
            }
        default:
            return commentState;
    }

}

export const Reducer = combineReducers({
    photos: photosReducer,
    comments: commentReducer,

});
