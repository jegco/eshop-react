import React from 'react';
import './App.css';
import LoginComponent from './components/login/Login';
import ShopComponent from './components/shop/Shop';
import DetailsComponent from './components/details/Details';
import PaycarComponent from './components/paycar/Paycar';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginComponent}/>
        <Route exact path="/shop" component={ShopComponent}/>
        <Route exact path="/details/:id" component={DetailsComponent}/>
        <Route exact path="/paycar" component={PaycarComponent}/>
      </Switch>
    );
  }
}

export default App;
