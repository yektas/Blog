import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');
ReactDOM.render(<App/>, rootEl);
serviceWorker.unregister();

