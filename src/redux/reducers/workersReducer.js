import {ADD_NEW_WORKER, ADD_WORKERS, DELETED_WORKER} from '../../constants';

const initialState = [];

const workersReducer = (state = initialState, {type, payload}) => {
    console.log('type', type);
    console.log('payload', payload);

    switch (type) {
        case ADD_NEW_WORKER:
            return [payload, ...state];
        case ADD_WORKERS:
            return [...payload];
        case DELETED_WORKER:
            return [...state].filter(elem => elem.id !== payload);
        default: return state
    }
};

export default workersReducer;