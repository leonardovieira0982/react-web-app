import React, { Component, Fragment } from "react";
import './home.scss';
import Input from '../../components/input/input';
import InputType from '../../components/input/inputEnumTypes';
import Card from '../../components/card/card';

class Home extends Component {
    render(){       
        return(
            <Fragment>
               <div className="main">
                <h2>Open your account</h2>
                <p>Personal Information</p>
                    <div className="form-table">
                        <div className="form-row">
                            <div className="form-column">
                                <div className="form-table">
                                    <div className="form-row">
                                        <div className="form-column">
                                            <Input id="txtName" validate={true} type={InputType.Text} placeholder="Name" width="large-size"></Input>
                                        </div>
                                        <div className="form-column">
                                            <Input id="txtEmail" validate={true} type={InputType.Email} placeholder="Email" width="medium-size"></Input>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-column">
                                            <Input id="txtBirthday" validate={true} type={InputType.Text} placeholder="Birthday" width="medium-size"></Input>
                                        </div>
                                        <div className="form-column">
                                            <Input id="txtPhone" validate={false} type={InputType.Phone} placeholder="Mobile" width="medium-size"></Input>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-column">
                                            <Input id="txtPassword" validate={true} type={InputType.Password} placeholder="Password" width="medium-size"></Input>
                                        </div>
                                        <div className="form-column">
                                            <Input id="txtPasswordConfirm" validate={true} type={InputType.Password} placeholder="Confirm Password" width="medium-size"></Input>
                                        </div>
                                    </div>                        
                                </div>   
                            </div>
                            <div className="form-column">
                                <div className="form-table">
                                    <div>
                                        <Card></Card>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>                              
               </div>
            </Fragment>
        );
    }
}

export default Home;