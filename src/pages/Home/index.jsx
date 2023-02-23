import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Body from "../../../src/Body/Body";

const Home = () => {
  return (
    <div className="App">
    <header>
      <Header />
    </header>
     <Body/>
    <footer>
      <Footer />
    </footer> 
  </div>
  );
};

export default Home;