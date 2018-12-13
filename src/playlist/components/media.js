import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import './media.css';


class Media extends PureComponent {
    
    /**JSX: Sintaxis para crear elementos dentro de REACT
     * render(): Se ejecuta cuando es instanciada la clase
     */

    /*por ES7
    state = {
        author = 'Aaron'
    }*/
    
    constructor(props){
        super(props)
        this.state = {
            author: props.author,
            cover: props.cover,
            title: props.title
        }
    }
    
    /*handleClick(event){
        console.log(this.props.title)
    }*/

    /**ventaja de ES7  para no andar bindeando cada funcion del componente en el constructor*/

    /**Las propiedades no pueden mutar pero si puede ir mutando el estado del componente */

  

    
    render(){
        
        let {title, author, cover} = this.state;
        return(
            <div className="Media" onClick={this.props.handleClick}>
                <div className= "Media-Card">
                    <img className="img" src={cover}></img>
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audiio'])
}

export default Media;

/**Ciclo de vida del component
 * constructor(){
	Enlazo (bind) eventos y/o inicializo estado
    }
    
	componentWillMount(){
	Se ejecuta antes de montar el componente
    Se podría usar para hacer un setState()
    No hacer llamados a API o suscripcion de eventos
    }
    
	render(){
	Contiene todos los elementos a renderizar
	podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	Solo se lanza una vez
	Ideal para llamar a una API, hacer un setInteval, etc
	}

	Actualización:
	componentWillReceiveProps(){
	Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	Si ocurre algún error, lo capturo desde acá:
    }
    
    PureComponent: tiene el método shouldComponentUpdate ya asignado (por defecto), si a este componente no se le actualizan las propiedades, 
    no tenemos que validar a mano con shouldComponentUpdate, PureComponent lo hace por nosotros, es decir; si recibe nuevas propiedades pero son las que ya teniamos, 
    no se re-renderiza.
 */