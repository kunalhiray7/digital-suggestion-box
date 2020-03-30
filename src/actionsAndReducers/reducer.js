import { ACTIONS } from './actions';

export const DEFAULT_STATE = {
    isLoading: false,
    error: undefined,
    users: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case ACTIONS.ERROR_OCCURRED:
            return {
                ...state,
                error: action.payload
            };
        case ACTIONS.USERS_FETCHED:
            return {
                ...state,
                users: action.payload
            };

        default:
            return {
                ...state
            }
    }
};

export default reducer;
