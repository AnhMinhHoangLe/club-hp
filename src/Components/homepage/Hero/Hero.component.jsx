import React from "react";
import sceHero from "../Images/sce-hero.png";
import Rectangle from "./rectangle/rectangle.component";
import Grid from "@mui/material/Grid";

const Hero = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <h1>Software and Computer </h1>
        <h1>Engineering Society</h1>
        <p>Empowering students through support in academics, projects,</p>
        <p>and professional development.</p>
      </Grid>
      <Grid item>
        <Rectangle />
      </Grid>
      {/* <img src={sceHero} alt="sce-hero" className="sce-hero-img" /> */}
    </Grid>
  );
};
export default Hero;
