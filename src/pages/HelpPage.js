import {IonPage, IonButton, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import * as Portals from "@ionic/portals";
import React from "react";

function HelpPage() {
  return (
    <IonPage id="help-page">
      <h1>HELP</h1>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HELP</IonTitle>
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
    </IonPage>
  )
}

export default HelpPage;