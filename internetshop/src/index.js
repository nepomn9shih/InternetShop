import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import {createStore, applyMiddleware} from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
// import {Switch, Route} from 'react-router-dom';
import {Switch, Route} from 'react-router';
 
import Phones from 'containers/phones';
import Phone from 'containers/phone';
import createRootReducer from 'reducers';


const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
  )

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      
      <Switch>
          <Route path='/' component={Phones} exact />
          <Route path='/phones/:id' component={Phone} />
      </Switch>
      
    </ConnectedRouter>
  </Provider>,
document.getElementById('root')
)