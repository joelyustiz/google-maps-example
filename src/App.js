import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Context from "./context/context";
import Home from "./view/Home/Home";
import Navigation from "./view/navigation/Navigation"
import NotFound from "./view/noFound/NoFound"

function App(props) {
  return (
    <Suspense fallback={<div />}>
      <Context.Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/navigation" component={Navigation} />                     
            <Route component={NotFound} />
          </Switch>        
        </BrowserRouter>
      </Context.Provider>    
    </Suspense>
);
}

export default App;
