import React, {Component} from 'react';
import './media.css';

class Media extends Component {
    
    /**JSX: Sintaxis para crear elementos dentro de REACT
     * render(): Se ejecuta cuando es instanciada la clase
     */

    
    render(){
        
        let {title, author, image} = this.props;
        return(
            <div className="Media">
                <div className= "Media-Card">
                    <img className="img" src={image}></img>
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        )
    }
}

export default Media;