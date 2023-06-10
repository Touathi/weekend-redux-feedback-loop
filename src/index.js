import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


// feeling reducer data
const feeling = (state = [], action) => {
    
    if (action.type === 'GET_FEELING') {
        return action.payload
    } 
        else if (action.type === 'GET_SUBMIT') {

            return state = []
    }

    return state;
}

// understanding reducer data
const understanding = (state = [], action) => {

    if (action.type === 'GET_UNDERSTANDING') {
        return action.payload
    } 
        else if (action.type === 'GET_SUBMIT') {

            return state = []
    }

    return state;
}

// support reducer data
const support = (state = [], action) => {

    if (action.type === 'GET_SUPPORT') {
        return action.payload
    } 
        else if (action.type === 'GET_SUBMIT') {

            return state = []
    }

    return state;
}

// comment reducer data
const comment = (state = [], action) => {

    if (action.type === 'GET_COMMENT') {
        return action.payload
    } 
        else if (action.type === 'GET_SUBMIT') {

            return state = []
    }

    return state
}

// FeedbackData reducer from server
const feedbackData = (state = [], action) => {

    if (action.type === 'GET_FEEDBACK') {
        return action.payload
    } 
        else if (action.type === 'GET_SUBMIT') {

            return state = []
    }
    
    return state;
}


// store
const reduxStore = createStore(
    combineReducers({
        feedbackData,
        feeling,
        understanding,
        support,
        comment
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
