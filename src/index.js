import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const feedbackData = (state = [], action) => {

    if (action.type === 'GET_FEEDBACK') {
        return action.payload
    }
    
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackData
    })
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
