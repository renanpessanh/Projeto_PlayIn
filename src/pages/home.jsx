import React from "react";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Playlist from "../components/playlist/playlist";
import Try from "../components/Try/try";
import Footer from "../components/Footer/footer";

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
