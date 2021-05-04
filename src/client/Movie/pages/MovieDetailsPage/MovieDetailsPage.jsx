
import { Component } from 'react';
import { getOneMovie } from '../../service/movie-service';
import {Route } from 'react-router-dom';


import MovieCard from '../../components/MovieCard';
import ReviewsPage from '../../pages/ReviewsPage';
import CastPage from '../../pages/CastPage'; 


import defaultImg from '../../../../images/404.jpeg'

class MovieDetailsPage extends Component {
    state = {
        movie: {
            title: '',
            image: '',
            popularity: '',
            overview: '',
            genres: [],
            idFilm: null
        },
        // cast: [],
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
    }

    async componentDidUpdate() {
        const { loading } = this.state;
        const { match } = this.props;
        const { movieId } = match.params;
        if (loading) {
            try {
                const { data } = await getOneMovie(movieId)
                
                this.setState({
                    movie: data,
                    loading: false
                })
            }
            catch (error) {
                this.setState({
                    loading: false,
                    error
                })
            }

        //     const { data } = await getMovieCast(movieId)
        //          this.setState({
        //             cast: data.cast,
        //             loading: false
        //          })
        //     console.log(this.state.cast);
        }
    }

   
    render() {
        const {movie} = this.state
        const newImg = movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: defaultImg
        return (
            <>
            <MovieCard
                title={movie.title}
                popularity={movie.vote_average}
                overview={movie.overview}
                genres={movie.genres}
                image={newImg}
                />
            <Route path="/movies/:movieId" component={CastPage} />
            <Route path="/movies/:movieId" component={ReviewsPage} />
            </>
        )
    }
    
}
           
        
export default MovieDetailsPage;



