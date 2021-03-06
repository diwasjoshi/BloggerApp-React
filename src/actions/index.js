import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
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

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}?key=${API_KEY}`, values)
        .then(callback());

    return{
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){
    var request = axios.get(`${ROOT_URL}?${id}&key=${API_KEY}`);

    return{
        type: FETCH_POST,
        payload: request
    };
}
