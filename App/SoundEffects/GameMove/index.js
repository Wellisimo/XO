import {Audio} from 'expo-av';
import hitSound from '../../../assets/sounds/Gunshot.mp3';

export default playSound = async () => {
  const {sound} = await Audio.Sound.createAsync(hitSound);
  await sound.playAsync();
}