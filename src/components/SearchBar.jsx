import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSelectedOptionChange = this.handleSelectedOptionChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onHandleFilterTextChange(e.target.value);
  }

  handleSelectedOptionChange(e) {
    this.props.onHandleSelectedOptionChange(e.target.value);
  }

  render() {
    return (
      <section className='SearchBar'>
        <input className='SearchBar-input'
          type='text'
          value={this.props.filterText}
          placeholder='Search a country...'
          onChange={this.handleFilterTextChange}
        />          
        <select className='SearchBar-select'
          value={this.props.selectedOption}
          onChange={this.handleSelectedOptionChange}
        >
          <option value=''>Filter by region</option>
          <option value='Africa'>Africa</option>  
          <option value='Americas'>Americas</option>  
          <option value='Asia'>Asia</option>      
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </section>
    )
  }
}

export default SearchBar;