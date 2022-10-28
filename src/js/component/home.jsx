import React from "react";
import CardLayout from "./CardLayout.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
// import Card from "./Card";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <CardLayout />
	  
    </>
  );
};

export default Home;
