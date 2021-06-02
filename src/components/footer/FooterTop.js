import React from 'react'

const FooterTop = () => {
  return (
    <div className='footertop'>
      <div className='footertopleft'>
        <div className='customer-care'>
          <h3>Customer Care</h3>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Returns & Refunds</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='earnwithdaraz'>
          <h3>Earn with Daraz</h3>
          <ul>
            <li>Daraz University</li>
            <li>Sell on Daraz</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
      <div className='footertopmiddle'>
        <h3>Daraz</h3>
        <ul>
          <li>About Daraz</li>
          <li>Careers</li>
          <li>Daraz Blog</li>
          <li>Terms & Conditiions</li>
          <li>Privacy Policy</li>
          <li>Digital Payments</li>
          <li>Daraz Customer University</li>
          <li> Daraz Daraz Affiliate Program</li>
        </ul>
      </div>
      <div className='footertopright'>
        <div className='footertoprighttop'>
          <img src='./Images/footer/footer1.png' alt='' />
          <div className='shopping'>
            <img src='./Images/footer/footer2.png' alt='' />
            <span className='happy'>Happy Shopping</span>
            <span>Download App</span>
          </div>
        </div>
        <div className='footertoprightbottom'>
          <img src='./Images/footer/footer4.png' alt='' />
          <img src='./Images/footer/footer8.png' alt='' />
          <img src='./Images/footer/footer5.jpeg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default FooterTop
