import React from 'react';
import './modal.css';

function Modal(props){
    return(
        <div className='Modal'>
            {props.children}
            <button onClick={props.handleClick} className="Modal-close"/>
        </div>
    )
}

export default Modal;

/**Un Componente Inteligente, contiene anidado (en su interior) un Componente Presentacional, porque el primero es el que va a manejar toda la lógica de funcionamiento como lo haría un controlador (MVC), mientras que el componente interno tendría lo necesario para manejar la apariencia, al estilo de las vistas (MVC
 * Genera un poco de ansiedad tener que desaprender enfoques y filosofías de programación anteriores que quizás nos costó aprender … para dar paso a lo nuevo … pero es lo que toca si se quiere estar a la vanguardía en este mundo Dev (que es lo que nos apasiona) … tan dinámico … la adaptabilidad al cambio (para los que hemos tenido que atravesar varias épocas y tecnologías) es fundamental para no caer en la obsolescencia profesional 
 */