import React from 'react';
import PropTypes from 'prop-types';

import styles from './CastListItem.module.css';

function CastListItem({ profile_path, name, character }) {
    
    return (
        <li> <img className={styles.img} src={profile_path} alt={name} />
            <p className={styles.titleName}>{name}</p>
            <p>{character}</p>
        </li>)
};

export default CastListItem;

CastListItem.propTypes = {
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    character : PropTypes.string.isRequired,
  };
  
