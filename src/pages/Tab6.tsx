import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { logoGithub, logoLinkedin, mailOutline, logoWhatsapp,gameControllerOutline, personOutline, globeOutline } from 'ionicons/icons';
import './Tab6.css';

const Tab6: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>contrátame💵</IonTitle>

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
      <IonContent fullscreen className='tab-content'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">contrátame</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Card Principal con Foto y Presentación */}
        <IonCard className="profile-card">
          <img 
            src="/images/profile.jpeg" 
            alt="Tu Nombre" 
            className="profile-photo"
          />
          <IonCardHeader>
            <IonCardTitle>Ashley Classe Ripol</IonCardTitle>
            <IonCardSubtitle>Desarrolladora de Software</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <p className="bio">
              ¡Hola! 👋 Soy Ashley, desarrolladora Full-Stack, apasionada
               por la tecnología de toda la vida. Mi curiosidad inicial se ha convertido 
               en una genuina pasión por el desarrollo.
            </p>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Habilidades Técnicas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>
                  <h3>Desarrollo Frontend</h3>
                  <p>React, Ionic, HTML5, CSS3, Bootstrap</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h3>Lenguajes de Programación</h3>
                  <p>JavaScript, TypeScript, C#, Java</p>
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>
                  <h3>Herramientas</h3>
                  <p>Git, VS Code, Adobe XD, Figma</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard className="contact-card">
          <IonCardHeader>
            <IonCardTitle>Contacto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="contact-buttons">
              <IonButton 
                href="mailto:classeashley@gmail.com" 
                fill="solid" 
                color="primary"
              >
                <IonIcon slot="start" icon={mailOutline} />
                Email
              </IonButton>

              <IonButton 
                href="https://wa.me/+18498833871" 
                fill="solid" 
                color="success"
              >
                <IonIcon slot="start" icon={logoWhatsapp} />
                WhatsApp
              </IonButton>

              <IonButton 
                href="https://www.linkedin.com/in/ashleyclasse" 
                fill="solid" 
                color="secondary"
              >
                <IonIcon slot="start" icon={logoLinkedin} />
                LinkedIn
              </IonButton>

              <IonButton 
                href="https://github.com/AshClasse" 
                fill="solid" 
                color="dark"
              >
                <IonIcon slot="start" icon={logoGithub} />
                GitHub
              </IonButton>

            </div>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab6;
