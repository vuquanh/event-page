import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/event/:id" element={<EventScreen />} />
            </Routes>
          </Container>
        </main>

       
        <Container>
          <h1>Welcome to Team 2 Event Page!</h1>
        </Container>
        <div id="spacer"></div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
