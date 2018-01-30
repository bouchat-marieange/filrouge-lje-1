import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import nav from './nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<nav />, document.getElementById('root'));
registerServiceWorker();