import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import configureStore from '../src/redux/reducers/configureStore'

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

