// Tab7.tsx
import { IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { gameControllerOutline, personOutline } from 'ionicons/icons';
import { useState, useEffect } from 'react';
import './Tab7.css';

interface Card {
  id: number;
  character: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const Tab7: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const initialCards = [
    { id: 1, character: 'Rachel', image: '/characters/rachel.jpg' },
    { id: 2, character: 'Kurt', image: '/characters/kurt.jpg' },
    { id: 3, character: 'Mercedes', image: '/characters/mercedes.jpg' },
    { id: 4, character: 'Santana', image: '/characters/santana.jpg' },
    { id: 5, character: 'Rachel', image: '/characters/rachel.jpg' },
    { id: 6, character: 'Kurt', image: '/characters/kurt.jpg' },
    { id: 7, character: 'Mercedes', image: '/characters/mercedes.jpg' },
    { id: 8, character: 'Santana', image: '/characters/santana.jpg' },
  ];

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...initialCards]
      .sort(() => Math.random() - 0.5)
      .map(card => ({
        ...card,
        isFlipped: false,
        isMatched: false
      }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstIndex, secondIndex] = newFlippedCards;
      
      if (cards[firstIndex].character === cards[secondIndex].character) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].isMatched = true;
          matchedCards[secondIndex].isMatched = true;
          setCards(matchedCards);
          setFlippedCards([]);

          // Check if game is won
          if (matchedCards.every(card => card.isMatched)) {
            setGameWon(true);
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          const unflippedCards = [...cards];
          unflippedCards[firstIndex].isFlipped = false;
          unflippedCards[secondIndex].isFlipped = false;
          setCards(unflippedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>mini juego🎮</IonTitle>
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
      <IonContent fullscreen className="tab7-content">
        <div className="game-container">
          <div className="game-header">
            <h2>Memoria Glee</h2>
            <div className="game-stats">
              <span>Movimientos: {moves}</span>
              <IonButton onClick={shuffleCards} size="small">
                Nuevo Juego
              </IonButton>
            </div>
          </div>

          {gameWon && (
            <div className="win-message">
              <h2>¡Felicitaciones!</h2>
              <p>Has completado el juego en {moves} movimientos</p>
              <IonButton onClick={shuffleCards}>
                Jugar de nuevo
              </IonButton>
            </div>
          )}

          <div className="cards-grid">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`memory-card ${card.isFlipped || card.isMatched ? 'flipped' : ''} 
                           ${card.isMatched ? 'matched' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <img src="/images/glee-logo.jpg" alt="Glee Logo" />
                  </div>
                  <div className="card-back">
                    <img src={card.image} alt={card.character} />
                    <span className="character-name">{card.character}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab7;