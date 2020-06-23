import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import './i18n';

axios.defaults.baseURL = ''

ReactDOM.render(<App />, document.getElementById('root'));
