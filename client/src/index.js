import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import blogPostReducer from './reducers/blogPostReducer'
import projectsReducer from './reducers/projectReducer'
import messageReducer from './reducers/messageReducer'
import loginReducer from './reducers/loginReducer'

const middleware = [thunk]

const rootReducer = combineReducers({
  blogPostReducer,
  projectsReducer,
  messageReducer,
  loginReducer,
});

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>
,document.getElementById('root'));
registerServiceWorker();
