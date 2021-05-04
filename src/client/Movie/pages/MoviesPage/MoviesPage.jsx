
import { Component } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../service/movie-service';
import MovieList from '../../components/MovieList';





class MoviesPage extends Component {
    state = {
        movies: [],
        query: "",
        loading: false,
        error: null
    };

    
    onChangeQuery = searchQuery => {
        searchMovies(searchQuery).then(({ data }) => {
            this.setState({ movies: data.results })
            this.props.history.push({
                pathname: this.props.location.pathname,
                search: `query=${searchQuery}`
            });
        })
    }
    
        

    render() {
        const { movies}=this.state
    
        return (
            <>
                <SearchForm onSubmit={this.onChangeQuery} />
                <MovieList movies={movies}/>
             
            </>
        )
    }
}
    
 export default MoviesPage;
 
