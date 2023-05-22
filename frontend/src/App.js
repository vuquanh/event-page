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
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from "./screens/OrderScreen";




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
              {/* <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} /> */}
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/order/:id' element={<OrderScreen />}/>

            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
  
    </>
  );
};

export default App;
