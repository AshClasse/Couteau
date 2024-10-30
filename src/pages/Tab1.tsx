import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonicSlides, IonPage, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Navigation, Zoom } from 'swiper/modules';
import { gameController, gameControllerOutline, personOutline } from 'ionicons/icons';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import './Tab1.css';
import { useState } from 'react';


const Tab1: React.FC = () => {

  const [videoLoaded, setVideoLoaded] = useState<{[key: string]: boolean}>({});

  const videos = [
    {
      url: "/videos/dontstopbelieving.mp4",
      title: "Don't Stop Believin'",
      description: "Performance icónico del episodio piloto",
      thumbnail:  "/images/thumbnail2.jpg"
    },
    {
      url: "/videos/somebodytolove.mp4",
      title: "Somebody To Love",
      description: "Una de las mejores interpretaciones grupales",
      thumbnail:  "/images/thumbnail1.jpg"
    },
    {
      url: "/videos/ilived.mp4",
      title: "I Lived",
      description: "La serie finaliza con esta increíble presentación",
      thumbnail:  "/images/thumbnail4.jpg"
    },
    {
      url: "/videos/valerie.mp4",
      title: "Valerie",
      description: "Santana protagoniza de esta increíble canción",
      thumbnail:  "/images/thumbnail3.jpg"
    }
  ];

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>bienvenido al glee club🎉</IonTitle>
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
      <IonContent fullscreen={true} className='tab1-content'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">inicio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="hero-section">
          <img src="/images/poster15.jpg" alt="Glee Cast" className="hero-image"/>
        </div>

        <div className="slider-container">
          <Swiper
            modules={[Autoplay, Keyboard, Pagination, Navigation]}
            autoplay={{
              disableOnInteraction: true,
            }}
            keyboard={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            loop={true}
            className="video-swiper"
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index} className="video-slide">
                <div className="video-header">
                  <img src="/images/logo2.png" alt="Glee Logo" className="slide-logo"/>
                  <h2 className="video-title">- {video.title}</h2>
                </div>
                <video 
                  className="slider-video"
                  controls
                  poster={video.thumbnail}
                  preload="none" // Importante: previene la carga automática
                  onLoadedData={() => setVideoLoaded(prev => ({...prev, [video.url]: true}))}
                >
                  <source src={video.url} type="video/mp4" />
                </video>
                <div className="video-description">
                  <p>{video.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
