import React, { Fragment } from 'react';
import './App.css';
import './assets/css/index.css';
import Navbar from "./components/navbar/navbar";
class App extends React.Component {

  componentDidMount(){
    document.body.className = "light-mode";
  }

  render(){
    return (  
      <div>
        <Fragment>
          <Navbar />
          
        </Fragment>        
      </div>
    );
  }
}
export default App;