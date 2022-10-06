import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/index.css';
import Navbar from "./components/navbar/navbar";
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
class App extends React.Component {

  componentDidMount(){
    document.body.className = "light-mode";
  }

  render(){
    return (  
      <div>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/about" element={<About></About>} />                   
          </Routes>
        </Fragment>        
      </div>
    );
  }
}
export default App;