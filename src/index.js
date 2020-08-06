import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>, document.getElementById('root'));

 serviceWorker.unregister();