import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { getInitialContext } from '@ionic/portals';

// const initialContext = getInitialContext()
//   ?.value ?? { startingRoute: '/' };
//
// <App context={initialContext} />

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
