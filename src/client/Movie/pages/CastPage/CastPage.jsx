import { Component } from 'react';
import { getMovieCast } from '../../service/movie-service';
import CastList from '../../components/CastList';
import ErrorMessage from '../../components/ErrorMessage';

import styles from './CastPage.module.css'

import defaultImg from '../../../../images/404.jpeg'

class CastPage extends Component {
    state = {
        profiles: [],
        loading: false,
        error: null,
    
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
                const { data } = await getMovieCast(movieId)


                const newProfiles = data.cast.map(({ profile_path, ...rest }) => {
                    const newProfilesPath = profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg

                    return {
                        ...rest,
                        profile_path: newProfilesPath,
                    }
                
                })

                this.setState({
                    profiles: newProfiles,
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

        const { profiles , error} = this.state
        
        return (
            <>
                {error && <ErrorMessage text={`Something went wrong. Try again!`} />}
                
                <div className={styles.wrapper}>
                    <CastList profiles={ profiles}/>
                </div>
                
            </>)
    }
    
};


export default CastPage;
