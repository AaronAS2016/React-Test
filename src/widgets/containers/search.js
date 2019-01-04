import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { bindActionCreators } from 'redux';

class SearchContainer extends Component {
    state = {
        value : ''
    }
    handleSubmit = event =>{
        event.preventDefault();
        // console.log(`%c ${this.state.value}`, `background: #f2f2f2; color: #ff0000; border-radius: 5px; font-size: 32px; margin-left:0; font-family: Roboto;`);

        this.props.actions.searchEntitiesAsync(this.input.value)

    }
    setInputRef = element => {
        this.input = element;
    }

    handleInputChange = event =>{
        this.setState({
            value: event.target.value
        })
    }

    render(){
        return(
            <Search
                setRef={this.setInputRef}
                handleSubmit = {this.handleSubmit}
                handleChange = {this.handleInputChange}
                value={this.state.value}

            />
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(SearchContainer);