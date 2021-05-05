import React from 'react';
import PropTypes from 'prop-types';

import styles from './ReviewsListItem.module.css';

function ReviewsListItem({author, content}) {
    return (
        <li>
            <h2 className={ styles.title}>Author: {author }</h2>
            <p>{content}</p>
        </li>)
};

export default ReviewsListItem;


ReviewsListItem.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string,
  };
  
