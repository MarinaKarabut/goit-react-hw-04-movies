
import { Component } from 'react';
import { getMovieReviews } from '../../service/movie-service';
import ReviewsList from '../../components/ReviewsList';
import ErrorMessage from '../../components/ErrorMessage';

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
            finally{
                this.setState({ loading: false })
            }
            
        }
    }



    render() {
        const { reviews, error } = this.state
 
        return (
            <>
                {error && <ErrorMessage text={`Something went wrong. Try again!`} />}
        
                <div className={styles.wrapper}>
                    <ReviewsList reviews={reviews}/>
                </div>
            </>
            
            )
    }
    
    
};

export default Reviews;
