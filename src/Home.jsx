import React from "react";
import web from "../src/images/home.jpg";
import Common from "./Common";

const Home = () => {
  return (<>
    <Common 
    name="Grow your business with" 
    btnname="Get Started" 
    visit="service" 
    imgsrc={web}
     />
  </>);
};

export default Home;
 