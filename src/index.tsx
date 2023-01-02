import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StateProvider } from './store/StateProvider';
import App from './App';
import reducer, { initialState } from './store/reducer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
  </React.StrictMode>
);

