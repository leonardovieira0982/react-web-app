import React, { Component, Fragment } from "react";
import Input from '../../components/input/input';


class Home extends Component {
    render(){       
        return(
            <Fragment>
               <div>
                <p>Open your account</p>
                <p>Start here, in few minutes</p>
                <Input id="txtName" validate={true} placeholder="name"></Input>                
               </div>
            </Fragment>
        );
    }
}

export default Home;