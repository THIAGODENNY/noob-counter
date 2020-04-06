import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import './App.css';
import Add from './components/Add';
import Sub from './components/Sub';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/add" />
          </Route>
          <Route path="/add" component={Add} />
          <Route path="/sub" component={Sub} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
