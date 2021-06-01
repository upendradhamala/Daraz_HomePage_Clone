import React from 'react'

const MidContent = () => {
  return (
    <div className='midcontent'>
      <div className='covid-notice'>
        <img src='./Images/notice.png' alt='' />
        <p>LEARN MORE</p>
      </div>
      <div className='functions'>
        <ul>
          <li>
            <img src='./Images/function1.png' alt='' />
            <a href=''>Recharge & eStore</a>
          </li>
          <li>
            <img src='./Images/function2.png' alt='' />

            <a href=''>Stay Informed</a>
          </li>
          <li>
            <img src='./Images/function3.gif' alt='' />

            <a href=''>Win Vouchers</a>
          </li>
          <li>
            <img src='./Images/function4.gif' alt='' />

            <a href=''>Fun Zone</a>
          </li>
          <li>
            <img src='./Images/function5.png' alt='' />

            <a href=''>Help Center</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MidContent
