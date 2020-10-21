import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <h1 className='Header-title'>
          Where in the world?
        </h1>
        <div className='Header-toggle'>
          <input 
            type="checkbox"
            id="Header-toggle"
            aria-label='Dark mode toggle'
          />
          <label htmlFor="Header-toggle">
            Dark Mode
          </label>
        </div>
      </header>
    )
  }
}

export default Header;