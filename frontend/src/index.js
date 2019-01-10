import React from 'react';
import ReactDOM from 'react-dom';
//import 'react-quill/dist/quill.snow.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootEl = document.getElementById('root');
ReactDOM.render(<App/>, rootEl);
serviceWorker.unregister();

