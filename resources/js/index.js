import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter  as Router, Link, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Donate from './components/Donate';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Keys from './components/Keys';
import {ProtectedRoute} from './components/ProtectedRoute';

class Index extends Component {
  render() {
    return (
      <Router>
         <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Donate} />
                <Route exact path='/admin' component={Login} />
                <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                <ProtectedRoute exact path='/consumer' component={Keys} />
                <Route path='*' component={()=>"OOPS!! 404 NOT FOUND"} />
            </Switch>
    </div>
      </Router>
    );
  }
}
ReactDOM.render(<Index/>, document.getElementById('index'));