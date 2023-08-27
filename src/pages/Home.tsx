// Framework Components
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// Custom Components
import ExploreContainer from '../components/ExploreContainer';

// Types
import { FC } from 'react';

// Styles
import '../styles/Home.css';

const Home: FC = () => {

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 1 page" />   

      </IonContent>

    </IonPage>
  );
};

export default Home;
