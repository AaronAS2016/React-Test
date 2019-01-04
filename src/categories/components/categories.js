import React from 'react'
import Category from './category'
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media'

function Categories(props){
    return(
        <div className="Categories">
            <Search/>
            {
                props.isLoading &&
                <p>Buscando tus videos favoritoos...🌝</p>
            }
            {
                props.search.map((item) => {
                    return <Media {...item.toJS()} openModal={props.handleOpenModal} key={item.get('id')}/>
                })
            }
            {
                props.categories.map((item) =>{
                    return <Category key={item.get('id')} {...item.toJS()} handleToggleModal = {props.handleOpenModal} />
                })
            }
        </div>
    )
}

export default Categories;