import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import store from './store/store';

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
