import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ListSettings from './components/ListSettings'

const App = () => {
  //@ts-ignore
  let location = useLocation();
  //@ts-ignore
  const background = location.state && location.state.background;

  console.log(document.referrer)

  const renderModal = () => {
    if (background || document.referrer === '') {
      return (
        <Route exact path="/lists/settings/:id">
          <ListSettings />
        </Route>       
      )
    }
  }

  return (
    <MainLayout>
        <Switch location={background || location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch> 
        {renderModal()}
    </MainLayout>
  );
}

export default App