import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {
  createStore, applyMiddleware, compose,
  combineReducers
} from 'redux';
import userReducer from './store/users/reducer/reducer';
import App from './App';

const composeEnhancers = compose;

const rootReducer = combineReducers({
  users: userReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider keyword="provider" store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// const indexApp = 
// <Provider key="provider" store={store}>
//   <App key="App"/>
// </Provider>;

// ReactDOM.render(
//   indexApp,
//   document.getElementById('root')
// );
