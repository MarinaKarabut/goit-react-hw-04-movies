import React from 'react';
import PropTypes from 'prop-types';
import MovieListItem from '../MovieListItem';

import styles from './MovieList.module.css';

function MovieList({ movies }) {
    const movieElement = movies.map(movie => (<MovieListItem key={movie.id} {...movie}/>)
        )
    return (
        
            <ul className={styles.galleryMovies}>
                {movieElement}
            </ul>
    )
};

export default MovieList;


MovieList.defaultProps = {
    movies: [],
}


MovieList.propTypes = {
    movies: PropTypes.array,
  }
