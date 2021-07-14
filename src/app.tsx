import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <MainLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>      
        </MainLayout>
      </Router>
    );
  }
}