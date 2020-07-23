import {ADD_WORKERS} from '../../constants';

const addWorkers = workers => ({type: ADD_WORKERS, payload: workers});

const addWorkersAsync = (workers) => {
    return dispatch => (dispatch(addWorkers(workers)))
};

export default addWorkersAsync;