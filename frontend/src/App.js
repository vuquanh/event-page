import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Container } from "react-bootstrap";
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
              <Route path="/cart/:id" element={<CartScreen />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
  
    </>
  );
};

export default App;
