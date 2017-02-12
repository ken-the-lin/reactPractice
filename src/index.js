import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './state'
import { QuotesSimple } from './QuotesSimple';
import { QuotesWithState } from './QuotesWithState';
import { QuotesWithFirebase } from './QuotesWithFirebase';


const routes = (
    //Provider makes our application aware of the state
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}/>
            <Route path='/quotes_simple' component={QuotesSimple}/>
            <Route path='/quotes_with_state' component={QuotesWithState}/>
            <Route path='/quotes_with_firebase' component={QuotesWithFirebase}/>
        </Router>
    </Provider>
);

ReactDOM.render(
    routes,
  document.getElementById('root')
);