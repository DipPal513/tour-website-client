import React from "react";
import Plans from "../Plans/Plans";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Plans quantity={6}/>
    </>
  );
};

export default Home;
