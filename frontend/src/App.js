import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import MenuDemo from './MenuDemo';   
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <MenuDemo/> 
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/login' component={Login}></Route>
            </Switch>
          </div>
       </Router>
   );
  }
}
  
export default App;