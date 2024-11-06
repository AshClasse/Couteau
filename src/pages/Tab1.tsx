import { IonButton, IonImg, IonButtons, IonContent, IonHeader, IonIcon, IonicSlides, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import {personOutline } from 'ionicons/icons';
import './Tab1.css';


const Tab1: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Caja de Herramientas🔨</IonTitle>
          <IonButtons slot="end">
            <IonButton href='/contratame'>
              <IonIcon icon={ personOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Caja de Herramientas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="toolbox-container">
          <IonImg 
            src="/images/toolbox.png" 
            alt="Caja de herramientas" 
            className="toolbox-image"
          />
          <p className="toolbox-description">
            Esta aplicación es tu caja de herramientas digital. 
            Contiene múltiples funcionalidades para ayudarte en diversas tareas.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
