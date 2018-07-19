import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import LoginComponent from './components/login/Login'

ReactDOM.render(<LoginComponent />, document.getElementById('root'));
registerServiceWorker();
