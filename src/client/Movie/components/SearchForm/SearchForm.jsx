import React, { Component } from 'react';
import { fields } from './fields'

import styles from './SearchForm.module.css';

class SearchForm extends Component {
    state = {
        searchQuery: ''
    }
    
     handleChange = ({ target }) => {
        this.setState({
            searchQuery: target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    }

    render() {
        const { handleSubmit, handleChange}=this
        return (
             <>
                <form className={ styles.form} onSubmit={handleSubmit}>
                    <input className={ styles.input} onChange={handleChange} {...fields.query} />
                    <button className={ styles.button} type="submit">Search</button>
                </form>
             
            </>
         );
    }
}
 
export default SearchForm;
