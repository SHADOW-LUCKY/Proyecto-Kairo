import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* contexts */  
import {TempContextProvider} from './contexts/TempContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TempContextProvider>
      <App />
    </TempContextProvider>
  </React.StrictMode>
);

