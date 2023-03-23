import React from "react";
import web from "../src/images/about.jpg";
import Common from "./Common";

const About = () => {
  return (<>
        <Common 
          name="Welcome to About page" 
          btnname="Contact Now" 
          visit="/contact" 
          imgsrc={web}
          />
  </>);
};

export default About;
