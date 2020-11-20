import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './css/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Context from "./context/context";
import Home from "./view/Home/Home";
import { NavBar } from './components/NavBar/NavBar'
import Navigation from "./view/navigation/Navigation"
import NotFound from "./view/noFound/NoFound"

function App(props) {
  return (
    <Suspense fallback={<div />}>
    <GlobalStyle />
      <Context.Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/navigation" component={Navigation} />                     
            <Route component={NotFound} />
          </Switch> 
          <NavBar />       
        </BrowserRouter>
      </Context.Provider>
          
    </Suspense>
);
}

export default App;
