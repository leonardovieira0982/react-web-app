import React, { Component } from "react";
import './input.css';

class Input extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.id,
            validate: this.props.validate,
            placeholder: this.props.placeholder
        }
    }

    render(){
        return(
            <div>                
                <input
                    id={ this.state.id }                   
                    onBlur={ () => this.onBlur(this.state.id, this.state.validate) }
                    required
                />
                <span className="placeholder-label">{this.props.placeholder}</span>                
            </div>            
        );
    }

    onBlur(id, isValidate){
       if (isValidate) {
            let textBox = document.getElementById(id);

            if (textBox.value === "") {
                textBox.classList.add("error-empty");
            }
            else {
                textBox.classList.remove("error-empty");
            }
       }        
    }
}

export default Input;