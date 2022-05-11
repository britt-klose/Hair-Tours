import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import ProviderById from "./pages/ProviderById";
import Checkout from "./pages/checkout/Checkout";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./components/login";
import SignUp from "./components/signup";
import NotFound from "./pages/NotFound";
import Header from "./components/header";
import Footer from "./components/footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="flex-column align-center min-75-vh bg-primary justify-center align-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/stylists" element={<Providers />} />
              <Route path="/stylists/:userId" element={<ProviderById />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path = "/about" element={<About/>}/> 
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
      <Footer />
    </div>
  );
}

export default App;
