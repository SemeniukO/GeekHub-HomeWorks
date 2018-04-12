import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import {Route} from 'react-router-dom';
import { routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import './index.css';
import App from './App'
import reducer from './reducers';
import Ticket from './components/tickets';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/ticket/:id" component={Ticket}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);