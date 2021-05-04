import React from 'react';
import { withRouter,NavLink } from 'react-router-dom';
import routes from '../../../../routes';

import styles from './MovieCard.module.css';

function MovieCard({ genres, title, image, popularity, overview, location, history, match }) {
    console.log(match);
    const handleGoBack = () => {
        history.push(location?.state?.from || routes.home);
    }

    const genreEl = genres.map(({ id, name }) => (<li key={id} className={styles.genresList}>{name}</li>))
    return (
        <div className={styles.wrapper}>
            <button className={styles.button} type="button" onClick={handleGoBack}>  Go back</button>
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
                        <NavLink className={styles.link}
                            activeClassName={styles.active} exact to={
                                {
                                    pathname: `${match.url}/cast`,
                                    state: { from: location },
                                }}>
                            Cast
                            </NavLink>
                    </li>
                    <li className={styles.link}>
                        <NavLink className={styles.link}
                            activeClassName={styles.active} to={
                                {
                                    pathname: `${match.url}/reviews`,
                                    state: { from: location },
                                }}>
                            Reviews
                            </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        
        
    )
}
                    
export default withRouter(MovieCard);



