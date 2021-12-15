import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import sceHero from "../../Images/sce-hero.png";
import logo from "../../Images/sce-logo.png"
import Circles from "../circles/circle.component.jsx"
import './rectangle.styles.css'

const Rectangle = () => {

  return (
    <div className='rectangle'>
        <div className='circles'>
          <div className='red'></div>
          <div className='orange'></div>
          <div className='green'></div>
        </div>
        <div className='image-header'>
          <img className='hero-logo' src={logo} alt='hero-logo' />
          <div className='title'>sjsu.sce</div>
          <div className='more'>...</div>
        </div>

        <img className="hero-image"src={sceHero} alt='sce-hero' />

        
    </div>
    
    
  );
};
export default Rectangle;
