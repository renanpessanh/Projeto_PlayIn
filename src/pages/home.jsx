import React from "react";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Playlist from "../components/playlist/playlist";
import Try from "../components/try/try";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Playlist></Playlist>
      <Try></Try>
      <Footer></Footer>
    </>
  );
};

export default Home;
