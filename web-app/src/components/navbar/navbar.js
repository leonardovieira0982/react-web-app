import * as React from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Switchbox from "../switch/switchbox";

class Navbar extends React.Component {

    onChecked() {
        this.onCheckedStyle();
    }

    onCheckedStyle(){
        var bodyStyle = document.body.className;
        
        if (bodyStyle === "light-mode"){
            document.body.className = "dark-mode";
            document.getElementById("menu-navbar").className = "navbar-dark bg-dark";
        }
        else {
            document.body.className = "light-mode";
            document.getElementById("menu-navbar").className = "navbar-light bg-light";
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
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;