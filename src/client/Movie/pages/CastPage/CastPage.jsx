import { Component } from 'react';
import { getMovieCast } from '../../service/movie-service';
// import MovieDetailsPage from '../MovieDetailsPage';
// import React from 'react';

import styles from './CastPage.module.css'

import defaultImg from '../../../../images/404.jpeg'

class CastPage extends Component {
    state = {
        profiles: [],
        loading:false,
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

        const { profiles } = this.state
        
        const profileEl = profiles.map(profile => (
            <li key={profile.id}> <img className={styles.img} src={profile.profile_path} alt={profile.name} />
                <p className={styles.titleName}>{profile.name }</p>
                    <p>{ profile.character}</p>
            </li>
        )).filter(elem => elem).slice(0, 10)
        
        return (
            <>
                {/* <MovieDetailsPage /> */}
                <div className={styles.wrapper}>
                    <ul className={styles.list}>
                        {profileEl}
                    </ul>

                </div>
            </>)
    }
    
};

// const CastPage = ({ cast }) => {
//     const newProfilesPath = cast.profile_path ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}` : defaultImg
//     const profileEl = cast.map(profile => (
//             <li key={profile.id}> <img className={styles.img} src={newProfilesPath} alt={profile.name} />
//                 <p className={styles.titleName}>{profile.name }</p>
//                     <p>{ profile.character}</p>
//             </li>
//         )).filter(elem => elem).slice(0, 10)
    
//     return (
//             <>
//                 <div className={styles.wrapper}>
//                     <ul className={styles.list}>
//                         {profileEl}
//                     </ul>

//                 </div>
//             </>)
// }
 
// export default CastPage;

export default CastPage;
