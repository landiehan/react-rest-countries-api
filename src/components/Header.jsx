import React from 'react';
import { ThemeContext } from '../App';

class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <h1 className='Header-title'>
          Where in the world?
        </h1>
        <ThemeContext.Consumer>
          {({theme, handleThemeChange}) => (
            <div className='Header-toggle'>
              <input className='screen-reader-only'
                type="checkbox"
                id='Header-toggle'
                aria-label='Dark mode toggle'
                onClick={handleThemeChange}
              />
              <label className='Header-toggle-label' 
                htmlFor='Header-toggle'>
                <svg className='icon-moon' 
                  width='16px' 
                  height='16px' 
                  viewBox='0 0 512 512' 
                  aria-hidden='true'>
                  <path 
                    fill={theme === 'light' ? 'none' : 'currentColor'} 
                    stroke='currentColor' 
                    strokeWidth='32' 
                    d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'/>
                </svg>
                <span>Dark Mode</span>
              </label>
            </div>            
          )}
        </ThemeContext.Consumer>
      </header>
    )
  }
}

export default Header;