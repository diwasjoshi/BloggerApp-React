import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';
const API_KEY = '234';

export function fetchPosts(){
    var url = `${ROOT_URL}?key=${API_KEY}`;
    var request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(values){
    const request = axios.post(`${ROOT_URL}?key=${API_KEY}`, values);

    return{
        type: CREATE_POST,
        payload: request
    };
}
