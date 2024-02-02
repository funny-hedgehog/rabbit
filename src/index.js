import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getInitialContext } from '@ionic/portals';

const initialContext = getInitialContext()
  ?.value ?? { startingRoute: '/' };

ReactDOM.render(
  <React.StrictMode>
    <App context={initialContext} />
  </React.StrictMode>,
  document.getElementById('root'),
);
