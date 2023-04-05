import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
     <Header />
      <main>
        <Container>
          <h1>Welcome to Team 2 Event Page!</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
