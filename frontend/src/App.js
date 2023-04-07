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
            <HomeScreen />
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/events/:id" element={<EventScreen />} />
            </Routes>
          </Container>
          {/* <div id="spacer"></div> */}
          <Footer />
        </main>
      </Router>
    </>
  );
};

export default App;
