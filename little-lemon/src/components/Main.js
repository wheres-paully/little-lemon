// Main.js
import React from "react";
import Nav from "./Nav";
import About from "./About";
import Specials from "./Specials";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Nav />
      <main style={{ paddingLeft: "200px", minHeight: "calc(100vh - 200px)" }}>
        <About />
        <Specials />
      </main>
      <Footer />
    </>
  );
}

export default Main;

