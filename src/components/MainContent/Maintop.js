import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const Maintop = () => {
  const slideImages = [
    'Images/1.jpg',
    'Images/2.jpg',
    'Images/3.jpg',
    'Images/4.jpg',
  ]
  const displayItems = () => {
    document
      .getElementById('secondary-list-item')
      .classList.toggle('show-list-item')
  }
  return (
    <div className='main-top'>
      <Slide easing='ease'>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 2</span> */}
          </div>
        </div>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 3</span> */}
          </div>
        </div>
        <div className='each-slide'>
          <div
            style={{
              backgroundImage: `url(${slideImages[3]})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            {/* <span>Slide 3</span> */}
          </div>
        </div>
      </Slide>
      <div className='menu-list'>
        <ul>
          <li className='list-item-1' onMouseOver={displayItems}>
            Electronic Devices
            <ul className='secondary-list-item' id='secondary-list-item'>
              <li>Mobile</li>
              <li>Tv</li>
              <li>Fridge</li>
              <li>Washing Machine</li>
            </ul>
          </li>
          <li className='list-item-2'>Electronic Accessories</li>
          <li className='list-item-3'>Health & Beauty</li>
          <li className='list-item-4'>Babies & Toys</li>
          <li className='list-item-5'>Groceries & Pets</li>
          <li className='list-item-6'>Home & Lifestyle</li>
          <li className='list-item-7'>Women's Fashion</li>
          <li className='list-item-8'>Men's Fashion</li>
          <li className='list-item-9'>Watches & Accessories</li>
          <li className='list-item-10'>Sports & Outdoor</li>
          <li className='list-item-11'>Automotive & Motorbike</li>
        </ul>
      </div>
    </div>
  )
}

export default Maintop
