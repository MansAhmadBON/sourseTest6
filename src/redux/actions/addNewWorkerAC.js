import {ADD_NEW_WORKER} from '../../constants';

const addNewWorker = (newWorker) => ({type: ADD_NEW_WORKER, payload: newWorker});

export default addNewWorker;