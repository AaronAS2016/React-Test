import React,{Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux'
import {List as list} from 'immutable'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux'

class Home extends Component{

    handleOpenModal = (id) =>{
        this.props.actions.openModal(id)
    }


    handleCloseModal = () =>{
        this.props.actions.closeModal()
    }

    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Categories categories={this.props.categories} handleOpenModal = {this.handleOpenModal} search={this.props.search} isLoading={this.props.isLoading}/>
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal handleClick = {this.handleCloseModal}>
                                <VideoPlayer autoplay id={this.props.modal.get('mediaId')}/>
                            </Modal>
                        </ModalContainer>
                    }

                </HomeLayout>
            </HandleError>
        )
    }
}
const mapStateToProps = (state, props) => {

    const categories = state.get('data').get('categories').map((categoryId) =>{
        return state.get('data').get('entities').get('categories').get(categoryId)
    })

    let searchResults = list()
    const search = state.get('data').get('search')

    if(search){
        const mediaList = state.get('data').get('entities').get('media')
        searchResults = mediaList.filter((item)=> (
            item.get('author').toLowerCase().includes(search.toLowerCase())
        )).toList()
    }

    return {
        categories,
        search: searchResults,
        modal: state.get('modal'),
        isLoading: state.get('isLoading').get('active')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // actions: bindActionCreators(acctiones, dispatch)
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)

/**Se cambia el export por: export default connect(mapStateToProps)(Component)

mapStateToProps es una función que devuelve las propiedades necesarias, los datos que el componente utilizará */