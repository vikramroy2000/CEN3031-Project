import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TeamPairing from './components/TeamPairing/TeamPairing';
import reducers from './reducers';
import NavBar from './components/NavBar/NavBar';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
    <Provider store={store}>
        <div className="App">
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={() => <App />} />
                    <Route path="/teampairing" exact component={() => <TeamPairing />} />
                </Switch>
            </Router>
        </div>
    </Provider>, 
    document.getElementById('root')
);