import React from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  render() {
    const countriesList = [];
    const countries = this.props.countries;
    const filterText = this.props.filterText;
    const selectedOption = this.props.selectedOption;
    
    countries.forEach((country, index) => {
      if (country.region.indexOf(selectedOption) === -1) {
        return;
      }    

      if (country.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      countriesList.push(
        <CountryInfo
          key={index}
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />        
      )
    });
        
    return (
      <section className='CountriesList'>
        {countriesList}
      </section>
    )
  }
}

function CountryInfo(props) {
  return (
    <Link to={`/country/${props.name}`}>
      <section className='Country'>
        <img
          className='Country-flag' 
          src={props.flag} 
          alt={`flag of ${props.name}`}
        />

        <div className='Country-info'>
          <h4>
            {props.name}
          </h4>
          <ul>
            <li><span className='Country-property'>Population: </span>{props.population}</li>
            <li><span className='Country-property'>Region: </span>{props.region}</li>
            <li><span className='Country-property'>Capital: </span>{props.capital}</li>
          </ul>        
        </div>
      </section>            
    </Link>
  )
};

export default CountriesList;