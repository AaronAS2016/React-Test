import React from 'react';
import './search.css';

const Search = (props) =>(
    <form 
        className = "Search"
        onSubmit = {props.handleSubmit}
    >
        <input 
            ref = {props.setRef}
            type="text"
            className="Search-input"
            placeholder="Busca tu video"
            name="submit"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search;

