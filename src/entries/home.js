import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';

// import data from '../api.json';

import { Provider } from 'react-redux'

import { createStore } from 'redux'

import reducer from '../reducers/data'

import data from '../schemas/index'

const initialState = {
    data: {
        // ...data,
        entities: data.entities,
        categories: data.result.categories
    },
    search: []
}


const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)




const homeContainer = document.getElementById("home-container");

/**
 * Tipos de componentes
 * Funcional: Este tipo de componentes se definen como funciones y no tiene ni trabajan con estados.
 * Puro: También se implementan como clases, pero en este caso van a extender de React.PureComponent.
 * Normal o de Estado: Las principales características de este tipo de componentes es que utilizan la encapsulación en clases, tienen un estado que definen, y actualizan.
 */


/**ReactDOM recibe dos parámtros, que voy a renderizar y donde lo voy a renderizar
 * La etiqueta puede reciber propiedades que se pueden obtener desde los componentes
 * 
 * 
 * redux--
 * Utilizaremos un Provider que nos provee React Redux para asignar todos los datos a la aplicación.

    Un Provider es un componente de orden superior que sirve para heredar elementos a los componentes hijos.
 */
render(
        <Provider store={store}>
            <Home />
        </Provider>, homeContainer)