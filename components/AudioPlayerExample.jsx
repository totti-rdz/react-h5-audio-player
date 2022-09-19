import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const audioSrc =
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Dembow_Perreo%2C_Classic_Dembow%2C_and_Rich_Dembow_Beats.ogg";

const AudioPlayerExample = () => (
  <AudioPlayer
    autoPlay
    src={audioSrc}
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
);

export default AudioPlayerExample;
