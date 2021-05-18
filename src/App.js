import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { MovieClient } from './client/MovieClient';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { MovieDetails } from './components/MovieDetails';
import { MovieList } from './components/MovieList';
import { MovieContainer } from './styles/MovieContainer';

function App() {

  return (
    <Router history={'browserHistory'}>
    <div className="App">
      
        <Header />     

        <Switch>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
