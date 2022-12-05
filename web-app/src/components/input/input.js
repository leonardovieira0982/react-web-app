import React, { Component } from "react";
import './input.css';
import './input-mask';

class Input extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.id,
            validate: this.props.validate,
            placeholder: this.props.placeholder,
            type: this.props.type,
            width: this.props.width
        }
    }

    componentDidMount(){       
       this.onConfigureComponent();
    }

    render(){
        return(
            <div className="div">                
                <input
                    id= { this.state.id }
                    type= { this.props.type }  
                    width = { this.props.width }             
                    onBlur={ () => this.onBlur(this.state.id, this.state.validate) }
                    required
                />
                <span className="placeholder-label">{ this.props.placeholder }</span>                
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

    onConfigureComponent() {
        let textBox = document.getElementById(this.props.id);
        textBox.classList.add(this.props.width);
    }
}

export default Input;