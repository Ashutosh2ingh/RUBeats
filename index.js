import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import TrackPlayerService from './track-player-service';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => TrackPlayerService);