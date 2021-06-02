import React from 'react'
import { Link } from 'react-router-dom'
const TopNav = () => {
  return (
    <>
      <div className='navbar-top'>
        <div className='navbar-top-left'></div>
        <div className='navbar-top-right'>
          <ul>
            <li>
              <Link to='' className='li-first'>
                SAVE MORE ON APP
              </Link>
            </li>
            <li>
              <Link to=''>SELL ON DARAZ</Link>
            </li>
            <li>
              <Link to=''>CUSTOMER CARE</Link>
            </li>
            <li>
              <Link to=''>TRACK MY ORDER</Link>
            </li>
            <li>
              <Link to=''>LOGIN</Link>
            </li>
            <li>
              <Link to=''>SIGN UP</Link>
            </li>
            <li>
              <Link to=''>भाषा परिवर्तन</Link>
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
        <Link to=''>
          <i className='fas fa-shopping-cart'></i>
        </Link>
        <img src='./Images/add1.gif' alt='' className='nav-ada' />
      </div>
    </>
  )
}

export default TopNav
