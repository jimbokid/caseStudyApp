import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/index'
import Checkout from "../../routes/Checkout";
import DashBoard from "../../routes/Models/Dashboard";
import ModelConfigurator from "../../routes/Models/ModelConfigurator";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/models/" component={DashBoard}/>
          <Route path="/models/:code/:type/" component={ModelConfigurator}/>
          <Route path="/checkout/:status" component={Checkout}/>
          <Redirect from='/' to='/models/'/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
