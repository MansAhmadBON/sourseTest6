import React from "react";
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <nav className="header-nav">
            <ul className="header-nav__list">
                <li className="header-nav__item">
                    <Link to='/'>Главная</Link>
                </li>
                <li className="header-nav__item">
                    <Link to='/employees'>Сотрудники</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;