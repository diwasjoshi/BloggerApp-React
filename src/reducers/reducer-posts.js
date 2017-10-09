import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POST:
            var newPost = action.payload.data[0];
            return { ...state, [newPost.id]: newPost };
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
