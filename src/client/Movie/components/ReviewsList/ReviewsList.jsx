import React from 'react';
import PropTypes from 'prop-types';
import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import NotificationMessage from '../NotificationMessage';

// import styles from './ReviewsList.module.css';

function ReviewsList({reviews }) {
    const reviewEl = reviews.map(review => (
        <ReviewsListItem key={review.id} {...review}/>
        ))
    return (
        <ul>
            {reviews.length ? (reviewEl): (<NotificationMessage>We don`t have any reviews for this movie.</NotificationMessage>)}
        
        </ul>
    )
};

export default ReviewsList;

ReviewsList.defaultProps = {
    profiles: [],
}


ReviewsList.propTypes = {
    profiles: PropTypes.array,
  }
