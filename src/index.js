import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_TOKEN}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
