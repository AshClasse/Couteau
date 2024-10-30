import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab5.css';
import { personOutline, gameControllerOutline } from 'ionicons/icons';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>glee en mi vida💁🏾‍♀️</IonTitle>

          <IonButtons slot="end">
            <IonButton href='/mini-juego'>
                <IonIcon icon={ gameControllerOutline } />
            </IonButton>
            <IonButton href='/contratame'>
              <IonIcon icon={ personOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='tab5-content'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">glee en mi vida</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>¿Por qué Glee es importante?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <img 
              src="/images/poster5.jpg" 
              alt="Poster de Glee"
              style={{
                width: '100%',
                height:  '100%',
                marginTop:  '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
            <video 
              controls 
              width="100%" 
              autoPlay 
              style={{ 
                aspectRatio: '9/16',
                maxHeight: '30vh',
                margin: '0 auto',
                display: 'block'
              }}
            >
              <source src="/videos/mivideo.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <img 
              src="/images/poster5.jpg" 
              alt="Poster de Glee"
              style={{
                width: '100%',
                height:  '100%',
                marginBottom:  '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
