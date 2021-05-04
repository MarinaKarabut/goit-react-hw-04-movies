import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../../../images/404.jpeg';

import styles from './MovieListItem.module.css';

function MovieListItem({ id, poster_path, original_title, original_name }) {
    const newImg = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultImg
    const title= original_title ? original_title : original_name
    return (
        <li className={styles.item}>
                <Link to={`/movies/${id}`}>
                <img className={ styles.movieCardImg}
                    src={newImg}
                    alt={title}
                />
                
                </Link>
                <h3 className={styles.movieCardTitle}>{title}</h3>
            </li>
    )
};

export default MovieListItem;
