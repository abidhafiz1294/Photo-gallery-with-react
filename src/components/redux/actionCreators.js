import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadPhotos = photos => ({
    type: actionTypes.LOAD_PHOTOS,
    payload: photos,
})

export const photosLoading = () => ({
    type: actionTypes.PHOTOS_LOADING
})

export const photosFailed = (errMess) => ({
    type: actionTypes.PHOTOS_FAILED,
    payload: errMess,
})

export const fetchPhotos = () => {
    return dispatch => {
        dispatch(photosLoading());

        axios.get('https://photo-gallery-project-1a9da.firebaseio.com/' + 'photos.json')
            .then(response => {
                dispatch(loadPhotos(response.data));

            })

            .catch(error => dispatch(photosFailed(error.message)))


            ;


    }
}

export const addComment = (imageId, rating, author, comment) => dispatch => {
    const newComment = {
        imageId: imageId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    axios.post('https://photo-gallery-project-1a9da.firebaseio.com/comments.json', newComment)

        .then(response => {
            dispatch(commentStatus(response.status));

        })
}

export const commentStatus = (commentStatus) => ({
    type: actionTypes.ADD_COMMENT,
    payload: commentStatus,
})

export const commentLoading = () => ({
    type: actionTypes.COMMENT_LOADING
})

export const loadComments = comments => ({
    type: actionTypes.LOAD_COMMENTS,
    payload: comments
})
export const updateComments = () => ({
    type: actionTypes.UPDATE_COMMENT,
})
export const fetchComments = () => dispatch => {
    dispatch(commentLoading());

    axios.get('https://photo-gallery-project-1a9da.firebaseio.com/' + 'comments.json')
        .then(response => {
            dispatch(loadComments(response.data))



        })

}
