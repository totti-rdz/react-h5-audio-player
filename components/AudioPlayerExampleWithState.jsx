import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const audioSrc =
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Dembow_Perreo%2C_Classic_Dembow%2C_and_Rich_Dembow_Beats.ogg";

const Button = ({ onClick }) => (
  <button className="w-10 h-10 bg-gray-200 p-1 rounded-lg" onClick={onClick}>
    click me!
  </button>
);

const Div = ({ text }) => <div className="w-8 h-8">state: {text}</div>;

const AudioPlayerExampleWithState = ({ state, onClick }) => {
  return (
    <AudioPlayer
      autoPlay
      src={audioSrc}
      showJumpControls={false}
      customControlsSection={[<Div text={state.toString()} />, RHAP_UI.MAIN_CONTROLS, <Button onClick={onClick} />]}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};

export default AudioPlayerExampleWithState;
