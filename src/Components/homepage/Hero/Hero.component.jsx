import React from "react";
import sceHero from "../Images/sce-hero.png";
import Rectangle from "./rectangle/rectangle.component";
import Button from "../../buttons/buttons.component.jsx"
import {Link} from 'react-router-dom'
import './Hero.styles.css'


const Hero = () => {
  return (
    <div>
      <div className='text-header'>
        <h1>Software and Computer </h1>
        <h1>Engineering Society</h1>
      </div>
      
      <div className='text-content'>
        <p>Empowering students through support in academics, projects,</p>
        <p> and professional development.</p>
      </div>

      <Link to='/joinSce'>
        <Button className='join-sce'>Join SCE</Button>
      </Link>

      <div className='photo'>
        <Rectangle />
      </div>
    </div>
  );
};
export default Hero;
