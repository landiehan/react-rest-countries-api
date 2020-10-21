import React from 'react';
import CountriesList from './CountriesList';
import SearchBar from './SearchBar';

class FilterableCountriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      filterText: '',
      countries: []
    };

    this.onHandleFilterTextChange = this.onHandleFilterTextChange.bind(this);
    this.onHandleSelectedOptionChange = this.onHandleSelectedOptionChange.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json()) 
      .then(data => this.setState({
        countries: data
      }));
  }

  onHandleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  onHandleSelectedOptionChange(selectedOption) {
    this.setState({
      selectedOption: selectedOption
    });
  }

  render() {
    console.log(this.state.selectedOption);
    return (
      <div className='FilterableCountriesList'>
        <SearchBar
          onHandleFilterTextChange={this.onHandleFilterTextChange}
          onHandleSelectedOptionChange={this.onHandleSelectedOptionChange}
        />
        <CountriesList
          countries={this.state.countries}
          selectedOption={this.state.selectedOption}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableCountriesList;