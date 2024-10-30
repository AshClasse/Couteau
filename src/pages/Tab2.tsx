// Tab2.tsx
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline, gameControllerOutline } from 'ionicons/icons';
import './Tab2.css';
import { useState } from 'react';

interface Character {
  id: number;
  name: string;
  actor: string;
  description: string;
  image: string;
  details: {
    voice: string;
    bestSongs: string[];
    quotes: string[];
    traits: string[];
  }
}

const characters: Character[] = [
  {
    id: 1,
    name: 'Santana Lopez',
    actor: 'Naya Rivera',
    description: 'Ex-animadora que se convierte en una de las voces más poderosas del club Glee, conocida por su actitud fuerte y su emotivo viaje de auto-descubrimiento.',
    image: '/characters/santana.jpg',
    details: {
      voice: 'Contralto',
      bestSongs: ['Valerie', 'Smooth Criminal', 'River Deep, Mountain High'],
      quotes: [
        "I'm from a place called Lima Heights Adjacent.",
        "The only straight I am is straight-up bitch.",
      ],
      traits: ['Brutalmente honesta', 'Leal', 'Talentosa', 'Protectora']
    }
  },
  {
    id: 2,
    name: 'Mercedes Jones',
    actor: 'Amber Riley',
    description: 'Una diva con una voz extraordinaria que lucha por el reconocimiento que merece, destacándose como una de las mejores cantantes del club.',
    image: '/characters/mercedes.jpg',
    details: {
      voice: 'Soprano',
      bestSongs: ['And I Am Telling You', 'Spotlight', 'Hell To The No'],
      quotes: [
        "I am Beyoncé, I ain't no Kelly Rowland!",
        "Hell to the no!",
      ],
      traits: ['Confidente', 'Talentosa', 'Determinada', 'Independiente']
    }
  },
  {
    id: 3,
    name: 'Kurt Hummel',
    actor: 'Chris Colfer',
    description: 'Un joven fashionista con una voz única que enfrenta el bullying mientras se mantiene fiel a sí mismo, inspirando a otros con su valentía.',
    image: '/characters/kurt.jpg',
    details: {
      voice: 'Contratenor',
      bestSongs: ['Defying Gravity', 'Rose\'s Turn', 'I Want to Hold Your Hand'],
      quotes: [
        "I'm proud to be different. It's the best thing about me.",
        "Dad, I'm gay.",
      ],
      traits: ['Fashionista', 'Compasivo', 'Valiente', 'Creativo']
    }
  },
  {
    id: 4,
    name: 'Rachel Berry',
    actor: 'Lea Michele',
    description: 'La estrella ambiciosa del club Glee, con un talento innegable y una determinación inquebrantable para alcanzar sus sueños de Broadway.',
    image: '/characters/rachel.jpg',
    details: {
      voice: 'Soprano',
      bestSongs: ['Don\'t Rain on My Parade', 'On My Own', 'Get It Right'],
      quotes: [
        "Being a part of something special makes you special.",
        "There's nothing ironic about show choir!",
      ],
      traits: ['Ambiciosa', 'Talentosa', 'Perfeccionista', 'Determinada']
    }
  }]

const Tab2: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>personajes👥</IonTitle>
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
      <IonContent fullscreen className="tab2-content">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">personajes</IonTitle>
          </IonToolbar>
        </IonHeader>

        {!selectedCharacter ? (
          <div className="character-grid">
            {characters.map((character) => (
              <IonCard 
                key={character.id} 
                className="character-card"
                onClick={() => handleCharacterClick(character)}
              >
                <img src={character.image} alt={character.name} className="character-img" />
                <IonCardHeader>
                  <IonCardTitle>{character.name}</IonCardTitle>
                  <IonCardSubtitle>{character.actor}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            ))}
          </div>
        ) : (
          <div className="character-detail">
            <IonCard className="detail-card">
              <img src={selectedCharacter.image} alt={selectedCharacter.name} className="detail-img" />
              <IonCardHeader>
                <IonCardTitle>{selectedCharacter.name}</IonCardTitle>
                <IonCardSubtitle>Interpretado por {selectedCharacter.actor}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p className="character-description">{selectedCharacter.description}</p>
                
                <div className="detail-section">
                  <h3>Tipo de Voz</h3>
                  <p>{selectedCharacter.details.voice}</p>
                </div>

                <div className="detail-section">
                  <h3>Mejores Canciones</h3>
                  <ul>
                    {selectedCharacter.details.bestSongs.map((song, index) => (
                      <li key={index}>{song}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>Frases Célebres</h3>
                  <ul>
                    {selectedCharacter.details.quotes.map((quote, index) => (
                      <li key={index}>"{quote}"</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>Características</h3>
                  <div className="traits-container">
                    {selectedCharacter.details.traits.map((trait, index) => (
                      <span key={index} className="trait-badge">{trait}</span>
                    ))}
                  </div>
                </div>

                <IonButton 
                  expand="block"
                  onClick={() => setSelectedCharacter(null)}
                  className="back-button"
                >
                  Volver a Personajes
                </IonButton>
              </IonCardContent>
            </IonCard>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;