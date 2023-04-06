import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <main>
        <Header />
        <Container>
          <h1>Welcome to Team 2 Event Page!</h1>
        </Container>
        <div id="spacer"></div>
        <Footer />
      </main>
    </>
  );
};

export default App;
