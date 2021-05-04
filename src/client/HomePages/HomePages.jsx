import { Component } from "react";
import { trendMovies} from '../Movie/service/movie-service';


import MovieList from "../Movie/components/MovieList/MovieList";

import styles from './HomePage.module.css'




class HomePage extends Component {
    state = {
        movies: [],
        loading: false,
        error:null
    };

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    async componentDidUpdate() {
        const { loading } = this.state;
        if (loading) {
            try {
            const { data } = await trendMovies()
            const newMovies = data.results

            this.setState(({ movies}) => {
                return {
                    movies: [...movies, ...newMovies],
                    loading: false  
                }
                
            }) 
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
        const { movies } = this.state
        return (
            <>
                <h1 className={styles.title}>Trending today</h1>
                <div className={styles.wrapper}>
                    <MovieList movies={movies} />
                </div>
                
            </>
                    
        )
    }
    
    
}
 
export default HomePage;