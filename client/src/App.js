import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Matchup from './pages/Matchup';
import Vote from './pages/Vote';
import NotFound from './pages/NotFound';
import Header from "./components/header";
import Calendar from './pages/Calendar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const availability = [
  {
    time: '3:00'
  },
  {
    time: '4:00'
  },
  {
    time: '5:00'
  }
]

function App() {
  return (
    <div>
    <Header/>
    <ApolloProvider client={client}>
     
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="/matchup" 
              element={<Matchup />}
            />
            <Route 
              path="/matchup/:id" 
              element={<Vote />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
            <Route
            path="/calendar"
            element={<Calendar availability={availability}/>}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    </div>
  );
}

export default App;
