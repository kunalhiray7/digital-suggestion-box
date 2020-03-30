import {paths} from "../common/constants";
import axios from 'axios';

export const config = {
    serverUrl: 'http://localhost:8000'
};

export const http = axios.create({
    baseURL: config.serverUrl,
    timeout: 5000,
});

export const get = ({path, responseType} = {}) => {
    return http.get(path, {responseType: responseType})
        .then(response => Promise.resolve(response.data))
        .catch(error => {
            return Promise.reject(error);
        });
};

export const post = ({path, payload} = {}) => {
    return http.post(path, payload)
        .then(response => {
            const responseData = {...response.data, headers: response.headers};
            return Promise.resolve(responseData);
        })
        .catch(error => {
            return Promise.reject(error);
        });
};

export const ACTIONS = {
    LOADING: 'LOADING',
    ERROR_OCCURRED: 'ERROR_OCCURRED',
    PROFILE_FETCHED: 'PROFILE_FETCHED',
    USERS_FETCHED: 'USERS_FETCHED',
};

function loading(isLoading) {
    return {
        type: ACTIONS.LOADING,
        payload: isLoading
    }
}

function errorOccurred(error) {
    return {
        type: ACTIONS.ERROR_OCCURRED,
        payload: error
    }
}

function profileFetched(profile) {
    return {
        type: ACTIONS.PROFILE_FETCHED,
        payload: profile
    }
}

export function authenticate(credentials, history) {
    return dispatch => {
        get({
            path: `/authentications?username=${credentials.username}&password=${credentials.password}`
        }).then(response => {
            dispatch(profileFetched(response[0]));
            history.push(paths.DASHBOARD);
            dispatch(loading(false));
        }, (error) => {
            dispatch(loading(false));
            dispatch(errorOccurred(error.message));
        });
    }
}

function usersFetched(books) {
    return {
        type: ACTIONS.USERS_FETCHED,
        payload: books
    }
}

export function fetchUsers() {
    return dispatch => {
        get({
            path: `/users`
        }).then(response => {
            dispatch(usersFetched(response));
            dispatch(loading(false));
        }, (error) => {
            dispatch(loading(false));
            dispatch(errorOccurred(error.message));
        });
    }
}

export function addSuggestion(suggestion, history) {
    return dispatch => {
        post({
            path: `/suggestions`,
            payload: suggestion
        }).then(response => {
            history.push(paths.DASHBOARD);
            dispatch(loading(false));
        }, (error) => {
            dispatch(loading(false));
            dispatch(errorOccurred(error.message));
        });
    }
}
