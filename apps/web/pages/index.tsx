import { Button } from 'ui';


// Import icons
import {IonIcons, EvilIcons, FontAwesome5Brands} from 'ui/src/icons'
// import 'ui/src/icons/icons.css'

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <IonIcons size={20} color='red' name="md-bicycle" />
      <EvilIcons size={30} color='blue' name="gear" />
      <FontAwesome5Brands color='orange' size={40} name="instagram" />
    </div>
  );
}
