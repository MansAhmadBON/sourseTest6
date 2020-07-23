import React from "react";
import {connect} from 'react-redux';
import {deletedWorkerAC} from '../redux/actions';

const ListItem = ({itemText, id, deletedWorker}) => {
    const handleClick = (e) => {
        deletedWorker(Number(e.target.id))
    };

    return (
        <li className="list__item">
            <p className="list__text">{itemText}</p>
            <button className="btn btn--remove" id={id} onClick={handleClick}>Удалить сотрудника</button>
        </li>
    )
};

const mapDispatchToProps = dispatch => ({
    deletedWorker: id => dispatch(deletedWorkerAC(id))
});

export default connect(
    null,
    mapDispatchToProps
)(ListItem);