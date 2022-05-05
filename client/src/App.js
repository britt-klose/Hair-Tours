import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Providers from "./pages/Providers";
import ProvidersById from "./pages/ProviderById";
import Checkout from "./pages/checkout/Checkout";
import NotFound from "./pages/NotFound";
import Header from "./components/header";
import Calendar from "./pages/Calendar";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

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
              <Route path="/providers/:id" element={<ProvidersById />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
