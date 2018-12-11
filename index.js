import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';

const container = document.getElementById("app");

/**
 * Tipos de componentes
 * Funcional: Este tipo de componentes se definen como funciones y no tiene ni trabajan con estados.
 * Puro: También se implementan como clases, pero en este caso van a extender de React.PureComponent.
 * Normal o de Estado: Las principales características de este tipo de componentes es que utilizan la encapsulación en clases, tienen un estado que definen, y actualizan.
 */


/**ReactDOM recibe dos parámtros, que voy a renderizar y donde lo voy a renderizar
 * La etiqueta puede reciber propiedades que se pueden obtener desde los componentes
 * 
 */
render(<Media title="Titulo personalizado" author="Aaron Saban" image="./images/fuego-artificial.jpg"/>, container)