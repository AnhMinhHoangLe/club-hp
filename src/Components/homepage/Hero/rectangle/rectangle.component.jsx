import React from "react";
import { Card, CardMedia } from "@mui/material"
import sceHero from "../../Images/sce-hero.png";

const Rectangle = () => {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        width: "30%",

        p: 2
      }}
    >
      <CardMedia component="img" height="20%" image={sceHero} alt="sce-hero" />
    </Card>
  );
};
export default Rectangle;
