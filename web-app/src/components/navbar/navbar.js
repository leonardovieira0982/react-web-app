import * as React from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Switchbox from "../switch/switchbox";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {

    onChecked() {
        this.onCheckedStyle();
    }

    onCheckedStyle(){
        let darkStyle = "navbar navbar-expand-lg navbar-dark bg-dark";
        let ligthStyle = "navbar navbar-expand-lg navbar-light bg-light";
        var bodyStyle = document.body.className;
        
        if (bodyStyle === "light-mode"){
            document.body.className = "dark-mode";
            document.getElementById("menu-navbar").className = darkStyle;
        }
        else {
            document.body.className = "light-mode";
            document.getElementById("menu-navbar").className = ligthStyle;
        }   
    }

    render(){
        return(
            <div>   
                <div className="dark-line">
                    <div className="nav-div-vw">
                        <label className="nav-light-label">Portfolio Example React</label>
                    </div>
                    <div className="nav-div-vw nav-align-padding-left">
                        <a href="https://github.com/leonardovieira0982" target="_blank" rel="noreferrer">
                            <i className="bi bi-github" title="Project in the Github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/leonardovieira2022/" target="_blank" rel="noreferrer"> 
                            <i className="bi bi-linkedin" title="My linkedin profile"></i>
                        </a>
                        <Switchbox onChekedChange={() => this.onChecked()}></Switchbox>                     
                    </div>                
                </div>
                <div>
                    <nav id="menu-navbar" className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item active">                            
                            <Link className="nav-link" to="/contact">Contact</Link>  
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About</Link>                            
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;