import React from 'react';
import PropTypes from 'prop-types';
import CastListItem from '../CastListItem';
import NotificationMessage from '../NotificationMessage';

import styles from './CastList.module.css';

function CastList({profiles}) {
     const profileEl = profiles.map(profile => (
         <CastListItem key={profile.id} {...profile}/>
        )).filter(elem => elem).slice(0, 10)
    return (
        <ul className={styles.list}>
            {profiles.length ? (profileEl): (<NotificationMessage>We don`t have any cast for this movie.</NotificationMessage>)}
        </ul>

    )
};

export default CastList;

CastList.defaultProps = {
    profiles: [],
}


CastList.propTypes = {
    profiles: PropTypes.array,
  }