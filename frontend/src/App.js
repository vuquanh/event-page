import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from './screens/LoginScreen';
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
//import LoginScreen later! 




const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path='/login' element={<LoginScreen />} />
              <Route path="/shipping" element={<ShippingScreen />}/>
              <Route path="/payment" element={<PaymentScreen />}/>
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
