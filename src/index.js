import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import calorieApp from './redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(calorieApp);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
