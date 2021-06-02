import React from 'react'
import { Link } from 'react-router-dom'
import products from '../../DummyData'
import Product from '../Product'
const MidContent = () => {
  console.log(products)
  return (
    <div className='midcontent'>
      <div>
        <Link className='covid-notice' to='/noticeCOVID19'>
          <img src='./Images/notice.png' alt='' />
          <p>LEARN MORE</p>
        </Link>
      </div>
      <div className='functions'>
        <ul>
          <li>
            <Link to='' className='center-elements'>
              <img src='./Images/function1.png' alt='' />
              <span>Recharge & eStore</span>
            </Link>
          </li>
          <li>
            <Link to='' className='center-elements'>
              <img src='./Images/function2.png' alt='' />
              <span> Stay Informed</span>
            </Link>
          </li>
          <li>
            <Link to='' className='center-elements'>
              <img src='./Images/function3.gif' alt='' />
              <span> Win Vouchers</span>
            </Link>
          </li>
          <li>
            <Link to='' className='center-elements'>
              <img src='./Images/function4.gif' alt='' />
              <span>Fun Zone</span>
            </Link>
          </li>
          <li>
            <Link to='' className='center-elements'>
              <img src='./Images/function5.png' alt='' />
              <span> Help Center</span>
            </Link>
          </li>
        </ul>
      </div>
      <span className='note'>Just For You</span>
      <div className='product-list'>
        {products &&
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
      <div className='loadmore'>
        <button>Load More</button>
      </div>
    </div>
  )
}

export default MidContent
