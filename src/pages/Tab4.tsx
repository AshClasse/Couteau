import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';
import { gameControllerOutline, personOutline } from 'ionicons/icons';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>acerca de glee📖</IonTitle>
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
      <IonContent fullscreen className='tab4-content'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">acerca de glee</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <img src="/images/poster8.jpg" alt="Elenco de Glee" />
          <IonCardHeader>
            <IonCardTitle>Glee: La Serie</IonCardTitle>
            <IonCardSubtitle>2009 - 2015</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  <p>Glee es una serie de televisión musical que sigue las aventuras del club Glee
                    del William McKinley High School, mientras sus miembros lidian con relaciones,
                    sexualidad y discriminación.</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img src="/images/poster13.jpg" alt="Cory, Naya y Mark" />
          
          <IonCardHeader>
            <IonCardTitle>Detalles de la Serie</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  <h2>Creador</h2>
                  <p>Ryan Murphy, Brad Falchuk, Ian Brennan</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Temporadas</h2>
                  <p>6 temporadas (121 episodios)</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Cadena Original</h2>
                  <p>Fox Broadcasting Company</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Género</h2>
                  <p>Comedia dramática, Musical</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img src="/images/poster9.jpg" alt="Elenco de Glee" />
          <IonCardHeader>
            <IonCardTitle>Premios y Reconocimientos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  <p>Globos de Oro por Mejor Serie de Comedia o Musical</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>Premios Emmy</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>People's Choice Awards</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>Screen Actors Guild Awards</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img src="/images/poster10.jpg" alt="Elenco de Glee" />
          
          <IonCardHeader>
            <IonCardTitle>Impacto Cultural</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              Glee revolucionó la televisión al:
            </p>
            <IonList>
              <IonItem>
                <IonLabel>
                  <p>Abordar temas LGBTQ+ de manera abierta</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>Promover la inclusión y diversidad</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>Popularizar covers musicales en TV</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <p>Impulsar las carreras de varios artistas jóvenes</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <img src="/images/poster11.jpg" alt="Elenco de Glee" />
          
          <IonCardHeader>
            <IonCardTitle>Legado Musical</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  <h2>Canciones Grabadas</h2>
                  <p>Más de 700 presentaciones musicales</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Álbumes</h2>
                  <p>Más de 20 álbumes lanzados</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h2>Singles en Billboard</h2>
                  <p>Más de 200 canciones en las listas</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <img src="/images/poster12.jpg" alt="Cory, Naya y Mark" />
          <IonCardHeader>
            <IonCardTitle>In Memoriam: Un Legado que Perdura</IonCardTitle>
            <IonCardSubtitle>Recordando a nuestras estrellas</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p>La serie Glee ha experimentado pérdidas significativas de miembros del elenco:</p>
            <IonList>
              <IonItem lines="none">
                <IonLabel>
                  <h2>Cory Monteith (Finn Hudson)</h2>
                  <p>13 de julio de 2013</p>
                </IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonLabel>
                  <h2>Naya Rivera (Santana Lopez)</h2>
                  <p>8 de julio de 2020</p>
                </IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonLabel>
                  <h2>Mark Salling (Noah Puckerman)</h2>
                  <p>30 de enero de 2018</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
