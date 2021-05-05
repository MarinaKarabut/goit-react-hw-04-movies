import React from 'react';
import { NavLink } from "react-router-dom"
import routes from '../../app/components/App/routes';

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.link}>
                    <NavLink exact to={routes.home} className={styles.link} activeClassName={styles.active}>Home</NavLink> 
                </li>
                <li className={styles.link}>
                    <NavLink  to={routes.movies} className={styles.link} activeClassName={styles.active}>Movies</NavLink>
                </li>
            </ul>
      </nav>
    )
};

export default Navbar;
