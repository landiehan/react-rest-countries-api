import React from 'react';
import Header from './components/Header';
import FilterableCountriesList from './components/FilterableCountriesList';
import CountryDetail from './components/CountryDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

export const ThemeContext = React.createContext({
  theme: 'light',
  handleThemeChange: () => {}
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleThemeChange = () => {
      this.setState({
        theme:
          this.state.theme === 'light'
            ? 'dark'
            : 'light'
      });
    }    

    this.state = {
      theme: 'light',
      handleThemeChange: this.handleThemeChange
    };
  }

  componentDidMount() {
    document.querySelector('html').setAttribute('theme', this.state.theme);
  }

  componentDidUpdate() {
    document.querySelector('html').setAttribute('theme', this.state.theme);
  }

  render() {
    return (
      <>
        <ThemeContext.Provider value={this.state}>
          <Header/>  
        </ThemeContext.Provider>
        
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
}

export default App;