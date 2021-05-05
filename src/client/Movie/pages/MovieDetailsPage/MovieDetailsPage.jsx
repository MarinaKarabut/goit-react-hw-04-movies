
import { Component} from 'react';
import { Route} from "react-router-dom"
import { getOneMovie } from '../../service/movie-service';
import routes from '../../../../app/components/App/routes';

import defaultImg from '../../../../images/404.jpeg'

import ErrorMessage from '../../components/ErrorMessage';
import MovieCard from '../../components/MovieCard';
import CastPage from '../CastPage';
import ReviewsPage from '../ReviewsPage';



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
            finally{
                this.setState({ loading: false })
            }

        }
    }

   
    render() {
        const {movie, error} = this.state
        const newImg = movie.poster_path? `https://image.tmdb.org/t/p/w500${movie.poster_path}`: defaultImg
        return (
            <>
                {error && <ErrorMessage text={`Something went wrong. Try again!`} />}
                {!error && (<MovieCard
                    title={movie.title}
                    popularity={movie.vote_average}
                    overview={movie.overview}
                    genres={movie.genres}
                    image={newImg}
                    idFilm={movie.id}
                />)}



                <Route path={routes.cast} render={(props) => <CastPage {...props}/>} />
                <Route path={routes.reviews} render={(props) => <ReviewsPage {...props} />} />

               
                

            

            </>
        )
    }
    
}
           
        
export default MovieDetailsPage;



