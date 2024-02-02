import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import { HelpPage } from './pages/HelpPage';
import * as Portals from '@ionic/portals';
import './App.css';
import {DevPage} from "./pages/DevPage";

function App({ context }) {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {context?.startingRoute ?
            <Route exact path="/">
              {context.startingRoute === '/' ? <DevPage /> : <Redirect to={context.startingRoute} />}
            </Route> : null}
          <Route path="/help" exact component={HelpPage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;

/*
  <h1>HHHHHH</h1>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Inbox</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonButton
    className="checkout-button"
    expand="block"
    onClick={() => {
      Portals.publish({ topic: 'showCheckout' });
    }}
  >
    Checkout
  </IonButton>
 */
