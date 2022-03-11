import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login.component';
import Register from './components/register.component';
import AllCards from './components/allcards.component';
import AddCards from './components/addcards.component';

function App() {
  return (
    <div className="App">
        <Nav/>

        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/addcards" component={AddCards}/>
              <Route path="/allcards" component={AllCards}/>
            </Switch>
          </div>
        </div>
    </div>
  );
}

export default App;
