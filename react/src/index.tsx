import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import Web3Provider from 'components/web3Provider';
import store from 'state';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Web3Provider>
          <App />
        </Web3Provider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
