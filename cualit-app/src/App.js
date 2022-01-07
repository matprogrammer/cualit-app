import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import history from './utils/history';

import { Provider } from 'react-redux';
import store from './store';

import Home from './screens/home/Home';
import CreateTutorial from './screens/createTutorial/CreateTutorial';
import EditTutorial from './screens/editTutorial/EditTutorial';

function App() {
  return (
    <Router forceRefresh={true} history={history}>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <CreateTutorial />
          </Route>
          <Route path="/tutorials/:id">
            <EditTutorial />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;