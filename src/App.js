import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import ShimmerUI from "./components/ShimmerUI";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/store";

//Lazy loading
const Instamart = lazy(() => import("./components/Instamart")); // this is a promise

const AppLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Provider store={store}>
      <HeaderComponent toggleCart={toggleCart} />
      {isCartOpen && <Cart />}
      <Routes>
        <Route path="/DevEats" element={<Body />} />
        <Route path="/about" element={<About />}>
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:id" element={<RestaurantMenu />} />
        <Route
          path="/instamart"
          element={
            <Suspense fallback={<ShimmerUI />}>
              <Instamart />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Provider>
  );
};

const App = () => {
  return (
    <Router basename="/DevEats">
      <AppLayout />
    </Router>
  );
};

export default App;
