import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/pages/Home'
import Accomplishments from '../src/pages/Accomplishments'
import Resume from '../src/pages/Resume'
import SignUp from '../src/pages/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/accomplishments' exact component={Accomplishments}/>
          <Route path='/resume' exact component={Resume}/>
          <Route path='/signup' exact component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
