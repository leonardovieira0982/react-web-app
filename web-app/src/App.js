import React from 'react';
import './App.css';
import './assets/css/index.css';
import Header from './pages/layout/header';

class App extends React.Component {

  componentDidMount(){
    document.body.className = "light-mode";
  }

  render(){
    return (    
      <div id="page-body">
          <Header></Header>      
      </div>
    );
  }
}
export default App;