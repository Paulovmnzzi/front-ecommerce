import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>, 
  document.getElementById('root')
);
