import React,{Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import { connect } from 'react-redux'

class Home extends Component{

    state = {
        modalVisible: false
    }

    handleToggleModal = (media) =>{
        this.setState({
            modalVisible: !this.state.modalVisible,
            media
        })
    }

    render(){
        console.log(this.props)
        return(
            <HandleError>
                <HomeLayout>
                    <Categories categories={this.props.categories} handleToggleModal = {this.handleToggleModal} search={this.props.search}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick = {this.handleToggleModal}>
                                <VideoPlayer autoplay src={this.state.media.src} title={this.state.media.title}/>
                            </Modal>
                        </ModalContainer>
                    }

                </HomeLayout>
            </HandleError>
        )
    }
}
const mapStateToProps = (state, props) => {

    const categories = state.data.categories.map((categoryId) =>{
        return state.data.entities.categories[categoryId]
    })
    return {
        categories,
        search: state.search
      }
}
export default connect(mapStateToProps)(Home)

/**Se cambia el export por: export default connect(mapStateToProps)(Component)

mapStateToProps es una función que devuelve las propiedades necesarias, los datos que el componente utilizará */