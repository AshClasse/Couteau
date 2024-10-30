import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { accessibility, call, ellipse, heartHalf, home, images, informationCircle, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import Tab6 from './pages/Tab6';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';
import './theme/custom-fonts.css';
import './theme/floating-tab-bar.css';
import Tab7 from './pages/Tab7';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/inicio">
            <Tab1 />
          </Route>
          <Route exact path="/personajes">
            <Tab2 />
          </Route>
          <Route exact path="/momentos">
            <Tab3 />
          </Route>
          <Route exact path="/acerca">
            <Tab4 />
          </Route>
          <Route exact path="/enmivida">
            <Tab5 />
          </Route>
          <Route exact path="/contratame">
            <Tab6 />
          </Route>
          <Route exact path="/mini-juego">
            <Tab7 />
          </Route>
          <Route exact path="/">
            <Redirect to="/inicio" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/inicio">
            <IonIcon aria-hidden="true" icon={home}/>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/personajes">
            <IonIcon aria-hidden="true" icon={accessibility} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/momentos">
            <IonIcon aria-hidden="true" icon={images} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/acerca">
            <IonIcon aria-hidden="true" icon={informationCircle} />
          </IonTabButton>
          <IonTabButton tab="tab5" href="/enmivida">
            <IonIcon aria-hidden="true" icon={heartHalf} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
