import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

function App() {

  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
        
      </Container>
    </BrowserRouter>
  );
}

export default App;
