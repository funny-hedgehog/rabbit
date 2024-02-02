import React from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/react';
import * as Portals from '@ionic/portals';
import './App.css';

function App() { // { context }
  return (
    <IonApp>
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
    </IonApp>


  );
}

export default App;

/*
<IonReactRouter>
  <IonRouterOutlet>
    {context?.startingRoute ?
      <Route exact path="/">
        {context.startingRoute === '/' ? <DevPage /> : <Redirect to={context.startingRoute} />}
      </Route> : null}
    <Route path="/help" exact component={HelpPage} />
  </IonRouterOutlet>
</IonReactRouter>
 */
