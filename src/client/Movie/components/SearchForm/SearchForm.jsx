import React, { Component } from 'react';
import { fields } from './fields'
import Button from '../Button'

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
                    <Button type="submit">Search</Button>
                </form>
             
            </>
         );
    }
}
 
export default SearchForm;
