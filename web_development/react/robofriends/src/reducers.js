import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            //return Object.assign({}, state, {searchField: action.payload}) way 1
            return {...state, searchField: action.payload} //way 2 (a lot shorter)
        default: 
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true}
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}
