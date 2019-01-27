import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-quill/dist/quill.bubble.css';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');
ReactDOM.render(<App/>, rootEl);
serviceWorker.unregister();

