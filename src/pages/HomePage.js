import {IonPage, IonButton, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import * as Portals from "@ionic/portals";
import React from "react";

function HomePage() {
  return (
    <IonPage id="help-page">
      <h1>HOME</h1>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
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

export default HomePage;