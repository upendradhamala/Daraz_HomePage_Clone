import React from 'react'

const TopNav = () => {
  return (
    <>
      <div className='navbar-top'>
        <div className='navbar-top-left'></div>
        <div className='navbar-top-right'>
          <ul>
            <li>
              <a className='li-first' href=''>
                SAVE MORE ON APP
              </a>
            </li>
            <li>
              <a href=''>SELL ON DARAZ</a>
            </li>
            <li>
              <a href=''>CUSTOMER CARE</a>
            </li>
            <li>
              <a href=''>TRACK MY ORDER</a>
            </li>
            <li>
              <a href=''>LOGIN</a>
            </li>
            <li>
              <a href=''>SIGN UP</a>
            </li>
            <li>
              <a href=''>भाषा परिवर्तन</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-mid'>
        <img src='./Images/darazIcon.png' alt='' className='daraz-icon' />
        <div className='search-box'>
          <input type='text' placeholder='Search in Daraz' />
          <i className='fas fa-search'></i>
        </div>
        <a href=''>
          <i className='fas fa-shopping-cart'></i>
        </a>
        <img src='./Images/add1.gif' alt='' className='nav-ada' />
      </div>
    </>
  )
}

export default TopNav
