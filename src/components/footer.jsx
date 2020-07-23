import React, {useState} from "react";
import {connect} from 'react-redux';
import {addNewWorker} from '../redux/actions';

const Footer = ({addNewWorker}) => {
    const [firstNameWorker, setFirstNameWorker] = useState('');
    const [lastNameWorker, setLastNameWorker] = useState('');

    const handleClick = () => {
        if(firstNameWorker && lastNameWorker){
            const worker = {
                id: Date.now(),
                first_name: firstNameWorker,
                last_name: lastNameWorker,
            };
            addNewWorker(worker);
            setFirstNameWorker('');
            setLastNameWorker('');
        } else {
            alert('Заполните все поля')
        }
    };

    const handleSubmit = e => e.preventDefault();

    return (
        <footer>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inp_firstName">Имя:</label>
                <input
                    onChange={e => setFirstNameWorker(e.target.value)}
                    value={firstNameWorker}
                    id="inp_firstName"
                />
                <label htmlFor="inp_lastName">Фамилия:</label>
                <input
                    onChange={e => setLastNameWorker(e.target.value)}
                    value={lastNameWorker}
                    id="inp_lastName"
                />
                <button className="btn btn-add" onClick={handleClick}>Добавить нового сотрудника</button>
            </form>
        </footer>
    )
};

const mapDispatchToProps = dispatch => ({
    addNewWorker: newWorker => dispatch(addNewWorker(newWorker))
});

export default connect(
    null,
    mapDispatchToProps
)(Footer);