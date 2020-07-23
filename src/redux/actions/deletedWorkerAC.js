import {DELETED_WORKER} from '../../constants';

const deletedWorkerAC = id => ({type: DELETED_WORKER, payload: id});

export default deletedWorkerAC;