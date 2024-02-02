import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import './App.css';
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import {first} from "./test1";
import {second} from "./test2";
import {third} from "./test3";

function App() { // { context }
  React.useEffect(() => {
    first()
    second()
    third()
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/help" exact component={HelpPage} />
      </IonReactRouter>
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
