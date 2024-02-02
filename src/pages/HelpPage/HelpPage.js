import React from 'react';
import { IonContent, IonIcon, IonItem, IonPage } from '@ionic/react';

// import './HelpPage.scss';

const HelpPage = () => {
  return (
    <IonPage id="help-page">
      <IonContent>
        <IonItem lines="none">
          <h1>Get Assistance</h1>
        </IonItem>
        <IonItem lines="none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HelpPage;
