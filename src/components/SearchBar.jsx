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
        <div className='SearchBar-input-wrapper'>
          <svg width='24px' height='24px'
            viewBox="0 0 24 24" 
            aria-hidden="true" 
            className="SearchBar-input-icon">
            <path fill='currentColor'
              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
            </path>
          </svg>
          <input className='SearchBar-input'
            type='text'
            value={this.props.filterText}
            placeholder='Search for a country...'
            onChange={this.handleFilterTextChange}
          />           
        </div>
         
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