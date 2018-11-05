import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import calorieApp from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './redux/apiMiddleware/apiMiddleware'

const store = createStore(calorieApp, applyMiddleware(apiMiddleware));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
