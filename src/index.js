import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import resigterServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

