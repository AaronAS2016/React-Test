import React from 'react'
import PlayList from '../../playlist/components/playlist';
import './categories.css';

function Category(props){
    return(
        <div>
        <p>{props.description}</p>
        <h2>{props.title}</h2>
        
        <PlayList 
            playlist={props.playlist}
            handleToggleModal={props.handleToggleModal}
        />

        </div>
    )
}

export default Category;