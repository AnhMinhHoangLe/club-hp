import React from "react";
import Hero from "./Hero/Hero.component.jsx";
import PastEvents from "./past-events/past-events.component.jsx"

const Homepage = () => {
  return (
    <div>
      <Hero />
      <PastEvents />
    </div>
  );
};
export default Homepage;
