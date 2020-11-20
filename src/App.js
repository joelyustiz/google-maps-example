import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './css/GlobalStyles'
import Context from "./context/context";
import Home from "./view/Home/Home";
import { NavBar } from './components/NavBar/NavBar'
import Navigation from "./view/navigation/Navigation"
import NotFound from "./view/noFound/NoFound"

function App(props) {
  return (
    <main>
      <GlobalStyle />
      <Context.Provider>
        <BrowserRouter>
          <Switch>
            <Route  path="./" component={Home} />
            <Route  path="./navigation" component={Navigation} />                     
            <Route component={NotFound} />
          </Switch> 
          <NavBar />       
        </BrowserRouter>
      </Context.Provider>
          
    </main>
);
}

export default App;
