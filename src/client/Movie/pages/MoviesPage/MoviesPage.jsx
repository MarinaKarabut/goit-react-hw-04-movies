
import { Component } from 'react';
import { Redirect } from "react-router-dom"
import SearchForm from '../../components/SearchForm/SearchForm';
import { searchMovies } from '../../service/movie-service';
import MovieList from '../../components/MovieList';
import ErrorMessage from '../../components/ErrorMessage';


import styles from './MoviesPage.module.css';





class MoviesPage extends Component {
    state = {
        movies: [],
        query: "",
        loading: false,
        error: null,
        submit:false
    };

    async componentDidMount() {
        const query = new URLSearchParams(this.props.location.search).get('query')

        if (query) {

         try {
            const { data } = await searchMovies(query)
            const newMovies = data.results

            this.setState({
                    movies: newMovies,
                    loading: false,
                    submit:false
                }) 
            }
            catch (error) {
                this.setState({
                    loading: false,
                    submit:false,
                    error
                })
            }
            finally{
                this.setState({ loading: false, submit:false })
            };  
              
        }
    }
 
    
   async componentDidUpdate(prevProps, prevState, snapshot) {
       const { loading, query } = this.state
       
        if (loading) {
            try {
            const { data } = await searchMovies(query)
            const newMovies = data.results

            this.setState({
                    movies: newMovies,
                    loading: false,
                    submit:false
                }) 
            }
            catch (error) {
                this.setState({
                    loading: false,
                    submit:false,
                    error
                })
            }
            finally{
                this.setState({ loading: false, submit:false })
            };
        
        }   
    }

     
    
    onChangeQuery = searchQuery => {
        this.setState({
            query: searchQuery,
            movies: [],
            loading: true,
            error: null,
            submit: true
        })
    }

    
    render() {

        const { movies, submit, query, error} = this.state
        const { onChangeQuery } = this
        if(submit){
            const redirectOptions = {
                pathname: "/movies",
                search: `?query=${query}`
            };
            return <Redirect to={redirectOptions}/>
        }

    
        return (
            <>
                
                <SearchForm onSubmit={onChangeQuery} />
                <div className={styles.wrapper}>
                    <MovieList movies={movies} />
                </div>
                {error && <ErrorMessage text={`Something went wrong. Try again!`} />}
            
            </>
        )
    }
}
    
 export default MoviesPage;
 
