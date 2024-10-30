import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import './Tab3.css';
import { gameControllerOutline, personOutline } from 'ionicons/icons';

interface Moment {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video: string;
  season: string;
  episode: string;
  impact: string;
}


const moments: Moment[] = [
  {
    id: 1,
    title: "We Are Young",
    subtitle: "Un momento de unión y celebración",
    description: "Este momento representa la unidad del grupo y marcó un punto importante en la serie, mostrando la verdadera esencia de New Directions.",
    image: "/moments/moment1.jpg",
    video: "/videos/weareyoung.mp4",
    season: "Temporada 3",
    episode: "Episodio 8: Hold on to Sixteen",
    impact: "Una actuación que captura perfectamente el espíritu de Glee"
  },
  {
    id: 2,
    title: "Blame It on the Alcohol",
    subtitle: "El episodio más divertido",
    description: "Un episodio que mostró un lado más relajado y humorístico de los personajes, con momentos memorables y situaciones hilarantes.",
    image: "/moments/moment2.jpg",
    video: "/videos/blame.mp4",
    season: "Temporada 2",
    episode: "Episodio 14",
    impact: "Uno de los episodios más entretenidos y citados por los fans"
  },
  {
    id: 3,
    title: "Homecoming Slow Motion",
    subtitle: "El regreso triunfal",
    description: "El regreso de New Directions en cámara lenta representa un momento icónico que celebra el legado del club.",
    image: "/moments/moment3.jpg",
    video: "/videos/homecoming.mp4",
    season: "Temporada 6",
    episode: "Episodio 2: Homecoming",
    impact: "Un momento que rinde homenaje a toda la historia de la serie"
  },
  {
    id: 4,
    title: "La Propuesta de Will",
    subtitle: "Un momento romántico inolvidable",
    description: "La emotiva propuesta de matrimonio de Will, un momento que capturó el corazón de los fans.",
    image: "/moments/moment4.jpg",
    video: "/videos/proposal.mp4",
    season: "Temporada 3",
    episode: "Episodio: Yes/No",
    impact: "Uno de los momentos más románticos de la serie"
  }
];


const Tab3: React.FC = () => {
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>momentos📸</IonTitle>
          <IonButtons slot="end">
            <IonButton href='/mini-juego'>
                <IonIcon icon={ gameControllerOutline } />
            </IonButton>
            <IonButton href='/contratame'>
              <IonIcon icon={personOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="tab3-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">momentos</IonTitle>
          </IonToolbar>
        </IonHeader>

          {/* Hero Section con GIF */}
          <div className="hero-section">
            <img 
              src="/moments/moment.gif" 
              alt="Glee Moments" 
              className="hero-gif"
            />
            <div className="hero-overlay">
              <h1>Momentos Favoritos</h1>
            </div>
          </div>

        {!selectedMoment ? (
          <div className="moments-grid">
            {moments.map((moment) => (
              <IonCard 
                key={moment.id} 
                className="moment-card"
                onClick={() => setSelectedMoment(moment)}
              >
                <img 
                  src={moment.image} 
                  alt={moment.title} 
                  className="moment-img"
                />
                                <IonCardHeader>
                  <IonCardTitle>{moment.title}</IonCardTitle>
                  <IonCardSubtitle>{moment.subtitle}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            ))}
          </div>
        ) : (
          <div className="moment-detail">
            <IonCard className="detail-card">
              <img 
                src={selectedMoment.image} 
                alt={selectedMoment.title} 
                className="detail-img"
              />
              <IonCardHeader>
                <IonCardTitle>{selectedMoment.title}</IonCardTitle>
                <IonCardSubtitle>{selectedMoment.subtitle}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="video-container">
                  <video 
                    controls 
                    className="moment-video"
                    poster={selectedMoment.image}
                  >
                    <source src={selectedMoment.video} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>

                <div className="moment-info">
                  <h3>Descripción</h3>
                  <p>{selectedMoment.description}</p>
                </div>

                <div className="moment-info">
                  <h3>Detalles</h3>
                  <p><strong>Temporada:</strong> {selectedMoment.season}</p>
                  <p><strong>Episodio:</strong> {selectedMoment.episode}</p>
                </div>

                <IonButton 
                  expand="block"
                  onClick={() => setSelectedMoment(null)}
                  className="back-button"
                >
                  Volver a Momentos
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
