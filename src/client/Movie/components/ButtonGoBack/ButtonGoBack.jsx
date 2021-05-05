import React from 'react';

import PropTypes from 'prop-types';

import styles from './ButtonGoBack.module.css'

function ButtonGoBack ({ onClick, children }) {
    return <button onClick={onClick} className={styles.button}>{children}</button>
};

export default ButtonGoBack;

ButtonGoBack.propTypes = {
    onClick: PropTypes.func.isRequired,
}

