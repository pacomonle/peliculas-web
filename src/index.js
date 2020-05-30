import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'; 
import "rc-pagination/assets/index.css";

ReactDOM.render(
  <div className='index'>
    <App />
  </div>,
  document.getElementById('root')
);


serviceWorker.unregister();
