import React, { useState, useRef, useEffect } from "react";
import {
  Transport,
  CrossFade,
  Sampler,
  Channel,
  Player,
  Meter,
  Destination,
} from "tone";
import * as Tone from "tone";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, Slider, Box, Container } from "@material-ui/core";
import drumsFile from "./audio/park/mp3/drums.mp3";
import bassFile from "./audio/park/mp3/bass.mp3";
import vocalFile from "./audio/park/mp3/vocals.mp3";
import otherFile from "./audio/park/mp3/other.mp3";
import drumsModFile from "./audio/park/mp3/drums-double-bass.mp3";
import bassModFile from "./audio/park/mp3/bass-cello.mp3";
import vocalModFile from "./audio/park/mp3/violin.mp3";
import otherModFile from "./audio/park/mp3/other-viola.mp3";

const useStyles = makeStyles({
  root: {
    height: 300,
  },
  container: {
    marginTop: "30px",
  },
  firstRow: {
    marginBottom: "40px",
  },
});

const App = () => {
  const classes = useStyles();
  const [isLoaded, setLoaded] = useState(false);
  let run = false;
  const drums_orig = useRef(null);
  const bass_orig = useRef(null);
  const vocal_orig = useRef(null);
  const other_orig = useRef(null);

  const drums_mod = useRef(null);
  const bass_mod = useRef(null);
  const vocal_mod = useRef(null);
  const other_mod = useRef(null);

  const sea_channel = useRef(null);

  const crossFade_drums = useRef(null);
  const crossFade_bass = useRef(null);
  const crossFade_vocals = useRef(null);
  const crossFade_other = useRef(null);

  const [crossFade_drums_value, setCrossFade_drums_value] = useState(0.5);
  const [crossFade_bass_value, setCrossFade_bass_value] = useState(0.5);
  const [crossFade_vocals_value, setCrossFade_vocals_value] = useState(0.5);
  const [crossFade_other_value, setCrossFade_other_value] = useState(0.5);
  useEffect(() => {
    drums_orig.current = new Player(drumsFile);
    bass_orig.current = new Player(bassFile);
    vocal_orig.current = new Player(vocalFile);
    other_orig.current = new Player(otherFile);
    drums_mod.current = new Player(drumsModFile);
    bass_mod.current = new Player(bassModFile);
    vocal_mod.current = new Player(vocalModFile);
    other_mod.current = new Player(otherModFile);
    sea_channel.current = new Channel().toDestination();

    crossFade_drums.current = new CrossFade().connect(sea_channel.current);
    crossFade_bass.current = new CrossFade().connect(sea_channel.current);
    crossFade_vocals.current = new CrossFade().connect(sea_channel.current);
    crossFade_other.current = new CrossFade().connect(sea_channel.current);

    drums_orig.current.loop = true;
    bass_orig.current.loop = true;
    vocal_orig.current.loop = true;
    other_orig.current.loop = true;

    drums_mod.current.loop = true;
    bass_mod.current.loop = true;
    vocal_mod.current.loop = true;
    other_mod.current.loop = true;

    drums_orig.current.connect(crossFade_drums.current.a);
    bass_orig.current.connect(crossFade_bass.current.a);
    vocal_orig.current.connect(crossFade_vocals.current.a);
    other_orig.current.connect(crossFade_other.current.a);

    drums_mod.current.connect(crossFade_drums.current.b);
    bass_mod.current.connect(crossFade_bass.current.b);
    vocal_mod.current.connect(crossFade_vocals.current.b);
    other_mod.current.connect(crossFade_other.current.b);

    // drums_orig.current.start();
    // bass_orig.current.start();
    // vocal_orig.current.start();
    // other_orig.current.start();
    // drums_mod.current.start();
    // bass_mod.current.start();
    // vocal_mod.current.start();
    // other_mod.current.start();

    // drums_orig.current.autostart = true;
    // bass_orig.current.autostart = true;
    // vocal_orig.current.autostart = true;
    // other_orig.current.autostart = true;
    // drums_mod.current.autostart = true;
    // bass_mod.current.autostart = true;
    // vocal_mod.current.autostart = true;
    // other_mod.current.autostart = true;

    sea_channel.current.mute = false;
  }, []);

  useEffect(() => {
    console.log(
      "crossFade slider changing",
      crossFade_drums_value,
      crossFade_bass_value,
      crossFade_vocals_value,
      crossFade_other_value
    );
    crossFade_drums.current.fade.value = crossFade_drums_value;
    crossFade_bass.current.fade.value = crossFade_bass_value;
    crossFade_vocals.current.fade.value = crossFade_vocals_value;
    crossFade_other.current.fade.value = crossFade_other_value;
  });
  const startAll = async () => {
    // Transport.start();

    // await Tone.start();
    drums_orig.current.start();
    bass_orig.current.start();
    vocal_orig.current.start();
    other_orig.current.start();
    drums_mod.current.start();
    bass_mod.current.start();
    vocal_mod.current.start();
    other_mod.current.start();
  };
  const stopAll = async () => {
    // await Tone.stop();
    drums_orig.current.stop();
    bass_orig.current.stop();
    vocal_orig.current.stop();
    other_orig.current.stop();
    drums_mod.current.stop();
    bass_mod.current.stop();
    vocal_mod.current.stop();
    other_mod.current.stop();
  };
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box>
        <Grid container>
          <Grid xs={12}>
            <Typography gutterBottom>
              <h2>Park</h2>
            </Typography>
          </Grid>
          <Grid container xs={12} className={classes.firstRow}>
            <Grid item xs={6}>
              <Button
                disabled={false}
                variant="contained"
                color="primary"
                onClick={() => startAll()}
              >
                Play
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => stopAll()}
              >
                Stop
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Grid xs={3}>
            <div className={classes.root}>
              <Slider
                min={0}
                max={1}
                step={0.01}
                orientation="vertical"
                onChange={(e, value) => setCrossFade_drums_value(value)}
                value={crossFade_drums_value}
                aria-labelledby="vertical-slider"
                marks={[
                  { value: 1, label: "double bass" },
                  { value: 0, label: "drums" },
                ]}
              />
            </div>
          </Grid>
          <Grid xs={3}>
            <div className={classes.root}>
              <Slider
                min={0}
                max={1}
                step={0.01}
                orientation="vertical"
                onChange={(e, value) => setCrossFade_bass_value(value)}
                value={crossFade_bass_value}
                aria-labelledby="vertical-slider"
                marks={[
                  { value: 1, label: "cello" },
                  { value: 0, label: "bass" },
                ]}
              />
            </div>
          </Grid>
          <Grid xs={3}>
            <div className={classes.root}>
              <Slider
                min={0}
                max={1}
                step={0.01}
                orientation="vertical"
                onChange={(e, value) => setCrossFade_vocals_value(value)}
                value={crossFade_vocals_value}
                aria-labelledby="vertical-slider"
                marks={[
                  { value: 1, label: "violin" },
                  { value: 0, label: "vocals" },
                ]}
              />
            </div>
          </Grid>
          <Grid xs={3}>
            <div className={classes.root}>
              <Slider
                min={0}
                max={1}
                step={0.01}
                orientation="vertical"
                onChange={(e, value) => setCrossFade_other_value(value)}
                value={crossFade_other_value}
                aria-labelledby="vertical-slider"
                marks={[
                  { value: 1, label: "viola" },
                  { value: 0, label: "others" },
                ]}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
