// Framework Components
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';

// Custom Components
import ExploreContainer from '../components/ExploreContainer';

// Types
import { FC, useState } from 'react';

// Styles
import '../styles/History.css';

const History: FC = () => {
  const [imageSrc, setImageSrc] = useState('');

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;

    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    const imageElement = {
      src: imageUrl
    }
    setImageSrc(imageUrl as string)
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={event => takePicture()}>ASD</IonButton>
        {imageSrc && <img src={imageSrc} />}

      </IonContent>

    </IonPage>
  );
};

export default History;
