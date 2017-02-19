import axios from 'axios'

export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
const ROOT_URL = 'https://simpletodoapi.herokuapp.com'

export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/post`);
    return {
        type: FETCH_POST,
        payload: request
    }

}


export function createPost(postprops){
    const request = axios.post(`${ROOT_URL}/post`,postprops)

    return {
        type: CREATE_POST,
        payload: request
    }

    // we wont write any reducer logic that handles this as we dont
    //  need to do anything with the data returned after this post request
}

export function getPost(id) {
    const request = axios.post(`${ROOT_URL}/post/${id}`);

    return {
        type: GET_POST,
        payload: request
    }

}


export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/post/${id}`);

    return {
        type: DELETE_POST,
        payload: request
    }
}
