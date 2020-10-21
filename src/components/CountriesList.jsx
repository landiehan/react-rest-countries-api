import React from 'react';

class CountriesList extends React.Component {
  render() {
    const countriesList = [];
    const countries = this.props.countries;
    const filterText = this.props.filterText;
    const selectedOption = this.props.selectedOption;

    countries.forEach(country => {
      if (country.region.indexOf(selectedOption) === -1) {
        return;
      }    

      if (country.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      countriesList.push(
        <CountryInfo
          key={country.id}
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
    <section className='Country'>
      <img 
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
  )
};

export default CountriesList;