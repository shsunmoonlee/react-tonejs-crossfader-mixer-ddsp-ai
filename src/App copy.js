import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Howl, Howler } from "howler";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const App = () => {
  useEffect(() => {
    var sound = new Howl({
      src: ["sound.webm", "sound.mp3"],
    });

    // Play returns a unique Sound ID that can be passed
    // into any method on Howl to control that specific sound.
    var id1 = sound.play();
    var id2 = sound.play();

    // Fade out the first sound and speed up the second.
    sound.fade(1, 0, 1000, id1);
    sound.rate(1.5, id2);
  }, []);

  return (
    <div>
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        autoPlay
        controls
      />
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        autoPlay
        controls
      />
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        autoPlay
        controls
      />
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        // Try other props!
      />
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        // Try other props!
      />
      <AudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        // Try other props!
      />
    </div>
  );
};

export default App;
