import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {FirebaseAppProvider, AuthCheck} from 'reactfire';
import { Home, SignIn,TheCanner, About, Disclaimer,HelpfulLinks } from './components';
import '../src/style.css';

import {firebaseConfig} from './firebaseConfig';
import 'firebase/auth';
import {Provider} from 'react-redux';
import {store} from './redux/store';
let myTitle = "The Cannery."

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig = {firebaseConfig} suspense={true}>
  <Provider store={store}>

    <Router>
      <Switch>

          <Route exact path="/">
            <Home title= {myTitle}/>
          </Route>
          <Route exact path="/">
            <> </>
          </Route>
          <Route exact path="/HelpfulLinks">
            <HelpfulLinks> </HelpfulLinks>
          </Route>
          <Route exact path="/About">
            <About> </About>
          </Route>
          <Route exact path="/Disclaimer">
            <Disclaimer> </Disclaimer>
          </Route>
          <Route exact path="/TheCanner">
            <TheCanner></TheCanner>
          </Route>
          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);