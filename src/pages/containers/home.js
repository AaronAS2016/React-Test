import React,{Component} from 'react'
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal';
import handleError from '../../error/containers/handle-error';
import HandleError from '../../error/containers/handle-error';

class Home extends Component{

    state = {
        modalVisible: false
    }

    handleToggleModal = (event) =>{
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Categories categories={this.props.data.categories} handleToggleModal = {this.handleToggleModal} />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick = {this.handleToggleModal}
                            >
                            <h1>Esto es un portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home