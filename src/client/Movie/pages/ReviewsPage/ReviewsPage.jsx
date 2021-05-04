
import { Component } from 'react';
import { getMovieReviews} from '../../service/movie-service';

import styles from './ReviewsPage.module.css'

class Reviews extends Component {
    state = {
        reviews: [],
        loading: false,
        error: null
    }
    


    componentDidMount() {
        this.setState({
            loading:true
        })
    }

    async componentDidUpdate() {
        const { loading } = this.state;
        if (loading) {
            try {
                const { match } = this.props;
                const { movieId } = match.params;
                const { data } = await getMovieReviews(movieId)
                this.setState({
                    reviews: data.results,
                    loading: false
                }
                )

            }
            catch (error) {
                this.setState({
                    loading: false,
                    error
                })
            }
            
        }
    }



    render() {
        const { reviews } = this.state
    
        const reviewEl = reviews.map(review => (
            <li key={review.id}>
                <h2 className={ styles.title}>Author: {review.author }</h2>
                    <p>{ review.content}</p>
            </li>
        )).filter(elem => elem).slice(0, 5)
        
        return (
        
                <div className={ styles.wrapper}>
                <ul>
                    {reviews.length ? (reviewEl): (<p className={styles.notification}>We don`t have any reviews for this movie.</p>)}
        
                    </ul>

                </div>
            )
    }
    
    
};

export default Reviews;
