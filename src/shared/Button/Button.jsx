import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css'

function Button ({ children, type = 'button', onClick = () => null }) {
    return <button  className={styles.button} type={type} onClick={onClick}>{children}</button>
};

export default Button;

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
}

