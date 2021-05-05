import React, { Component } from 'react';
import { fields } from './fields'

import styles from './SearchForm.module.css';

class SearchForm extends Component {
    state = {
        searchQuery: "",
    }
    
     handleChange = ({ target }) => {
        this.setState({
            searchQuery: target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {searchQuery}=this.state
        this.props.onSubmit(searchQuery)
        this.setState({
            searchQuery: "",
        })
    }

    render() {
        const { searchQuery}= this.state
        const { handleSubmit, handleChange}=this
        return (
             <>
                <form className={ styles.form} onSubmit={handleSubmit}>
                    <input className={styles.input} onChange={handleChange} {...fields.query} value={searchQuery} />                  
                    <button className={styles.button} type="submit">Search</button>
                </form>
             
            </>
         );
    }
}
 
export default SearchForm;
