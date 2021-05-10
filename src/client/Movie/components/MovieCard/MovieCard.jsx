import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import routes from '../../../../app/components/App/routes';
import Button from '../../../../shared/Button';


import styles from './MovieCard.module.css';

function MovieCard({ idFilm, genres, title, image, popularity, overview, location, history, match, movieId }) {
    const handleGoBack = () => {
        history.push(location?.state?.from || routes.home);
    }

    const genreEl = genres.map(({ id, name }) => (<li key={id} className={styles.genresList}>{name}</li>))
    return (
        <div className={styles.wrapper}>
            <Button onClick={handleGoBack}>Go back</Button>
            <div className={styles.card}>
                <div >
                    <img className={styles.movieCardImg} src={image}
                        alt={title} />
                </div>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>User score: <span>{popularity * 10}%</span></p>
                    <h3 className={styles.title}>Overview</h3>
                    <p className={styles.text}>{overview}</p>
                       
                    <h3 className={styles.title}>Genres</h3>
                        
                    <ul>
                        {genreEl}
                    </ul>
                </div>
            </div>
            <div>
                <ul className={styles.box}>
                    <li className={styles.link}>
                        <NavLink exact to={`/movies/${idFilm}/cast`} className={styles.link}
                            activeClassName={styles.active} >
                            Cast
                        </NavLink>
                    </li>
                    <li className={styles.link}>
                        <NavLink to={`/movies/${idFilm}/reviews`} className={styles.link}
                            activeClassName={styles.active} >
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            

            </div>
        </div>
        
        
    )
}
                    
export default withRouter(MovieCard);

MovieCard.propTypes = {
    title: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    image: PropTypes.string,
    idFilm: PropTypes.number
  
};



