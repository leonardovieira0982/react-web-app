import React, { Component, Fragment } from "react";
import './home.scss';
import Input from '../../components/input/input';
import Types from '../../components/input/inputEnumTypes';

class Home extends Component {
    render(){       
        return(
            <Fragment>
               <div className="main">
                <h2>Open your account</h2>
                <p>Personal Information</p>
                    <div className="form-register">
                        <div>
                            <Input id="txtName" validate={true} type={Types.Text} placeholder="Name"></Input>
                        </div>
                        <div className="element-field">
                            <Input id="txtEmail" validate={true} type={Types.Email} placeholder="Email"></Input>
                        </div>
                        <div className="element-field">
                            <Input id="txtBirthday" validate={true} type={Types.Text} placeholder="Birthday"></Input>
                        </div>
                    </div>                             
               </div>
            </Fragment>
        );
    }
}

export default Home;