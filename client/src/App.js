import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import ProviderById from "./pages/ProviderById";
import Checkout from "./pages/checkout/Checkout";
import NotFound from "./pages/NotFound";
import Header from "./components/header";
import Footer from "./components/footer";
import Calendar from "./pages/Calendar";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const availability = [
  {
    time: "3:00",
  },
  {
    time: "4:00",
  },
  {
    time: "5:00",
  },
];

function App() {
  return (
    <div>
      <Header />
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-center align-center min-100-vh bg-primary">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/providers" element={<Providers />} />
              <Route path="/providers/1" element={<ProviderById />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/calendar"
                element={<Calendar availability={availability} />}
              />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
      <Footer />
    </div>
  );
}

export default App;
