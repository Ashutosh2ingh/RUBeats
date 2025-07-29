// track-player-service.js
import TrackPlayer from 'react-native-track-player';

module.exports = async function () {
  // This is where you handle background events (e.g., play/pause/stop)
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });

  // Add more events as needed
};
