import React from 'react';
import Media from '../containers/media';
import './media.css';

function Playlist(props){

        return(
            <div className="PlayList">

                {
                    props.playlist.map((mediaId)=>{
                        //return <Media key={item.id} title={item.title} author={item.author} image={item.image}/>
                        return <Media openModal = {props.handleToggleModal} key={mediaId} id={mediaId}/>
                    })
                }
            </div>
        )
}

export default Playlist;

/**
 * 
 * Componente Funcional: Es una función la cual solo retorna el JSX de nuestro componente (renderiza UI), es mas sencillo, mas fácil de probar y este componente no tiene ciclo de vida.
 * 
 * Smart component-Dumb Components
 * Presentacional Cómo se ve

    Puede contener smart components u otros componentes de UI
    Permiten composición con `[props.children]``
    No depeden del resto de la aplicación
    No especifica cómo los datos son cargados o mutados
    Recibe datos y callbacks solo con propiedades
    Rara vez tienen su propio estado
    Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components
Containers Qué hace

    Concetrado en el funcionamiento de la aplicación
    Contienen componentes de UI u otros containers
    No tienen estilos
    Proveen de datos a componentes de UI u otros contenedores
    Proveen de callbacks a la UI
    Normalmente tienen estado
    Llaman acciones
    Generados por higher order components
 */