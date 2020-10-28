import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetail() {
  const { countryName } = useParams();
  const [country, setCountry] = useState({name: 'loading'});
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`) 
    .then(res => res.json())
    .then(data => data[0])
    .then(setCountry);
  }, [countryName]);

  const [borders, setBorders] = useState('');
  useEffect(() => {     
    async function GetBorders(country) {
      if (country.borders) {
        const borderCountries = [];
        await Promise.all(country.borders.map(async border => {
          await fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
          .then(res => res.json())
          .then(country => borderCountries.push(country.name));
        }));
        setBorders(borderCountries);
      }      
    }

    GetBorders(country);     
  }, [country]);

  return (
    <main className='Main'>
      <div className='CountryDetail-back'>
        <Link to='/'>
          <span>
            ⬅ Back
          </span>
        </Link>         
      </div>
   
      <section className='CountryDetail'>
        <img
          className='CountryDetail-flag'
          src={country.flag}
          alt={`flag of ${country.name}`}
        />
        <div className='CountryDetail--wrapper'>
          <h3>{country.name}</h3>
          <ul className='CountryDetail-list'>
            <CountryDetailItem property='Native Name' value={country.nativeName} />
            <CountryDetailItem property='Population' value={country.population} />
            <CountryDetailItem property='Region' value={country.region} />
            <CountryDetailItem property='Sub Region' value={country.subRegion} />
            <CountryDetailItem property='Capital' value={country.capital} />
            <CountryDetailItem property='Top Level Domain' value={country.topLevelDomain} />
            {country.currencies ? <CountryDetailItem property='Currencies' value={MapNameAndJoin(country.currencies)} /> : ''}
            {country.languages ? <CountryDetailItem property='Languages' value={MapNameAndJoin(country.languages)} /> : ''}
            {borders ? 
              <Borders property='Border Countries' borders={borders} /> : 'Border Countries Loading error :('
            }
          </ul>
        </div>
      </section>
    </main>
  );
}

function CountryDetailItem(props) {
  return (
    <li>
      <span className='Country-property'>
        {props.property}: </span>
      <span>
        {props.value}  
      </span>     
    </li>
  );
}

function Borders(props) {
  const borders = props.borders.map(border => (
    <Link to={`/country/${border}`}>
      <span className='CountryDetail-borders'>
        {border}
      </span>      
    </Link>
  ));
  return (
    <li className='colSpan-2'>
      <span className='Country-property'>
        {props.property}: </span>
      {borders}
    </li>
  );
}

const MapNameAndJoin = array => array.map(detailObj => detailObj.name).join(', ');

export default CountryDetail;