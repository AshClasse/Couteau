// Tab2.tsx
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import './Tab2.css';
import { useState } from 'react';
import axios from 'axios';


const Tab2: React.FC = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name) return;

    setLoading(true);
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const predictedGender = response.data.gender;
      setGender(predictedGender);
    } catch (error) {
      console.error('Error fetching gender:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Predicción de Género🤰</IonTitle>
          <IonButtons slot="end">
            <IonButton href='/contratame'>
              <IonIcon icon={personOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className={`gender-container ${gender === 'male' ? 'blue-background' : gender === 'female' ? 'pink-background' : 'neutral-background'}`}>
        <div className="input-container">
          <IonInput 
            value={name} 
            placeholder="Introduce tu nombre" 
            onIonChange={e => setName(e.detail.value!)} 
          />
          <IonButton onClick={handleSubmit} disabled={loading}>
            {loading ? 'Cargando...' : 'Predecir Género'}
          </IonButton>
        </div>
        {gender && (
          <div className="result-container">
            <IonImg src={gender === 'male' ? "/images/male.png" : "/images/female.png"} alt={gender} className="gender-image" />
            <h2>{gender === 'male' ? 'Masculino' : 'Femenino'}</h2>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;