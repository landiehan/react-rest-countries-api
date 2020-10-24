import React from 'react';
import Header from './components/Header';
import FilterableCountriesList from './components/FilterableCountriesList';
import CountryDetail from './components/CountryDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/'>            
            <FilterableCountriesList /> 
          </Route>   
          <Route path='/country/:countryName'>
            <CountryDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;