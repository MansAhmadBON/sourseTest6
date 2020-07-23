import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {addWorkersAsync} from '../redux/actions';
import {Main, EmployeesList} from './index';


const App = ({workers, addWorkers}) => {

    useEffect(() => {
        fetch(`https://reqres.in/api/users?per_page=12`)
            .then(res => res.json())
            .then(({data}) => addWorkers(data));
    }, []);

    return (
        <div>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route path='/employees' render={() => <EmployeesList listData={workers}/> }/>
            </Switch>
        </div>
    )
};

const mapStateToProps = state => ({
    workers: state.workers
});

const mapDispatchToProps = dispatch => ({
    addWorkers: workersList => dispatch(addWorkersAsync(workersList))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);