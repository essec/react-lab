import React, { Component } from 'react';

export default class CharacterCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
        this.setState({active: false})
       }
    }

    activate = ()=>{
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true})
            if(this.state.completed == false){
                
            }
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
            this.setState({active: false})
        }
    }

    render(){
<<<<<<< HEAD
        let className = `card ${this.state.active ? 'activeCard' : ''}`
        return(
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
=======
        let className = `card ${this.state.active ? 'activeCard': ''}`
        // console.log(this.props.attempt)

        return(
                <div className={className} onClick={this.activate}>
                   {this.props.value}
                   
                </div>
           
        );
>>>>>>> dd920025c4d1aec150ec7701d84ddeb687709196
    }
}