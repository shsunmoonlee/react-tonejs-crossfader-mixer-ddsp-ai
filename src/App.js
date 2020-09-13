import React, { useState, useRef, useEffect } from "react";
import { Transport } from "tone";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Grid, Slider, Box, Container } from "@material-ui/core";
import CrossFadersConstruction from "./CrossFadersConstruction";
import CrossFadersPark from "./CrossFadersPark";
import CrossFadersBeach from "./CrossFadersBeach";
const useStyles = makeStyles({
  root: {
    height: 300,
  },
  container: {
    marginTop: "30px",
  },
});

const App = () => {
  const classes = useStyles();

  // const [volume, setVolume] = useState(0);

  // function makeChannel(name, url, pan) {
  //   const channel = new Channel({}).toDestination();
  //   player = new Player({
  //     url,
  //     loop: true,
  //   })
  //     .sync()
  //     .start(0);
  //   player.connect(channel);

  //   // add a UI element
  //   // ui({
  //   //   name,
  //   //   tone: channel,
  //   //   parent: document.querySelector("#content")
  //   // });
  // }
  // control volume
  // controller to crossfader
  // each 2 channels to destination

  useEffect(() => {}, []);

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container justify="center" alignItems="center">
        <Typography id="title" gutterBottom>
          <h1>Soundscape AI</h1>
        </Typography>
      </Grid>
      <CrossFadersConstruction />
      <CrossFadersPark />
      <CrossFadersBeach />
    </Container>
  );
};

export default App;
